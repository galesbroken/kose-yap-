# =============================================================================
# SECURITY PRINCIPLES
# =============================================================================

Security is mandatory.

Every project must be developed with a security-first mindset.

Protect user data.

Protect system integrity.

Never trade security for convenience.

Validate every input.

Sanitize every output.

Assume all external data is untrusted.

# =============================================================================
# SECURITY PRINCIPLES
# =============================================================================

Security is mandatory.

Every project must be developed with a security-first mindset.

Protect user data.

Protect system integrity.

Never trade security for convenience.

Validate every input.

Sanitize every output.

Assume all external data is untrusted.

# =============================================================================
# AUTHENTICATION & AUTHORIZATION
# =============================================================================

Authentication and authorization must be separated.

Protect all administrative routes.

Verify permissions on every restricted action.

Never trust client-side authorization.

Use secure session and cookie settings.

Expire sessions appropriately.

Apply rate limiting to sensitive endpoints such as login and password reset.

# =============================================================================
# FILES & DEPENDENCIES
# =============================================================================

Keep dependencies updated.

Remove unused packages.

Validate uploaded files.

Restrict allowed file types.

Store uploaded files outside sensitive locations whenever possible.

Never expose:

• .env

• Backups

• Logs

• Internal configuration files

Disable directory listing in production.

# =============================================================================
# SECURITY REVIEW
# =============================================================================

Before completing any project perform a security review.

Verify:

✓ SQL Injection risks.

✓ XSS risks.

✓ CSRF protection where applicable.

✓ Authentication and authorization.

✓ File upload security.

✓ Sensitive file exposure.

✓ Dependency vulnerabilities.

✓ Environment variable usage.

✓ Security headers.

✓ Rate limiting where required.

Do not mark the project as complete until all critical security issues have been resolved.

Generate a final security summary with any remaining recommendations.