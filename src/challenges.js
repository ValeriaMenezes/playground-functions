// Desafio 1
function compareTrue(parametro1, parametro2) {
  if (parametro1 === true && parametro2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let calcArea;
  calcArea = (base * height) / 2;
  return calcArea;
}

// Desafio 3
function splitSentence(frase) {
  let palavraSeparada;
  palavraSeparada = frase.split(" ");
  return palavraSeparada;
}


// Desafio 4
function concatName(arrayStrings) {
  let primeiro;
  let ultimo;
  let posicoes;

  for (let index = 0; index < arrayStrings.length; index += 1) {
    primeiro = arrayStrings[0];
    ultimo = arrayStrings[arrayStrings.length - 1];
    posicoes = ultimo + ", " + primeiro;
  }
  return posicoes;
}

// Desafio 5
function footballPoints(wins, ties) {
  wins = wins * 3;
  ties = ties * 1;
  let totalPontos = wins + ties;
  return totalPontos;
}
// console.log(footballPoints(14, 8));

// Desafio 6  
function highestCount(arrayInteiros) {
  let maiorElemento = arrayInteiros[0];
  let quantidadeRepete = 0;
  for (index = 0; index < arrayInteiros.length; index += 1) {
    if (arrayInteiros[index] > maiorElemento) {
      maiorElemento = arrayInteiros[index];
    }
  }
  for (index2 = 0; index2 < arrayInteiros.length; index2 += 1) {
    if (maiorElemento === arrayInteiros[index2]) {
      quantidadeRepete += 1;
    }
  }
  return quantidadeRepete;
 }
//console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
