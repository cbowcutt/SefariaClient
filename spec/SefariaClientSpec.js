describe('SefariaClient.RequestChapter(book, chapter)', function () {
	var jsonResponse;
	var testObject;
	var expectedBook = "Ecclesiastes";
	var expectedChapter = 5;
	var expectedFirstVerseEnglish = 'Keep your mouth from being rash, and let not your throat<i></i> be quick to bring forth speech before God. For God is in heaven and you are on earth; that is why your words should be few.'
	var expectedFirstVerseHebrew = "\u05d0\u05b7\u05dc\u05be\u05ea\u05bc\u05b0\u05d1\u05b7\u05d4\u05b5\u05a8\u05dc \u05e2\u05b7\u05dc\u05be\u05e4\u05bc\u05b4\u059c\u05d9\u05da\u05b8 \u05d5\u05b0\u05dc\u05b4\u05d1\u05bc\u05b0\u05da\u05b8\u05a7 \u05d0\u05b7\u05dc\u05be\u05d9\u05b0\u05de\u05b7\u05d4\u05b5\u059b\u05e8 \u05dc\u05b0\u05d4\u05d5\u05b9\u05e6\u05b4\u05a5\u05d9\u05d0 \u05d3\u05b8\u05d1\u05b8\u0596\u05e8 \u05dc\u05b4\u05e4\u05b0\u05e0\u05b5\u05a3\u05d9 \u05d4\u05b8\u05d0\u05b1\u05dc\u05b9\u05d4\u05b4\u0591\u05d9\u05dd \u05db\u05bc\u05b4\u05a3\u05d9 \u05d4\u05b8\u05d0\u05b1\u05dc\u05b9\u05d4\u05b4\u05a4\u05d9\u05dd \u05d1\u05bc\u05b7\u05e9\u05c1\u05bc\u05b8\u05de\u05b7\u0599\u05d9\u05b4\u05dd\u0599 \u05d5\u05b0\u05d0\u05b7\u05ea\u05bc\u05b8\u05a3\u05d4 \u05e2\u05b7\u05dc\u05be\u05d4\u05b8\u05d0\u05b8\u0594\u05e8\u05b6\u05e5 \u05e2\u05b7\u05bd\u05dc\u05be\u05db\u05bc\u05b5\u059b\u05df \u05d9\u05b4\u05d4\u05b0\u05d9\u05a5\u05d5\u05bc \u05d3\u05b0\u05d1\u05b8\u05e8\u05b6\u0596\u05d9\u05da\u05b8 \u05de\u05b0\u05e2\u05b7\u05d8\u05bc\u05b4\u05bd\u05d9\u05dd\u05c3";
	beforeEach(async function(done) {
		testObject = require('../SefariaClient');
		jsonResponse = await testObject.RequestChapter('Ecclesiastes', 5)
			.then((json) => {
				return json;
			})
			.catch((err) => {
				throw new Error("error while sending request:\n\n" + err);
				done();
			});
			done();
	});
	describe('RequestChapter(book, chapter)', function (done) {
		it('indexTitle should contain the correct book', (done) => {
			expect(jsonResponse.indexTitle).toBe(expectedBook);
			done();
		});
		it('sections[0] should be the correct chapter', (done) => {
			expect(jsonResponse.sections[0]).toBe(expectedChapter);
			done();
		});
		it('text should be an array of verses in English', (done) => {
			expect(jsonResponse.text[0]).toBe(expectedFirstVerseEnglish);
			done();
		});
		it('he should be an array of verses in Hebrew', (done) => {
			expect(jsonResponse.he[0]).toBe(expectedFirstVerseHebrew);
			done();
		});
	});
	describe('BibleText(jsonResponse)', function (done) {
		var bibleTextObject;
		beforeEach((done) => {
			bibleTextObject = new testObject.BibleText(jsonResponse);
			done();
		});
		it('Book should be the book in jsonResponse', (done) => {
			expect(bibleTextObject.Book).toBe(expectedBook);
			done();
		})
		it('Chapter should be the chapter in jsonResponse', (done) => {
			expect(bibleTextObject.Chapter).toBe(expectedChapter);
			done();
		});
		it('First verse in English should be correct', (done) => {
			expect(bibleTextObject.VersesInEnglish[0]).toBe(expectedFirstVerseEnglish);
			done();
		});
		it('First verse in Hebrew should be correct', (done) => {
			expect(bibleTextObject.VersesInHebrew[0]).toBe(expectedFirstVerseHebrew);
			done();
		});
		it("Verse('English', 1) should be correct", (done) => {
			expect(bibleTextObject.Verse('English', 1)).toBe(expectedFirstVerseEnglish);
			done();
		});
		it("Verse('Hebrew', 1) should be correct", (done) => {
			expect(bibleTextObject.Verse('Hebrew', 1)).toBe(expectedFirstVerseHebrew);
			done();
		});
		it("Verse('English, 255) should throw an exception", (done) => {
			expect(() => { bibleTextObject.Verse('English', 255) }).toThrow(new Error('Verse index outside range'));
			done();
		});
	})

});