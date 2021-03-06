const parseInput = require("../parseInput");

function solveStep1(input) {
  const data = parseInput(input).map((num) => num.split(' '));
  const rumbo = {'forward': 0, 'up': 1, 'down': 1}
  const coordenadas = [0, 0] // x, y

  for (const [direccion, avance] of data) {
    coordenadas[rumbo[direccion]] += parseInt(avance, 10) * (direccion === 'up' ? -1 : 1)
  }

  return coordenadas[0] * coordenadas[1]
}

function solveStep2(input) {
  const data = parseInput(input).map((num) => num.split(' '));
  const rumbo = {'forward': 0, 'up': 2, 'down': 2}
  const coordenadas = [0, 0, 0] // x, y, objetivo

  for (const [direccion, avance] of data) {
    coordenadas[rumbo[direccion]] += parseInt(avance, 10) * (direccion === 'up' ? -1 : 1)

    if(direccion === 'forward') {
      coordenadas[1] += coordenadas[2] * avance
    }
  }

  return coordenadas[0] * coordenadas[1]
}

module.exports = {
  solveStep1,
  solveStep2,
};
