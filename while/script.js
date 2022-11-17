let numero = Number(prompt("Digite um número: "));
let resultado = 0;

while (numero != 0) {
    resultado = resultado + numero;
    numero = Number(prompt("Digite um número: "));
}

console.log("A soma dos números digitados foi: " + resultado);