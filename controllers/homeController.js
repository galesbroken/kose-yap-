/**
 * Köse Yapı Dekorasyon - Home Controller
 * Controller handling page request flow and views.
 */

const homeService = require('../services/homeService');

const getHomePage = (req, res, next) => {
  try {
    const company = homeService.getCompanyInfo();
    const heroFeatures = homeService.getHeroFeatures();
    const categories = homeService.getProductCategories();
    const editorialTextures = homeService.getEditorialTextures();
    const services = homeService.getSafeServices();
    const whyChooseUs = homeService.getWhyChooseUs();

    res.render('pages/index', {
      pageTitle: company.title,
      metaDescription: company.description,
      company,
      heroFeatures,
      categories,
      editorialTextures,
      services,
      whyChooseUs,
      path: req.path
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getHomePage
};
