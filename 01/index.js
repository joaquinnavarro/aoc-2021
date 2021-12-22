const parseInput = require("../parseInput");

function solveStep1(input) {
  const data = parseInput(input).map((num) => parseInt(num, 10));

  let count = 0

  data.reduce((prev, current) => {
    if (prev && current > prev) {
      count++
    }

    return current
  })

  return count
}

function solveStep2(input) {
  const data = parseInput(input).map((num) => parseInt(num, 10));

  const suma = (i) => {
    return data[i - 2] + data[i - 1] + data[i]
  }

  let count = 0

  for (let i = 2; i < data.length; i++) {
    if (suma(i + 1) > suma(i)) count++
  }

  return count
}

module.exports = {
  solveStep1,
  solveStep2,
};
