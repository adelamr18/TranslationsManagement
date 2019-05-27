const Translation = require('../models/translation');




var stream = Translation.synchronize();
var count = 0;

stream.on('data', function (e, k) {
  count++;
})
stream.on('close', function () {
  console.log('indexed' + count + 'documents')
})
stream.on('error', function (err) {
  console.log(error)
})



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
      res.status(200).json({
        message: 'added translations'
      })
      console.log("Multiple documents inserted to Collection");
    }
  });
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
      alert(error)
    }
    console.log(results, ' --------------------------------------------')
    var data = results.hits.hits.map(function (hit) {
      return hit._source;
    })
    console.log(data, 'the data in node.js')
    res.json(data);
  })

}