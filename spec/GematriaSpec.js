describe("Gematria", () => {
	var gematria = require("../gematria");
	var hebrewWordUnicode = 'אַל־ת';
	it("NumericalValue", () => {
		var actualValue = gematria.NumericalValue(hebrewWordUnicode);
		expect(actualValue).toBe(431);
	})
})