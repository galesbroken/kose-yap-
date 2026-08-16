# =============================================================================
# EXPRESS STANDARDS
# =============================================================================

Express is the default backend framework.

Keep Express lightweight and modular.

Configure middleware centrally.

Separate routes, controllers and services.

Never place business logic inside routes.

Always use async/await.

Centralize error handling.

Keep app.js clean and focused on application startup.

Prefer reusable middleware over duplicated logic.

Prepare every project for production from the beginning.

# =============================================================================
# ROUTES & CONTROLLERS
# =============================================================================

Routes should only define endpoints.

Controllers should:

• Validate request flow.

• Call services.

• Return responses.

Avoid implementing business logic inside controllers.

Keep controllers concise.

Use meaningful route names.

Group routes by feature.

Avoid deeply nested routing structures.

# =============================================================================
# SERVICES
# =============================================================================

All business logic belongs inside services.

Services should:

• Process business rules.

• Communicate with models.

• Return predictable results.

Services should not render views.

Services should not access request or response objects.

Keep services reusable and independent.

# =============================================================================
# EJS STANDARDS
# =============================================================================

EJS templates should focus on presentation only.

Avoid business logic inside templates.

Use layouts and partials whenever possible.

Create reusable components.

Keep templates readable.

Avoid duplicated HTML.

Move repeated sections into partials.

Pass prepared data from controllers.

Do not process complex logic inside EJS.

# =============================================================================
# MIDDLEWARE
# =============================================================================

Create middleware for reusable request processing.

Typical middleware includes:

• Authentication

• Authorization

• Validation

• Logging

• Error handling

• Security

Avoid creating middleware for feature-specific business logic.

Keep middleware focused on one responsibility.

# =============================================================================
# RESPONSE & ERROR HANDLING
# =============================================================================

Handle errors consistently.

Never expose internal errors to users.

Log unexpected errors.

Display user-friendly error pages.

Return consistent API responses.

Validate all user input before processing.

Avoid silent failures.

Every unexpected situation should be handled gracefully.

# =============================================================================
# EXPRESS CHECKLIST
# =============================================================================

Before completing a feature verify:

✓ Routes remain lightweight.

✓ Controllers contain no business logic.

✓ Services contain business logic.

✓ EJS templates only render data.

✓ Middleware is reusable.

✓ Error handling is consistent.

✓ Views are modular.

✓ Folder structure remains organized.

The Express application should remain scalable, maintainable and production-ready.