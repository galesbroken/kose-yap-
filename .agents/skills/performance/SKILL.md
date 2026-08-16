# PERFORMANCE SKILL

## Purpose

Build fast, efficient and scalable applications by making performance a priority throughout development.

---

## Performance Mindset

Performance is a feature.

Optimize during development, not after completion.

Every decision should consider:

- Loading speed
- Rendering
- Memory usage
- CPU usage
- Network requests
- Database performance

Avoid unnecessary complexity.

---

## Frontend Performance

Optimize:

- Images
- Fonts
- CSS
- JavaScript
- Videos
- Icons

Prefer:

- WebP / AVIF
- Lazy Loading
- Minified assets
- Deferred scripts
- Optimized font loading

Remove unused assets before deployment.

---

## Backend Performance

Review:

- Database queries
- Middleware
- API responses
- File operations
- Logging

Avoid unnecessary processing.

Reduce duplicate work.

Reuse expensive calculations when appropriate.

---

## Database Performance

Always:

- Optimize queries.
- Use indexes correctly.
- Limit returned data.
- Avoid duplicate queries.
- Use transactions efficiently.

Monitor slow queries during development.

---

## Animation Performance

Keep animations smooth.

Prefer:

- Transform
- Opacity

Avoid expensive layout calculations.

Lazy-load heavy animation assets.

Respect low-performance devices.

---

## Resource Management

Load only what is needed.

Unload unused resources.

Avoid unnecessary npm packages.

Review dependency impact before installation.

Keep the project lightweight.

---

## Monitoring

Before release review:

- Asset sizes
- JavaScript execution
- Database performance
- Memory usage
- Animation performance

Identify and eliminate bottlenecks.

---

## Armes Recommendations

Every production project should:

- Optimize assets
- Compress images
- Remove unused dependencies
- Optimize SQL queries
- Minimize render blocking resources
- Keep bundle size reasonable
- Review Lighthouse results
- Review Core Web Vitals

Performance should be reviewed before every release.

---

## Checklist

✓ Assets optimized

✓ Images compressed

✓ Fonts optimized

✓ Database optimized

✓ Animations smooth

✓ Dependencies reviewed

✓ No obvious bottlenecks

✓ Production performance verified

✓ Ready for deployment