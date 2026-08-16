# =============================================================================
# DATABASE PRINCIPLES
# =============================================================================

MySQL2 is the default database.

For very small projects, JSON storage may be used only if a relational database provides no clear benefit.

Design the database for long-term scalability.

Normalize data when appropriate.

Use foreign keys where relationships exist.

Never duplicate data unless it provides a measurable performance benefit.

All database operations must use parameterized queries.

Prepare every database for production from the beginning.

# =============================================================================
# DATABASE INITIALIZATION
# =============================================================================

Every new project must initialize its own database automatically.

On first startup:

• Verify database connection.

• Create the database if permitted.

• Create all required tables using CREATE TABLE IF NOT EXISTS.

• Create indexes.

• Create foreign keys.

• Insert required default records.

• Create the first administrator account if configured.

The project should be able to start on a completely empty database without manual SQL execution.

# =============================================================================
# MIGRATIONS & SEEDERS
# =============================================================================

Every project must include a migration system.

Database structure changes should never require manual SQL edits.

Prefer versioned migrations.

Provide seed functions for:

• Default administrator

• Default settings

• Roles

• Permissions

• Initial system data

Seed operations must be safe to execute multiple times without creating duplicate records.

# =============================================================================
# QUERY STANDARDS
# =============================================================================

Always use parameterized queries.

Never concatenate user input into SQL.

Create reusable database helper functions.

Avoid SELECT * unless explicitly required.

Only retrieve the columns needed.

Use transactions for multi-step operations.

Optimize queries before adding indexes.

Never execute repeated queries inside loops when they can be combined.

# =============================================================================
# DATA INTEGRITY
# =============================================================================

Validate all data before saving.

Use appropriate data types.

Use NOT NULL where applicable.

Use UNIQUE constraints when required.

Prefer timestamps for auditing.

Store dates using DATETIME or TIMESTAMP.

Maintain referential integrity with foreign keys whenever practical.

Avoid orphaned records.

# =============================================================================
# BACKUP & MAINTENANCE
# =============================================================================

Support automatic database backups.

Store backups outside the public directory.

Keep migration history.

Log database errors.

Monitor slow queries when possible.

Provide maintenance utilities for backup, restore and cleanup operations.

Database maintenance should require minimal manual intervention.

# =============================================================================
# DATABASE CHECKLIST
# =============================================================================

Before considering the database complete:

✓ Connection verified.

✓ Tables created automatically.

✓ Migrations available.

✓ Seed data available.

✓ Indexes created.

✓ Foreign keys configured.

✓ Parameterized queries used.

✓ Transactions implemented where required.

✓ Backup strategy prepared.

✓ No SQL Injection risks detected.

# =============================================================================
# AUTO DATABASE UPGRADE
# =============================================================================

On every application startup:

• Check the current database version.

• Compare it with the application version.

• Execute pending migrations automatically.

• Record successful migrations.

• Never execute the same migration twice.

• Roll back safely if a migration fails.

The application should always keep the database schema synchronized automatically.

Manual database updates should never be required.