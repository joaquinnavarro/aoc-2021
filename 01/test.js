const {solveStep1, solveStep2} = require("./index");

it("first step should return 7", () => {
  const result = solveStep1("/01/test.values.txt");

  expect(result).toBe(7);
});

it("second step should return 5", () => {
  const result = solveStep2("/01/test.values.txt");

  expect(result).toBe(5);
});
