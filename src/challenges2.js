// Desafio 11
function generatePhoneNumber(numbers) {
  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0 || numbers[i] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] === numbers[j]) {
        for (let k = j + 1; k < numbers.length; k++) {
          if (numbers[i] === numbers[k]) {
            return 'não é possível gerar um número de telefone com esses valores';
          }
        }
      }
    }
  }

  // let phoneNumber = '(' + numbers[0] + numbers[1] + ') ' + numbers[2] + numbers[3] + numbers[4] + numbers[5] + '-' + numbers[6] + numbers[7] + numbers[8] + numbers[9];

  const ddd = numbers.slice(0, 2).join('');
  // console.log('ddd --->', ddd);
  const firstPart = numbers.slice(2, 7).join('');
  // console.log('firstPart', firstPart);
  const secondPart = numbers.slice(7).join('');
  // console.log('secondPart', secondPart);

  return `(${ddd}) ${firstPart}-${secondPart}`;
}
// console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineA + lineB) {
    const diffAB = Math.abs(lineA - lineB);
    const diffBC = Math.abs(lineB - lineC);
    const diffCA = Math.abs(lineC - lineA);
    if (diffAB < lineC && diffBC < lineA && diffCA < lineB) {
      return true;
    }
  }
  return false;
}
// console.log(triangleCheck(10, 14, 8));

// Desafio 13
function hydrate(string) {
    const total = string.match(/\d+/g).reduce((acc, cur) => acc + parseInt(cur), 0);

    return `${ total } copo${ total > 1 ? 's' : '' } de água`;
}
// console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
