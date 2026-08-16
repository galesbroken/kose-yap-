/**
 * Köse Yapı Dekorasyon - Express Router
 * Defines clean endpoints forwarding requests to controllers.
 */

const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

// Home page
router.get('/', homeController.getHomePage);

module.exports = router;
