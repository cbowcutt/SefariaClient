var gematria = require("./gematria.js");

exports.CalculateForVerse = (verseString) => {
	return verseString.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
		.split(" ")
		.map((word) => {
			return gematria.NumericalValue(word)
		});
}