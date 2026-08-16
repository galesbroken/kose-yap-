# SECURITY SKILL

## Purpose

Develop applications with a security-first mindset by identifying, preventing and mitigating security risks throughout the entire development lifecycle.

---

## Security Mindset

Assume every input is malicious until validated.

Assume every endpoint can be abused.

Assume every uploaded file is unsafe.

Assume every client request can be modified.

Never trust client-side validation.

---

## Authentication

Always verify identity securely.

Protect:

- Login
- Registration
- Password Reset
- Email Verification
- Session Management

Use secure password hashing.

Expire sessions appropriately.

Never expose sensitive authentication details.

---

## Authorization

Verify permissions on every protected action.

Never rely on hidden buttons or frontend checks.

Protect:

- Admin Panel
- Dashboard
- API Endpoints
- File Access
- Management Pages

Permission checks belong on the server.

---

## Input Validation

Validate every request.

Check:

- Required fields
- Data types
- Length
- Format
- Allowed values

Reject invalid input immediately.

---

## File Upload Security

Accept only approved file types.

Verify MIME type and extension.

Rename uploaded files.

Limit upload size.

Store uploads outside sensitive directories whenever possible.

Never execute uploaded files.

---

## Database Security

Always use parameterized queries.

Never concatenate SQL.

Restrict database privileges.

Use transactions where data integrity matters.

Never expose raw SQL errors.

---

## API & External Services

Protect API keys.

Store secrets only in environment variables.

Validate all external responses.

Handle failures safely.

Never expose credentials in source code.

---

## Production Hardening

Before deployment verify:

- Debug mode disabled
- Development routes removed
- Sensitive files protected
- Security headers configured
- Rate limiting enabled where required
- HTTPS enforced when available
- Logging enabled

Production environments should expose the minimum required surface.

---

## Security Audit

Before approving any project review:

- SQL Injection
- XSS
- CSRF (when applicable)
- Authentication
- Authorization
- File uploads
- Dependency vulnerabilities
- Environment variables
- Sensitive file exposure
- Session security

Every critical issue must be resolved before release.

---

## Armes Recommendations

Every production project should include:

- Helmet
- Rate Limiting
- Secure Cookies/Sessions
- Input Validation
- Parameterized Queries
- File Upload Validation
- Global Error Handler
- Security Logging
- Dependency Audit
- Production Security Review

Security should be verified before every deployment.

---

## Checklist

✓ Authentication secure

✓ Authorization verified

✓ Input validated

✓ SQL Injection prevented

✓ XSS reviewed

✓ File uploads secured

✓ Secrets protected

✓ Production hardened

✓ Security audit completed

✓ Ready for production

If a security vulnerability is detected:

1. Explain the risk.

2. Explain the impact.

3. Recommend the safest solution.

4. Implement the fix.

5. Verify that no regression has been introduced.

Never ignore a critical security issue.