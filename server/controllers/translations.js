const Translation = require('../models/translation');




exports.getAllTranslations = (req, res, next) => {
  Translation.find({}, function (error, translations) {
    if (error) {
      return res.status(401).json({
        message: 'someting went wrong'
      })
    }
    return res.json(translations)
  })
};
exports.sendFiles = (req, res, next) => {
  const data = req.body;
  Translation.collection.insertMany(data, function (err, docs) {
    if (err) {
      return console.error(err);
    } else {
      console.log("Multiple documents inserted to Collection");
    }
  });
};

