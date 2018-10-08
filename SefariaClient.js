var rp = require('request-promise');
var hostUrl = "sefaria.org"

exports.BibleVerse = (book, chapter, verse) => {

}

exports.RequestChapter = async (book, chapter) => {
	var options = {
		uri: 'https://' + hostUrl + '/api/texts/' + book +'.' + chapter,
		json: true,
		headers: {
			charset: "utf-8"
		}
	};
	return await rp(options)
		.then((responseJSON) => {
			return responseJSON;
		})
		.catch((err) => {
			console.log('unable to request ' + book +'.' + chapter + "\n\n" + options.uri)
		});
}
exports.BibleText = function (responseJSON) {
	this.Book = responseJSON.indexTitle;
	this.Chapter = responseJSON.sections[0];
	this.VersesInEnglish = responseJSON.text;
	this.VersesInHebrew = responseJSON.he;
	this.Verse = (language, index) => {
		if (index > this.VersesInEnglish.length) {
			throw new Error('Verse index outside range');
		}
		if (language == "English") {
			return this.VersesInEnglish[index - 1];
		}
		if (language == "Hebrew") {
			return this.VersesInHebrew[index - 1];
		};
	};
}
	 