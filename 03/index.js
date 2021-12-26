const parseInput = require("../parseInput");

function solveStep1(input) {
  const data = parseInput(input);
  const resultado = obtenerResultado(data)
  const gamma = resultado.map(value => (value > 0 ? '1' : '0'))
  const epsilon = resultado.map(value => (value <= 0 ? '1' : '0'))

  return parseInt(gamma.join(''), 2) * parseInt(epsilon.join(''), 2)
}

function obtenerResultado(data) {
  const resultado = []

  for (let binario of data) {
    for (let i in binario) {
      resultado[i] = (resultado[i] ?? 0) + (binario[i] > 0 ? 1 : -1)
    }
  }

  return resultado
}

function solveStep2(input) {
  const data = parseInput(input);
  let oxygen = data
  let co2 = data
  let filter_oxygen, filter_co2

  for (let i = 0; i < data[0].length; i++) {
    if (oxygen.length > 1) {
      filter_oxygen = obtenerResultado(oxygen).map(value => (value >= 0 ? '1' : '0'))
      oxygen = oxygen.filter(value => value[i] === filter_oxygen[i])
    }

    if (co2.length > 1) {
      filter_co2 = obtenerResultado(co2).map(value => (value < 0 ? '1' : '0'))
      co2 = co2.filter(value => value[i] === filter_co2[i])
    }
  }

  return parseInt(oxygen.shift(), 2) * parseInt(co2.shift(), 2)
}

module.exports = {
  solveStep1,
  solveStep2,
};
