/**
 * Köse Yapı Dekorasyon - Express Application Entry Point
 * Port: 3000
 * Armes Bilişim Standards
 */

require('dotenv').config();
const path = require('path');
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const helmet = require('helmet');

const routes = require('./routes');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 3000;

// Security Middleware (Helmet)
app.use(
  helmet({
    contentSecurityPolicy: false,
    crossOriginResourcePolicy: false,
    crossOriginEmbedderPolicy: false,
    frameguard: false
  })
);

// Body Parsers & Static Files
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// View Engine Setup (EJS + Layouts)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('layout', 'layouts/main');

// Routes
app.use('/', routes);

// Error Handling
app.use(errorHandler.handle404);
app.use(errorHandler.handle500);

// Start Server
app.listen(PORT, () => {
  console.log(`================================================`);
  console.log(` Köse Yapı Dekorasyon Sunucusu Aktif`);
  console.log(` Port: http://localhost:${PORT}`);
  console.log(` Ortam: ${process.env.NODE_ENV || 'development'}`);
  console.log(`================================================`);
});

module.exports = app;
