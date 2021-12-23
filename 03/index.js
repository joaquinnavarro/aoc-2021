const parseInput = require("../parseInput");

function solveStep1(input) {
  const data = parseInput(input);
  const gamma = [], epsilon = []

  for (let binario of data) {
    binario = binario.split('')
    for (let i in binario) {
      gamma[i] = (gamma[i] ?? 0) + (binario[i] > 0 ? 1 : -1)
    }
  }

  gamma.map((value, i) => {
    gamma[i] = (gamma[i] > 0 ? 1 : 0)
    epsilon[i] = (gamma[i] <= 0 ? 1 : 0)
  })

  return parseInt(gamma.join(''), 2) * parseInt(epsilon.join(''), 2)
}

function solveStep2(input) {

  return 0
}

module.exports = {
  solveStep1,
  solveStep2,
};
