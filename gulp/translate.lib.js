var fs = require('fs');
var _ = require('lodash');

function getTranslate(lang) {
  lang = lang || 'en';

  var path = '../src/lang/' + lang + '.json';

  try {
    return require(path);
  }
  catch (e) {
    console.error(e);
    return {};
  }
}

function translateFilter(translations, key) {
  var result = _.get(translations, key, '');

  if (!result) {
    console.error('Translation key wasn\'t found: ' + key);
  }

  return result || key;
}

module.exports = {
  getTranslate: getTranslate,
  translateFilter: translateFilter
};
