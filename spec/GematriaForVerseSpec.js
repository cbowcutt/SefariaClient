describe("GematriaForVerse", () => {
	var hebrewString = "אַל־תְּבַהֵ֨ל עַל־פִּ֜יךָ וְלִבְּךָ֧ אַל־יְמַהֵ֛ר לְהוֹצִ֥יא דָבָ֖ר לִפְנֵ֣י הָאֱלֹהִ֑ים כִּ֣י הָאֱלֹהִ֤ים בַּשָּׁמַ֙יִם֙ וְאַתָּ֣ה עַל־הָאָ֔רֶץ עַֽל־כֵּ֛ן יִהְ";
	it(".CalculateForVerse(verseString)", () => {
		var testObject = require("../GematriaForVerse");
		var GemiatraAsArray = testObject.CalculateForVerse(hebrewString);
		expect(GemiatraAsArray).toEqual([ 468, 210, 58, 286, 142, 206, 170, 91, 30, 91, 392, 412, 396, 170, 15 ]);
	})
});
