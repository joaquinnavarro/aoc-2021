const { solveStep1, solveStep2 } = require("./index");

it("first step should return 150", () => {
    const result = solveStep1("/02/test.values.txt");

    expect(result).toBe(150);
});

it("second step should return 900", () => {
    const result = solveStep2("/02/test.values.txt");

    expect(result).toBe(900);
});
