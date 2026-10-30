#!/usr/bin/env bash
# ==============================================================================
# TecUnique Website – Ubuntu/Debian Linux VPS Full Provisioning Script
#
# Usage (execute on fresh VPS as root or via sudo):
#   sudo bash scripts/setup-vps.sh <DOMAIN> <ALLOWED_ADMIN_IP> [APP_DIR]
#
# Examples:
#   sudo bash scripts/setup-vps.sh tecunique.com 203.0.113.195
#   sudo bash scripts/setup-vps.sh tecunique.com 203.0.113.195 /var/www/tecunique
# ==============================================================================

set -e

DOMAIN="${1:-tecunique.com}"
ALLOWED_IP="${2:-}"
APP_DIR="${3:-/var/www/tecunique}"

BOLD="\033[1m"
GREEN="\033[38;5;48m"
BLUE="\033[38;5;39m"
YELLOW="\033[38;5;220m"
RED="\033[38;5;196m"
NC="\033[0m"

log_info() { echo -e "${BLUE}[INFO]${NC} $1"; }
log_success() { echo -e "${GREEN}[SUCCESS]${NC} $1"; }
log_warn() { echo -e "${YELLOW}[WARN]${NC} $1"; }
log_error() { echo -e "${RED}[ERROR]${NC} $1"; }

if [ "$EUID" -ne 0 ]; then
    log_error "This script must be executed with root/sudo privileges."
    exit 1
fi

echo -e "\n${BOLD}=====================================================${NC}"
echo -e "${BOLD}   TecUnique Website – VPS Provisioning Script       ${NC}"
echo -e "${BOLD}=====================================================${NC}"
echo "Domain:          $DOMAIN"
echo "Admin IP:        ${ALLOWED_IP:-[None specified]}"
echo "App Directory:   $APP_DIR"
echo -e "=====================================================\n"

# ─── 1. System Package Updates ────────────────────────────────────────────────
log_info "Updating system package repositories..."
apt-get update -y
apt-get install -y curl wget git unzip ufw nginx certbot python3-certbot-nginx

# ─── 2. Node.js 20 LTS Installation ──────────────────────────────────────────
if ! command -v node >/dev/null 2>&1 || [ "$(node -v | cut -d'.' -f1)" != "v20" ]; then
    log_info "Installing Node.js 20.x LTS from official NodeSource repository..."
    curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
    apt-get install -y nodejs
    log_success "Node.js installed: $(node -v) with npm: $(npm -v)"
else
    log_success "Node.js $(node -v) is already installed."
fi

# ─── 3. PM2 Process Manager Installation ─────────────────────────────────────
if ! command -v pm2 >/dev/null 2>&1; then
    log_info "Installing PM2 globally..."
    npm install -g pm2
    log_success "PM2 installed."
else
    log_success "PM2 is already installed."
fi

# ─── 4. Application Directory Setup ───────────────────────────────────────────
log_info "Creating application directory: $APP_DIR..."
mkdir -p "$APP_DIR"
chown -R "$SUDO_USER:$SUDO_USER" "$APP_DIR" 2>/dev/null || true

# ─── 5. Nginx Reverse Proxy Configuration ─────────────────────────────────────
NGINX_CONF="/etc/nginx/sites-available/$DOMAIN"
log_info "Configuring Nginx reverse proxy at $NGINX_CONF..."

ADMIN_RESTRICTION=""
if [ -n "$ALLOWED_IP" ]; then
    ADMIN_RESTRICTION="
    # Perimeter IP whitelist for admin CMS and admin APIs
    location ~* ^/(admin|api/admin) {
        allow $ALLOWED_IP;
        deny all;

        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
    }
"
fi

cat > "$NGINX_CONF" <<EOF
server {
    listen 80;
    listen [::]:80;
    server_name $DOMAIN www.$DOMAIN;

    client_max_body_size 25M;
$ADMIN_RESTRICTION
    # Static asset caching for Next.js build chunks
    location /_next/static {
        proxy_pass http://127.0.0.1:3000;
        proxy_cache_valid 200 365d;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }

    # Reverse proxy for all dynamic pages and API routes
    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
    }
}
EOF

ln -sf "$NGINX_CONF" "/etc/nginx/sites-enabled/$DOMAIN"
rm -f /etc/nginx/sites-enabled/default 2>/dev/null || true

nginx -t
systemctl reload nginx
log_success "Nginx configured and reloaded."

# ─── 6. Firewall Configuration (UFW) ──────────────────────────────────────────
log_info "Configuring UFW firewall (SSH, HTTP, HTTPS)..."
ufw allow OpenSSH >/dev/null 2>&1 || true
ufw allow 'Nginx Full' >/dev/null 2>&1 || true
echo "y" | ufw enable >/dev/null 2>&1 || true
log_success "Firewall active."

# ─── 7. Summary & Next Steps ──────────────────────────────────────────────────
echo -e "\n${GREEN}${BOLD}✔ VPS Provisioning Complete!${NC}\n"
echo "Next Steps:"
echo "1. Deploy application artifacts into: $APP_DIR"
echo "2. Obtain free Let's Encrypt SSL certificate by running:"
echo "   sudo certbot --nginx -d $DOMAIN -d www.$DOMAIN"
echo "3. Execute deployment script:"
echo "   cd $APP_DIR && bash scripts/deploy-server.sh"

