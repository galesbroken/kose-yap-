# =============================================================================
# ARCHITECTURE PRINCIPLES
# =============================================================================

Every project must follow a modular and scalable architecture.

Organize the project by responsibility, not by file type alone.

Every folder and file must have a clear purpose.

Avoid tightly coupled modules.

Keep dependencies flowing in one direction.

The project should remain understandable as it grows.

Prefer extending the architecture over rewriting it.

Business logic must remain independent from rendering and routing.

The project should be easy for a new developer to understand within a short time.

# =============================================================================
# DEFAULT PROJECT STRUCTURE
# =============================================================================

Unless the project requires otherwise, prefer the following structure:

app/
config/
controllers/
middleware/
models/
public/
routes/
services/
utils/
views/
database/
logs/
uploads/

Group related files together.

Avoid placing unrelated files in the same folder.

Keep the root directory clean.

Create new folders only when they improve organization.

Avoid unnecessary nesting.

# =============================================================================
# LAYER RESPONSIBILITIES
# =============================================================================

Routes

Receive requests and forward them to controllers.

Controllers

Validate the request flow and coordinate services.

Services

Contain business logic.

Models

Handle data interaction only.

Middleware

Process requests before controllers.

Utilities

Contain reusable generic helper functions.

Views

Display data only.

Never place business logic inside EJS templates.

Never place SQL queries inside controllers.

Never mix rendering logic with business logic.

# =============================================================================
# DEPENDENCY RULES
# =============================================================================

Dependencies should always move inward.

Views should never depend on database logic.

Routes should never depend directly on SQL.

Controllers should communicate through services.

Utilities must remain independent.

Avoid circular dependencies.

Avoid importing large modules when only a small function is required.

Keep dependencies minimal and intentional.

# =============================================================================
# SCALABILITY
# =============================================================================

Design every feature as if the project will grow.

Avoid writing code that only works for today's requirements.

Prefer reusable modules.

Separate shared functionality.

When a feature becomes large,
split it into smaller modules.

Do not wait until the project becomes difficult to maintain.

Keep future expansion in mind,
but avoid unnecessary overengineering.

# =============================================================================
# ANTI PATTERNS
# =============================================================================

Avoid:

• Business logic inside routes.

• SQL queries inside views.

• Large controllers.

• Large utility files.

• Duplicate services.

• Circular imports.

• Global mutable state.

• Hardcoded configuration values.

• Copy-paste implementations.

Whenever an anti-pattern is detected,
refactor it before adding new functionality.

# =============================================================================
# ARCHITECTURE CHECKLIST
# =============================================================================

Before completing a feature verify:

□ Folder structure remains organized.

□ Business logic is inside services.

□ Controllers remain lightweight.

□ Views only render data.

□ No duplicated architecture exists.

□ Modules are reusable.

□ Dependencies are minimal.

□ New features fit naturally into the existing structure.

The architecture should remain clean, predictable and easy to extend.

# =============================================================================
# ARMES STANDARD PROJECT STRUCTURE
# =============================================================================

Unless explicitly requested otherwise, follow the Armes Bilişim project architecture.

Preferred structure:

/
├── app/
├── config/
├── controllers/
├── database/
│   ├── migrations/
│   ├── seeds/
│   └── backups/
├── logs/
├── middleware/
├── models/
├── public/
│   ├── css/
│   ├── js/
│   ├── images/
│   ├── videos/
│   ├── fonts/
│   └── uploads/
├── routes/
├── services/
├── utils/
├── validators/
├── views/
│   ├── layouts/
│   ├── partials/
│   ├── pages/
│   └── errors/
├── .env
├── .env.example
├── app.js
├── package.json
└── README.md

Keep the structure consistent across all projects.

Only introduce additional folders when they provide clear organizational value.

Avoid creating folders that contain only one trivial file.

Prefer long-term maintainability over short-term convenience.

# =============================================================================
# PROJECT INITIALIZATION
# =============================================================================

When starting a new project:

1. Analyze the project requirements.

2. Create the recommended folder structure.

3. Install only the required dependencies.

4. Configure Express.

5. Configure EJS.

6. Configure MySQL2 or JSON storage depending on project size.

7. Create environment configuration.

8. Configure error handling.

9. Configure logging.

10. Create reusable layouts and partials.

11. Create a clean service layer.

12. Create README.md.

13. Prepare the project for production from the beginning.

Avoid temporary implementations during initialization.

The initial project structure should already be scalable.

# =============================================================================
# ARCHITECTURE SUCCESS CRITERIA
# =============================================================================

A project architecture is considered successful when:

✓ New developers can understand it quickly.

✓ Features can be added without restructuring the project.

✓ Business logic is isolated.

✓ Responsibilities are clearly separated.

✓ Duplicate code is minimized.

✓ Dependencies remain simple.

✓ The project scales without becoming chaotic.

✓ Folder names are meaningful.

✓ File names are descriptive.

✓ Future maintenance is straightforward.

The architecture should feel predictable, organized and production-ready.

If the architecture becomes difficult to explain,
it is too complicated and should be simplified.