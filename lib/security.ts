/**
 * Security and sanitization utilities.
 */

/**
 * Escapes characters with special meaning in HTML to prevent HTML and Script injection.
 */
export function escapeHtml(unsafe: string | null | undefined): string {
  if (unsafe === null || unsafe === undefined) return '';
  return String(unsafe)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Sanitize a single-line string (like email subject, sender name) removing newlines to prevent header injection.
 */
export function sanitizeHeader(str: string | null | undefined): string {
  if (!str) return '';
  return String(str).replace(/[\r\n]+/g, ' ').trim();
}
