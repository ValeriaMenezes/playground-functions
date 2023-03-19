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

// Desafio 7 !!! PASSOU NOS 3 TESTES !!!
function catAndMouse(mouse, cat1, cat2) {
  mouse;
  cat1;
  cat2;
  let resultado;
  if ((Math.abs(cat2 - mouse)) < (Math.abs(cat1 - mouse))) {
    resultado = "cat2";
  } else if ((Math.abs(cat1 - mouse)) < (Math.abs(cat2 - mouse))) {
    resultado = "cat1";
  } else {
    resultado = "os gatos trombam e o rato foge";
  }
  return resultado;
}
// console.log(catAndMouse(1, 0, 2));

// Desafio 8
function fizzBuzz(arrayNum) {
  let resultado = [];
  for (index = 0; index < arrayNum.length; index += 1) {
    if (arrayNum[index] % 3 === 0 && arrayNum[index] % 5 === 0) {
      resultado.push("fizzBuzz");
    } else if (arrayNum[index] % 5 === 0) {
      resultado.push("buzz");
    } else if (arrayNum[index] % 3 === 0 ) {
      resultado.push("fizz");
    } else {
      resultado.push ("bug!");
    }
  }
  return resultado;
}
//  console.log(fizzBuzz([9, 25]));

// Desafio 9
function encode(str) {
  const vogais = ['a', 'e', 'i', 'o', 'u'];
  const numeros = ['1', '2', '3', '4', '5'];
  let encodedStr = '';
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    // console.log('char -->', char);
    let index = vogais.indexOf(char);
    // console.log('index -->', index);
    if (index !== -1) {
      encodedStr += numeros[index];
    } else {
      encodedStr += char;
    }
  }
  return encodedStr;
}
// console.log(encode('hi there!'));

function decode(str) {
  const vogais = ['a', 'e', 'i', 'o', 'u'];
  const numeros = ['1', '2', '3', '4', '5'];
  let decodedStr = '';
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let index = numeros.indexOf(char);
    if (index !== -1) {
      decodedStr += vogais[index];
    } else {
      decodedStr += char;
    }
  }
  return decodedStr;
}
// console.log(decode('h3 th2r2'));

// Desafio 10
function techList(techs, name) {
  if (!techs || techs.length === 0) {
    return 'Vazio!';
  }

  let techList = [];

  techs.sort().forEach((tech) => {
    techList.push({
      tech: tech,
      name: name,
    });
  });

  return techList;
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
