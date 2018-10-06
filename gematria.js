require('https');
var exports = module.exports = {};
var BibleReferenceUrl = "sefaria.org"

/api/texts/Ecclesiastes.5
exports.MapToNumber = {
	'א': 1,
	'ב': 2,
	'ג': 3,
	'ד': 4,
	'ה': 5,
	'ו': 6,
	'ז': 7,
	'ח': 8,
	'ט': 9,
	'י': 10,
	'כ': 20,
	'ל': 30,
	'מ': 40,
	'נ': 50,
	'ס': 60,
	'ע': 70,
	'פ': 80,
	'צ': 90,
	'ק': 100,
	'ר': 200,
	'ש': 300,
	'ת': 400,
	'ך': 20,
	'ם': 40,
	'ן': 50,
	'ף': 80,
	'ץ': 90
}

exports.Gematria = (hebrewWord) => {
  var numericalValue = 0;
  hebrewWord.split('').forEach.each((letter) => {
	  numericalValue += exports.MapToNumber[Letter];
  });
  return numericalValue;
}