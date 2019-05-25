const express = require("express");
const TranslationsController = require('../controllers/translations')
const router = express.Router();





router.get("", TranslationsController.getAllTranslations);

router.post("", TranslationsController.sendFiles)


module.exports = router;
