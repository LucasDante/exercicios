let numero = Number((prompt("adivinhe qual é o número")));
let numerox = Number(10);

if(numero === numerox){
console.log("Acertou!"); 
}
if(numero < numerox){
    (confirm)("O número é maior");
}
if(numero > numerox){
    (confirm)("O número é menor");
}
while(numero !== numerox){
    numero = Number((prompt("adivinhe qual é o número")));
}