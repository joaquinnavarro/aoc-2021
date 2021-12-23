const { solveStep1, solveStep2 } = require("./index");

it("first step should return 198", () => {
    const result = solveStep1("/03/test.values.txt");

    expect(result).toBe(198);
});

it("second step should return 0", () => {
    const result = solveStep2("/03/test.values.txt");

    expect(result).toBe(0);
});
