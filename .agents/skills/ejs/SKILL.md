# EJS SKILL

## Purpose

Build maintainable, reusable and production-ready server-rendered interfaces using EJS.

---

## Architecture

EJS is responsible for presentation only.

Never place business logic inside templates.

Prepare all required data before rendering.

Views should only display data.

---

## Folder Structure

Organize views using:

- layouts/
- partials/
- pages/
- errors/

Group pages by feature when the project grows.

Keep the structure predictable.

---

## Layouts

Use a shared layout whenever possible.

Keep repeated HTML inside layouts.

Avoid duplicate page structures.

Create reusable page templates.

---

## Partials

Extract reusable UI into partials.

Typical partials include:

- Header
- Navbar
- Footer
- Sidebar
- Breadcrumb
- Pagination
- Alerts
- Modals

Avoid repeating HTML across pages.

---

## Components

Design reusable UI components.

Keep styling consistent.

Support configurable data through template variables.

Avoid hardcoded content.

---

## Rendering

Controllers should prepare all required data.

Avoid:

- Database queries
- Business logic
- Complex calculations

inside EJS templates.

---

## Forms

Always:

- Display validation errors.
- Preserve submitted values when appropriate.
- Show clear success and error messages.
- Support accessibility.

Never trust client-side validation alone.

---

## Assets

Serve CSS, JavaScript, fonts and images from the public directory.

Organize assets clearly.

Avoid inline CSS and JavaScript unless justified.

---

## SEO

Support dynamic:

- Title
- Meta description
- Canonical URL
- Open Graph tags
- Structured data where appropriate

Every page should generate proper metadata.

---

## Performance

Keep templates lightweight.

Move repeated sections into partials.

Lazy-load heavy assets when appropriate.

Avoid unnecessary rendering complexity.

---

## Armes Recommendations

Every project should include:

- Base layout
- Shared partials
- Error pages (404, 500)
- Reusable UI components
- Dynamic metadata support
- Responsive structure
- Mobile-first design

Templates should remain clean, readable and easy to extend.

---

## Checklist

✓ Business logic outside EJS

✓ Layout system used

✓ Partials reused

✓ Dynamic metadata

✓ Responsive structure

✓ Accessible forms

✓ Clean template hierarchy

✓ Production-ready organization