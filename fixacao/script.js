//ACESSO ADMIN
let usuario = prompt("Escolha o seu tipo de usuário: 'A': Administrador; 'B': Usuário comum; 'C': Usuário assinante");

while (usuario !== "A") {
    console.log("Acesso negado");
    usuario = prompt("Escolha o seu tipo de usuário: 'A': Administrador; 'B': Usuário comum; 'C': Usuário assinante");
}

console.log("Boas-vindas, admin!");

//TABUADA DE 2
let numero = 2;

for (var i = 1; i <= 10; i++) {
    resultado = numero * i;
    console.log(numero + " x " + i + " = " + resultado)
 }

 //ARRAY DE STRING
const frutas = ["Maça", "Laranja", "Abacaxi", "Melão", "Manga"];

for (var i = 0; i < frutas.length; i++) {
    console.log(frutas[i].toUpperCase());
 }

