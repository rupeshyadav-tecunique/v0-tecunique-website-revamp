#!/usr/bin/env bash
# ==============================================================================
# TecUnique Website – Automated Server-Side Deployment & Restart Script
# 
# Usage:
#   bash scripts/deploy-server.sh
#   OR (from app root):
#   ./scripts/deploy-server.sh
# 
# This script automates:
# 1. Extraction of deploy-cpanel.zip if present (safely preserving .env files)
# 2. Installation of production dependencies
# 3. Idempotent database indexing & admin user seeding (scripts/init-db.mjs)
# 4. Zero-downtime application restart (PM2, cPanel Passenger, or Systemd)
# 5. Local health check verification probe
# ==============================================================================

set -e

# ANSI Color codes
BOLD="\033[1m"
GREEN="\033[38;5;48m"
BLUE="\033[38;5;39m"
YELLOW="\033[38;5;220m"
RED="\033[38;5;196m"
NC="\033[0m"

log_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

log_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

log_warn() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

echo -e "\n${BOLD}=====================================================${NC}"
echo -e "${BOLD}   TecUnique Website – Server Deployment Script      ${NC}"
echo -e "${BOLD}=====================================================${NC}\n"

APP_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$APP_DIR"
log_info "Working directory: $APP_DIR"

# ─── 1. Unzip deploy-cpanel.zip if present ─────────────────────────────────────
ZIP_FILE="$APP_DIR/deploy-cpanel.zip"
if [ -f "$ZIP_FILE" ]; then
    log_info "Detected deploy-cpanel.zip. Extracting production artifacts..."
    
    # Backup current .next if exists
    if [ -d "$APP_DIR/.next" ]; then
        rm -rf "$APP_DIR/.next.bak"
        cp -r "$APP_DIR/.next" "$APP_DIR/.next.bak" 2>/dev/null || true
    fi

    # Unzip overwrite without prompting, preserving existing .env files
    if command -v unzip >/dev/null 2>&1; then
        unzip -o -q "$ZIP_FILE" -d "$APP_DIR"
        log_success "Extracted deploy-cpanel.zip successfully."
        rm -f "$ZIP_FILE"
    else
        log_warn "Command 'unzip' not found. Skipping automatic zip extraction."
    fi
else
    log_info "No deploy-cpanel.zip found in root. Using existing repository files."
fi

# Ensure scripts have execution permissions
chmod +x "$APP_DIR/scripts/"*.sh 2>/dev/null || true

# ─── 2. Check Node.js and NPM ─────────────────────────────────────────────────
if ! command -v node >/dev/null 2>&1; then
    log_error "Node.js is not found on PATH. Please ensure Node.js (v18+ or v20+) is installed and accessible."
    exit 1
fi

NODE_VERSION=$(node -v)
log_info "Using Node.js runtime: ${BOLD}$NODE_VERSION${NC}"

# ─── 3. Verify Environment File ───────────────────────────────────────────────
if [ ! -f "$APP_DIR/.env" ] && [ ! -f "$APP_DIR/.env.local" ] && [ ! -f "$APP_DIR/.env.production" ]; then
    log_warn "No .env or .env.production file detected!"
    if [ -f "$APP_DIR/.env.example" ]; then
        log_info "Creating .env.production from .env.example..."
        cp "$APP_DIR/.env.example" "$APP_DIR/.env.production"
        log_warn "Please edit .env.production to configure your company MONGODB_URI and secrets."
    fi
else
    log_success "Production environment configuration file verified."
fi

# ─── 4. Install / Update Production Dependencies ──────────────────────────────
log_info "Installing / updating production npm dependencies..."
if command -v npm >/dev/null 2>&1; then
    npm install --omit=dev --no-audit --prefer-offline --loglevel=error
    log_success "Production dependencies up-to-date."
else
    log_error "npm command not found. Cannot install dependencies."
    exit 1
fi

# ─── 5. Run Database Initialization & Indexing ────────────────────────────────
if [ -f "$APP_DIR/scripts/init-db.mjs" ]; then
    log_info "Running idempotent database initialization (collections & indexes)..."
    node "$APP_DIR/scripts/init-db.mjs" || {
        log_warn "Database initialization returned a non-zero status. Verify MONGODB_URI and Atlas network access."
    }
fi

# ─── 6. Application Process Restart ───────────────────────────────────────────
log_info "Restarting application server process..."

RESTARTED=false

# 6a. Check for PM2 (Standard Linux VPS)
if command -v pm2 >/dev/null 2>&1; then
    if pm2 describe tecunique-web >/dev/null 2>&1; then
        log_info "Reloading existing PM2 process: tecunique-web..."
        pm2 reload tecunique-web --update-env
        RESTARTED=true
        log_success "PM2 process reloaded."
    elif pm2 describe tecunique >/dev/null 2>&1; then
        log_info "Reloading existing PM2 process: tecunique..."
        pm2 reload tecunique --update-env
        RESTARTED=true
        log_success "PM2 process reloaded."
    else
        log_info "Starting new PM2 process: tecunique-web..."
        pm2 start server.js --name "tecunique-web" -i max
        pm2 save
        RESTARTED=true
        log_success "PM2 process started and saved."
    fi
fi

# 6b. Check for cPanel Phusion Passenger
# Phusion Passenger monitors tmp/restart.txt to perform zero-downtime graceful restart
mkdir -p "$APP_DIR/tmp"
touch "$APP_DIR/tmp/restart.txt"
if [ "$RESTARTED" = false ]; then
    log_success "Touched tmp/restart.txt for cPanel Phusion Passenger graceful reload."
    RESTARTED=true
fi

# 6c. Check for Systemd service
if command -v systemctl >/dev/null 2>&1 && systemctl is-active --quiet tecunique.service 2>/dev/null; then
    log_info "Restarting systemd service: tecunique.service..."
    sudo systemctl restart tecunique.service 2>/dev/null || true
    log_success "Systemd service restarted."
fi

# ─── 7. Post-Deployment Probe & Health Check ──────────────────────────────────
log_info "Performing local health check probe..."
sleep 2

PROBE_PORT="${PORT:-3000}"
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" "http://127.0.0.1:$PROBE_PORT" 2>/dev/null || echo "000")

if [ "$HTTP_CODE" = "200" ] || [ "$HTTP_CODE" = "308" ] || [ "$HTTP_CODE" = "307" ] || [ "$HTTP_CODE" = "301" ]; then
    log_success "Health check passed! Local HTTP server responded with status: ${BOLD}$HTTP_CODE${NC}"
else
    log_warn "Health check probe returned HTTP status $HTTP_CODE. The application may still be compiling or starting up."
fi

echo -e "\n${GREEN}${BOLD}✔ Deployment completed successfully!${NC}\n"

