const prompt = require('prompt-sync')();

function regraDeTres(num1, num2, num3) {
    return (num2 * num3) / num1;
}


const valor1 = parseFloat(prompt("Digite o primeiro valor: "));
const valor2 = parseFloat(prompt("Digite o segundo valor: "));
const valor3 = parseFloat(prompt("Digite o terceiro valor: "));

const resultado = regraDeTres(valor1, valor2, valor3);
console.log("O resultado será:", resultado);


