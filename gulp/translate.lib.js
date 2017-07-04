var fs = require('fs');
var _ = require('lodash');

function getTranslate(lang) {
  lang = lang || 'en';

  var path = './src/lang/' + lang + '.json';

  if (fs.existsSync(path)) {
    var info = fs.readFileSync(path);
    try {
      var json = JSON.parse(info);
      return json;
    }
    catch (e) {
      console.log(e);
      return {};
    }
  } else {
    console.log("Can not find file: " + path);
    return {};
  }
}

function translateFilter(translations, key) {
  var keyAr = key.split('.');

  _.forEach(keyAr, function (val) {
    translations = translations[val] || '';
  });

  return translations || key;
}

module.exports = {
  getTranslate: getTranslate,
  translateFilter: translateFilter
};
