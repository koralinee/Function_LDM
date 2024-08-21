const prompt = require('prompt-sync')();

function menorValor(num1, num2, num3, num4, num5) {
    return Math.min(num1, num2, num3, num4, num5);
}

const num1 = parseFloat(prompt("Digite o primeiro número: "));
const num2 = parseFloat(prompt("Digite o segundo número: "));
const num3 = parseFloat(prompt("Digite o terceiro número: "));
const num4 = parseFloat(prompt("Digite o quarto número: "));
const num5 = parseFloat(prompt("Digite o quinto número: "));

const menor = menorValor(num1, num2, num3, num4, num5);
console.log("O menor valor é:", menor);