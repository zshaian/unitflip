const unitFlip = require("../src/main");

const conversionItems = (targetUnit, conversionProps) => {
  return conversionProps.map(({ sourceUnit, expectedValue }) => {
    return [
      16,
      expectedValue,
      targetUnit,
      sourceUnit,
      2,
      { chFontSize: 16, viewPortWidth: 1280, viewPortHeight: 743 },
    ];
  });
};

const unitConversion = [
  // px unit conversion
  ...conversionItems("px", [
    { sourceUnit: "rem", expectedValue: 1 },
    { sourceUnit: "em", expectedValue: 1 },
    { sourceUnit: "%", expectedValue: 100 },
    { sourceUnit: "vw", expectedValue: 1.25 },
    { sourceUnit: "vh", expectedValue: 2.15 },
    { sourceUnit: "vmin", expectedValue: 2.15 },
    { sourceUnit: "vmax", expectedValue: 1.25 },
    { sourceUnit: "ch", expectedValue: 1 },
    { sourceUnit: "cm", expectedValue: 0.42 },
    { sourceUnit: "mm", expectedValue: 4.23 },
    { sourceUnit: "in", expectedValue: 0.17 },
    { sourceUnit: "pt", expectedValue: 12 },
    { sourceUnit: "pc", expectedValue: 1 },
    { sourceUnit: "q", expectedValue: 64 },
  ]),
  // in unit conversion
  ...conversionItems("in", [
    { sourceUnit: "px", expectedValue: 1536 },
    { sourceUnit: "rem", expectedValue: 96 },
    { sourceUnit: "em", expectedValue: 96 },
    { sourceUnit: "%", expectedValue: 9600 },
    { sourceUnit: "vw", expectedValue: 120 },
    { sourceUnit: "vh", expectedValue: 206.73 },
    { sourceUnit: "vmin", expectedValue: 206.73 },
    { sourceUnit: "vmax", expectedValue: 120 },
    { sourceUnit: "ch", expectedValue: 96 },
    { sourceUnit: "cm", expectedValue: 40.64 },
    { sourceUnit: "mm", expectedValue: 406.4 },
    { sourceUnit: "pt", expectedValue: 1152 },
    { sourceUnit: "pc", expectedValue: 96 },
    { sourceUnit: "q", expectedValue: 1625.6 },
  ]),
  // pc unit conversion
  ...conversionItems("pc", [
    { sourceUnit: "px", expectedValue: 256 },
    { sourceUnit: "rem", expectedValue: 16 },
    { sourceUnit: "em", expectedValue: 16 },
    { sourceUnit: "%", expectedValue: 1600 },
    { sourceUnit: "vw", expectedValue: 20 },
    { sourceUnit: "vh", expectedValue: 34.45 },
    { sourceUnit: "vmin", expectedValue: 34.45 },
    { sourceUnit: "vmax", expectedValue: 20 },
    { sourceUnit: "ch", expectedValue: 16 },
    { sourceUnit: "cm", expectedValue: 6.77 },
    { sourceUnit: "mm", expectedValue: 67.73 },
    { sourceUnit: "in", expectedValue: 2.67 },
    { sourceUnit: "pt", expectedValue: 192 },
    { sourceUnit: "q", expectedValue: 270.93 },
  ]),
  // pt unit conversion
  ...conversionItems("pt", [
    { sourceUnit: "px", expectedValue: 21.33 },
    { sourceUnit: "rem", expectedValue: 1.33 },
    { sourceUnit: "em", expectedValue: 1.33 },
    { sourceUnit: "%", expectedValue: 133.33 },
    { sourceUnit: "vw", expectedValue: 1.67 },
    { sourceUnit: "vh", expectedValue: 2.87 },
    { sourceUnit: "vmin", expectedValue: 2.87 },
    { sourceUnit: "vmax", expectedValue: 1.67 },
    { sourceUnit: "ch", expectedValue: 1.33 },
    { sourceUnit: "cm", expectedValue: 0.56 },
    { sourceUnit: "mm", expectedValue: 5.64 },
    { sourceUnit: "in", expectedValue: 0.22 },
    { sourceUnit: "pc", expectedValue: 1.33 },
    { sourceUnit: "q", expectedValue: 22.58 },
  ]),
  // ch conversion unit
  ...conversionItems("ch", [
    { sourceUnit: "px", expectedValue: 256 },
    { sourceUnit: "rem", expectedValue: 16 },
    { sourceUnit: "em", expectedValue: 16 },
    { sourceUnit: "%", expectedValue: 1600 },
    { sourceUnit: "vw", expectedValue: 20 },
    { sourceUnit: "vh", expectedValue: 34.45 },
    { sourceUnit: "vmin", expectedValue: 34.45 },
    { sourceUnit: "vmax", expectedValue: 20 },
    { sourceUnit: "cm", expectedValue: 6.77 },
    { sourceUnit: "mm", expectedValue: 67.73 },
    { sourceUnit: "in", expectedValue: 2.67 },
    { sourceUnit: "pt", expectedValue: 192 },
    { sourceUnit: "pc", expectedValue: 16 },
    { sourceUnit: "q", expectedValue: 270.93 },
  ]),
  // cm unit conversion
  ...conversionItems("cm", [
    { sourceUnit: "px", expectedValue: 604.72 },
    { sourceUnit: "rem", expectedValue: 37.8 },
    { sourceUnit: "em", expectedValue: 37.8 },
    { sourceUnit: "%", expectedValue: 3779.53 },
    { sourceUnit: "vw", expectedValue: 47.24 },
    { sourceUnit: "vh", expectedValue: 81.39 },
    { sourceUnit: "vmin", expectedValue: 81.39 },
    { sourceUnit: "vmax", expectedValue: 47.24 },
    { sourceUnit: "ch", expectedValue: 37.8 },
    { sourceUnit: "mm", expectedValue: 160 },
    { sourceUnit: "in", expectedValue: 6.3 },
    { sourceUnit: "pt", expectedValue: 453.54 },
    { sourceUnit: "pc", expectedValue: 37.8 },
    { sourceUnit: "q", expectedValue: 640 },
  ]),
  // mm unit conversion
  ...conversionItems("mm", [
    { sourceUnit: "px", expectedValue: 60.47 },
    { sourceUnit: "rem", expectedValue: 3.78 },
    { sourceUnit: "em", expectedValue: 3.78 },
    { sourceUnit: "%", expectedValue: 377.95 },
    { sourceUnit: "vw", expectedValue: 4.72 },
    { sourceUnit: "vh", expectedValue: 8.14 },
    { sourceUnit: "vmin", expectedValue: 8.14 },
    { sourceUnit: "vmax", expectedValue: 4.72 },
    { sourceUnit: "ch", expectedValue: 3.78 },
    { sourceUnit: "cm", expectedValue: 1.6 },
    { sourceUnit: "in", expectedValue: 0.63 },
    { sourceUnit: "pt", expectedValue: 45.35 },
    { sourceUnit: "pc", expectedValue: 3.78 },
    { sourceUnit: "q", expectedValue: 64 },
  ]),
  // q unit conversion
  ...conversionItems("q", [
    { sourceUnit: "px", expectedValue: 4.23 },
    { sourceUnit: "rem", expectedValue: 0.26 },
    { sourceUnit: "em", expectedValue: 0.26 },
    { sourceUnit: "%", expectedValue: 26.46 },
    { sourceUnit: "vw", expectedValue: 0.33 },
    { sourceUnit: "vh", expectedValue: 0.57 },
    { sourceUnit: "vmin", expectedValue: 0.57 },
    { sourceUnit: "vmax", expectedValue: 0.33 },
    { sourceUnit: "ch", expectedValue: 0.26 },
    { sourceUnit: "cm", expectedValue: 0.4 },
    { sourceUnit: "mm", expectedValue: 4.0 },
    { sourceUnit: "in", expectedValue: 0.16 },
    { sourceUnit: "pt", expectedValue: 12.0 },
    { sourceUnit: "pc", expectedValue: 0.35 },
  ]),
  // rem unit conversion
  ...conversionItems("rem", [
    { sourceUnit: "px", expectedValue: 256 },
    { sourceUnit: "em", expectedValue: 16 },
    { sourceUnit: "%", expectedValue: 1600 },
    { sourceUnit: "vw", expectedValue: 20 },
    { sourceUnit: "vh", expectedValue: 34.45 },
    { sourceUnit: "vmin", expectedValue: 34.45 },
    { sourceUnit: "vmax", expectedValue: 20 },
    { sourceUnit: "ch", expectedValue: 16 },
    { sourceUnit: "cm", expectedValue: 6.77 },
    { sourceUnit: "mm", expectedValue: 67.73 },
    { sourceUnit: "in", expectedValue: 2.67 },
    { sourceUnit: "pt", expectedValue: 192 },
    { sourceUnit: "pc", expectedValue: 16 },
    { sourceUnit: "q", expectedValue: 270.93 },
  ]),
  // em unit conversion
  ...conversionItems("em", [
    { sourceUnit: "px", expectedValue: 256 },
    { sourceUnit: "rem", expectedValue: 16 },
    { sourceUnit: "%", expectedValue: 1600 },
    { sourceUnit: "vw", expectedValue: 20 },
    { sourceUnit: "vh", expectedValue: 34.45 },
    { sourceUnit: "vmin", expectedValue: 34.45 },
    { sourceUnit: "vmax", expectedValue: 20 },
    { sourceUnit: "ch", expectedValue: 16 },
    { sourceUnit: "cm", expectedValue: 6.77 },
    { sourceUnit: "mm", expectedValue: 67.73 },
    { sourceUnit: "in", expectedValue: 2.67 },
    { sourceUnit: "pt", expectedValue: 192 },
    { sourceUnit: "pc", expectedValue: 16 },
    { sourceUnit: "q", expectedValue: 270.93 },
  ]),
  // % unit conversion
  ...conversionItems("%", [
    { sourceUnit: "px", expectedValue: 2.56 },
    { sourceUnit: "rem", expectedValue: 0.16 },
    { sourceUnit: "em", expectedValue: 0.16 },
    { sourceUnit: "vw", expectedValue: 204.8 },
    { sourceUnit: "vh", expectedValue: 118.88 },
    { sourceUnit: "vmin", expectedValue: 118.88 },
    { sourceUnit: "vmax", expectedValue: 204.8 },
    { sourceUnit: "ch", expectedValue: 2.56 },
    { sourceUnit: "cm", expectedValue: 6.05 },
    { sourceUnit: "mm", expectedValue: 9.68 },
    { sourceUnit: "in", expectedValue: 0.15 },
    { sourceUnit: "pt", expectedValue: 0.12 },
    { sourceUnit: "pc", expectedValue: 0.01 },
    { sourceUnit: "q", expectedValue: 4.03 },
  ]),
  // vw unit conversion
  ...conversionItems("vw", [
    { sourceUnit: "px", expectedValue: 204.80 },
    { sourceUnit: "rem", expectedValue: 12.8 },
    { sourceUnit: "em", expectedValue: 12.8 },
    { sourceUnit: "%", expectedValue: 1280 },
    { sourceUnit: "vh", expectedValue:27.56  },
    { sourceUnit: "vmin", expectedValue:27.56 },
    { sourceUnit: "vmax", expectedValue: 16 },
    { sourceUnit: "ch", expectedValue: 12.8 },
    { sourceUnit: "cm", expectedValue: 5.42 },
    { sourceUnit: "mm", expectedValue: 54.19 },
    { sourceUnit: "in", expectedValue: 2.13 },
    { sourceUnit: "pt", expectedValue: 153.6 },
    { sourceUnit: "pc", expectedValue: 12.8 },
    { sourceUnit: "q", expectedValue: 322.52 },
  ]),
];

unitConversion.forEach((testCase) => {
  const [value, expectedValue, targetUnit, sourceUnit, precision, props] =
    testCase;
  describe(`${value}${targetUnit} -> ${sourceUnit} = ${expectedValue}${sourceUnit}`, () => {
    it(`converts ${value}${targetUnit} to ${expectedValue}${sourceUnit} with precision of ${
      precision || 0
    } ${props ? `with a props of ${JSON.stringify(props)}` : ""}`, () => {
      expect(unitFlip(value, targetUnit, sourceUnit, precision, props)).toBe(
        expectedValue
      );
    });
  });
});
