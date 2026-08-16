# =============================================================================
# GENERAL DEVELOPMENT PRINCIPLES
# =============================================================================

Every line of code becomes future maintenance.

Write code that another engineer can understand within minutes.

Optimize for readability before cleverness.

Optimize for maintainability before speed.

Optimize for scalability before convenience.

Code should communicate intent immediately.

Avoid surprising behavior.

Avoid hidden logic.

Prefer explicit code over implicit code.

Every implementation should be easy to modify.

Every implementation should be easy to remove.

Every implementation should be easy to test.

A feature is considered complete only when it is understandable.

Readable code is more valuable than short code.

Consistency is more important than personal preference.

Never sacrifice project consistency.

If existing code follows a good standard,
follow that standard.

If existing code follows a poor standard,
gradually improve it.

Never introduce technical debt intentionally.

Every new feature should leave the project
better than before.

# =============================================================================
# CLEAN CODE
# =============================================================================

Always write code for humans first.

Computers execute code.

Humans maintain it.

Code should explain itself.

Avoid unnecessary complexity.

Avoid deeply nested conditions.

Prefer early returns.

Prefer descriptive variables.

Avoid magic values.

Avoid duplicated logic.

Avoid large functions.

Avoid giant files.

Every file should have one primary purpose.

Every module should solve one problem.

Every function should solve one problem.

Never mix unrelated responsibilities.

Reduce cognitive load.

Someone unfamiliar with the project should understand
the implementation without extensive explanation.

# =============================================================================
# NAMING CONVENTIONS
# =============================================================================

Names must describe intent.

Never abbreviate unless universally understood.

Bad

tmp

obj

data

test

newData

item

value

Good

customerProfile

invoiceNumber

paymentStatus

appointmentDate

shoppingCart

userPermissions

Never encode implementation details into names.

Names describe purpose,
not implementation.

Boolean variables should answer questions.

Examples

isAdmin

hasPermission

canEdit

shouldCache

wasUpdated

Functions should describe actions.

Examples

createInvoice()

calculateDiscount()

sendReminder()

validateInput()

generateSlug()

Variables should use nouns.

Functions should use verbs.

Constants should use
UPPER_SNAKE_CASE.

# =============================================================================
# FILE ORGANIZATION
# =============================================================================

Every file should have a single responsibility.

Avoid files exceeding reasonable size.

Prefer splitting files before they become difficult to navigate.

Group related functionality together.

Separate

Routes

Controllers

Services

Repositories

Utilities

Middlewares

Validators

Configurations

Do not mix frontend logic
with backend logic.

Do not mix business logic
with routing.

Business logic belongs inside services.

Routes should remain thin.

Controllers should coordinate.

Services should implement logic.

Utilities should remain generic.

# =============================================================================
# FUNCTION STANDARDS
# =============================================================================

Functions should be small.

Functions should perform one task.

Prefer functions under 40 lines.

If a function requires extensive comments,
consider refactoring.

Avoid more than four parameters.

When parameter count increases,
prefer objects.

Avoid hidden side effects.

Avoid modifying external state unnecessarily.

Functions should return predictable results.

Avoid unexpected mutations.

Never duplicate functionality.

Extract reusable logic.

# =============================================================================
# REFACTORING POLICY
# =============================================================================

Refactoring is encouraged whenever it improves the project.

Do not preserve poor code simply because it already exists.

Refactor when:

• Code is duplicated.
• A file becomes difficult to navigate.
• A function has multiple responsibilities.
• Variable or function names are unclear.
• Business logic is mixed with routing or rendering.
• Reusable logic appears multiple times.
• Readability can be significantly improved.

Refactoring must not change existing functionality.

Improve the structure before adding unnecessary complexity.

Prefer incremental improvements over large rewrites.

Never refactor only for personal preference.

Every refactor must increase readability, maintainability or scalability.

# =============================================================================
# DOCUMENTATION STANDARDS
# =============================================================================

Documentation is part of the project.

Keep documentation synchronized with the codebase.

Update documentation whenever:

• New features are added.
• APIs change.
• Environment variables change.
• Database structure changes.
• Project setup changes.

Avoid documenting obvious code.

Documentation should explain:

• Why the solution exists.
• How it works.
• How to maintain it.
• Important decisions and limitations.

README should always remain accurate.

Never leave outdated documentation.

# =============================================================================
# QUALITY CHECKLIST
# =============================================================================

Before completing any task verify:

□ Code is readable.

□ Naming is consistent.

□ No duplicated logic exists.

□ Error handling is complete.

□ Folder structure remains organized.

□ Functions have single responsibility.

□ No unused files remain.

□ No unused packages remain.

□ No obvious performance issues exist.

□ Documentation has been updated if required.

A task is complete only after this checklist has been reviewed.