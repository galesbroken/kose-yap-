# MYSQL SKILL

## Purpose

Build reliable, scalable and production-ready MySQL databases using MySQL2.

---

## Database Initialization

Every project must support automatic database initialization.

On application startup:

- Verify database connection.
- Create the database if permitted.
- Execute migrations automatically.
- Create missing tables.
- Create indexes.
- Create foreign keys.
- Seed default data when required.

A new project should work on an empty database without manual SQL execution.

---

## Migrations

Every project must include a migration system.

Migration files should be versioned.

Each migration must:

- Be idempotent whenever practical.
- Create only missing resources.
- Never destroy data unintentionally.
- Record successful execution.

Never require manual SQL updates.

---

## Table Creation

Prefer:

CREATE TABLE IF NOT EXISTS

for every table.

Create indexes immediately after table creation.

Add foreign keys where appropriate.

Avoid duplicate table definitions.

---

## Queries

Always use parameterized queries.

Never concatenate user input.

Only select required columns.

Avoid unnecessary queries.

Reuse database helper functions.

Keep queries readable.

---

## Transactions

Use transactions whenever:

- Multiple tables change.
- Financial data changes.
- Stock changes.
- Related records must remain synchronized.

Rollback immediately on failure.

Never leave partial updates.

---

## Indexing

Create indexes for:

- Foreign keys.
- Frequently searched columns.
- Frequently sorted columns.

Avoid unnecessary indexes.

Review slow queries before adding indexes.

---

## Data Integrity

Use:

- NOT NULL
- UNIQUE
- DEFAULT values
- Foreign Keys

where appropriate.

Validate data before saving.

Prevent orphaned records.

---

## Performance

Optimize queries before optimizing hardware.

Avoid:

SELECT *

Avoid repeated queries inside loops.

Batch operations when appropriate.

Monitor slow queries during development.

---

## Backup

Support database backup and restore.

Keep backups outside public directories.

Never expose backups publicly.

Verify backup integrity when possible.

---

## Security

Always:

- Parameterize queries.
- Validate input.
- Restrict database permissions.
- Protect credentials inside .env.

Never expose SQL errors to users.

---

## Armes Recommendations

Every project should include:

- Automatic database initialization
- Automatic migration runner
- Automatic schema upgrades
- Automatic seed execution
- Migration history
- Database health check
- Connection retry support
- Graceful startup failure handling

The application should synchronize the database automatically during startup.

---

## Checklist

✓ Database initializes automatically

✓ Migrations available

✓ CREATE TABLE IF NOT EXISTS used

✓ Parameterized queries

✓ Transactions where required

✓ Indexes created

✓ Foreign keys configured

✓ Automatic upgrades

✓ Backup strategy prepared

✓ Production-ready database