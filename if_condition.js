// IF condition exercise

var nota1 = 15;
var nota2 = 50;
var nota3 = 53;

var aprovado;
var recuperacao;
var reprovado;

var nota = 0;

nota = nota1 + nota2 + nota3;
media = nota / 3;

console.log(nota);
console.log(media);

if (media < 40) {
  console.log("Reprovado com", media);
} else if (media >= 40 && media < 60) {
  console.log("Recuperação com", media);
} else {
  console.log("Parabéns! Você foi aprovado com", media);
}
