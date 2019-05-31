const Translation = require('../models/translation');




var stream = Translation.synchronize();
var count = 0;

stream.on('data', function (e, k) {
  count++;
})
stream.on('close', function () {
})
stream.on('error', function (err) {
})



exports.getAllTranslations = (req, res, next) => {
  Translation.find({}, function (error, translations) {
    if (error) {
      return res.status(401).json({
        message: 'Someting went wrong and all translations couldnt be retrieved'
      })
    }
    return res.json(translations)
  })
};
exports.sendFiles = (req, res, next) => {
  if(req.body !=='[{}]'){
    const data = req.body;
    Translation.collection.insertMany(data, function (err, docs) {
      if (err) {
        return res.status(401).json({
          message: 'Could not send the specified file to the database'
        })
      } else {
        return res.status(200).json({
          message: 'added translations to database'
        })
      }
    });
  }
};

exports.searchForFiles = (req, res, next) => {
  Translation.search({
    query_string: {
      query: req.body.q
    },

  }, {
    size: 3
  }, function (error, results) {
    if (error) {
      return res.status(401).json({
        message: 'Could not search for the specified file'
      })
    }
    var data = results.hits.hits.map(function (hit) {
      return hit._source;
    })
    return res.status(200).json(data);
  })

}