const express = require("express");
const TranslationsController = require('../controllers/translations')
const router = express.Router();


router.get("", TranslationsController.getAllTranslations);
router.post("", TranslationsController.sendFiles)
router.post('/searchtranslation',TranslationsController.searchForFiles)

module.exports = router;
