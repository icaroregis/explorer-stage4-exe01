/*
  Bora praticar e rever tudo o que foi ensinado na aula? **💜**
  Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

  - [ ]  A soma dos dois números;
  - [ ]  A subtração dos dois números;
  - [ ]  A multiplicação dos dois números;
  - [ ]  A divisão dos dois números;
  - [ ]  O resto da divisão dos dois números;
 
  Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

  - [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
  - [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.

  Lembre-se de sempre mostrar na tela o resultado de cada uma dessas operações!
  O resultado final desse desafio deve ser algo em torno de:
*/

alert("Insira dois números");
let numberOne = prompt("Insira o primeiro número...");
let numberTwo = prompt("Insira o segundo número...");

const resultSum = Number(numberOne) + Number(numberTwo);
const resultSubtraction = Number(numberOne) - Number(numberTwo);
const resultMultiplication = Number(numberOne) * Number(numberTwo);
const resultDivision = Number(numberOne) / Number(numberTwo);
const restOfDivision = (Number(numberOne) + Number(numberTwo)) % 2 === 0 ? "Par" : "Impar";
const ehEquals = Number(numberOne) === Number(numberTwo) ? "Os números são iguais!!" : "os números são diferentes!!"

alert(`A soma dos dois números é igual a: ${resultSum}`);
alert(`A subtração dos dois números é igual a: ${resultSubtraction} `);
alert(`A multiplicação dos dois números é igual a: ${resultMultiplication} `);
alert(`A divisão dos dois números é igual a: ${resultDivision} `);
alert(`Vamos verificar se a soma dos dois números é par ou ímpar`)
alert(`A soma dos dois números é: ${restOfDivision}`);
alert(ehEquals);

