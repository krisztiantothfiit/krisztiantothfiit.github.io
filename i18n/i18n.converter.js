const fs = require('fs');

const separator = ';';
const i18nFile = '/i18n.csv';

const i18nDest = '/../src/assets/i18n/';

fs.readFile(`${__dirname}${i18nFile}`, function (err, data) {
  if (err) {
    throw err;
  }
  const translations = createJSON(data.toString(), separator);
  const i18nDir = `${__dirname}${i18nDest}`;
  if (!fs.existsSync(i18nDir)) {
    fs.mkdirSync(i18nDir);
  }

  Object.keys(translations).forEach(lang => {
    const translation = translations[lang];
    fs.writeFile(`${__dirname}${i18nDest}${lang}.json`, JSON.stringify(translation, null, 2), 'utf8',
      result => console.log(result ? result : `done generic json from csv for lang ${lang}`));
  })
});


function createJSON(csv, separator) {
  const lines = csv.split('\n');

  const headers = lines.shift().split(separator);
  headers.shift(); //remove id

  const languages = headers.map(header => header.replace(/(\r\n|\n|\r)/gm, ''));
  
  const result = {};
  for (let lang of languages) {
    result[lang] = {};
  }

  for (let line of lines) {
    const currentLine = line.split(separator);

    const id = currentLine.shift();

    languages.forEach((value, index) => {
      const resultForLang = result[value];
      // added "-<br>" because of table header
      resultForLang[id] = replaceAll(currentLine[index],'/n', '-<br>');
      resultForLang[id] = replaceAll(resultForLang[id],'\r', '');
    })
  }

  return result
}

function replaceAll(str, find, replace) {
  if (str) {
    return str.replace(new RegExp(find, 'g'), replace);
  }
  
  return str;
}
