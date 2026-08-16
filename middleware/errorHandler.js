/**
 * Köse Yapı Dekorasyon - Error Handler Middleware
 */

const homeService = require('../services/homeService');

const handle404 = (req, res, next) => {
  const company = homeService.getCompanyInfo();
  res.status(404).render('errors/404', {
    pageTitle: 'Sayfa Bulunamadı | ' + company.name,
    metaDescription: 'Aradığınız sayfa bulunamadı.',
    company,
    path: req.path
  });
};

const handle500 = (err, req, res, next) => {
  console.error('SERVER ERROR:', err);
  const company = homeService.getCompanyInfo();
  res.status(500).render('errors/404', {
    pageTitle: 'Sunucu Hatası | ' + company.name,
    metaDescription: 'Bir hata oluştu.',
    company,
    path: req.path
  });
};

module.exports = {
  handle404,
  handle500
};
