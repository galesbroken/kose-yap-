# EXPRESS SKILL

## Purpose

Build scalable, maintainable and production-ready Express applications using the Armes architecture.

---

## Project Structure

Always separate:

- Routes
- Controllers
- Services
- Middleware
- Models
- Validators
- Utils
- Config

Keep `app.js` focused on application startup.

Avoid placing business logic outside the service layer.

---

## Routing

Routes should only:

- Define endpoints.
- Call controllers.
- Apply middleware.

Group routes by feature.

Use meaningful and REST-friendly naming where appropriate.

Never place SQL or business logic inside routes.

---

## Controllers

Controllers coordinate the request lifecycle.

Responsibilities:

- Validate request flow.
- Call services.
- Return responses.
- Render views.

Keep controllers lightweight.

Avoid duplicate logic.

---

## Services

All business logic belongs here.

Services should:

- Process business rules.
- Access models or database helpers.
- Return predictable results.

Services must not depend on Express request or response objects.

---

## Middleware

Create middleware only when logic is reusable.

Typical middleware:

- Authentication
- Authorization
- Validation
- Logging
- Security
- Rate limiting

Avoid feature-specific middleware.

---

## Error Handling

Use centralized error handling.

Never expose internal errors.

Return meaningful responses.

Log unexpected failures.

Handle async errors consistently.

---

## Configuration

Store all sensitive values inside `.env`.

Never hardcode:

- API Keys
- Database credentials
- Tokens
- Secrets

Create `.env.example`.

---

## Performance

Avoid unnecessary middleware.

Avoid repeated database queries.

Cache expensive operations when appropriate.

Prefer async/await.

---

## Security

Validate every request.

Sanitize user input.

Escape output where required.

Apply security middleware when appropriate.

Protect admin routes.

---

## Armes Recommendations

Always create:

- Automatic database initialization.
- Migration support.
- Structured logging.
- Global error handler.
- Health check endpoint.
- Production-ready folder structure.

Projects should be deployable immediately after cloning and environment configuration.

---

## Checklist

✓ Modular architecture

✓ Thin routes

✓ Lightweight controllers

✓ Service layer implemented

✓ Centralized error handling

✓ Environment variables configured

✓ Production-ready structure

✓ No duplicated logic

✓ Secure by default

✓ Easy to maintain