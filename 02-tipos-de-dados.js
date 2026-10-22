// o javascript possui 7 tipode dados primitivos (que guardam em um unico valor simples)

//1 - strings
//o tipo string responder sequencias de caracteres, como nomes, mensagens, emails, ou seja, textos de modo geral.

const nome = "Sam";
const cidade = "São Paulo";
const mensagem = "Ola, mundo"

console.log(nome)
console.log(cidade)
console.log(mensagem)

console.log("------------")

// 2 - Number
// O javascript usa o tipo number para representar numeros inteiros de decimais.
const idade = 20;
const altura = 1.75;
const preco =599.90
const temperatura = -3.17;

console.log(idade);
console.log(altura);
console.log(preco);
console.log(temperatura);
console.log("-------------")

// 3 - Bigint
// O tipo bigint permite representar numeros inteiros maiores de que o limite de precisão dos numeros inteiros comuns do tipo Number.
const numeroGrande =1829283849237947n
// o "n" no final do numero indica que ele é um bigint
console.log(numeroGrande)

console.log("-------------")

// 4 - Boolean - valores logicos
//O tipo Boolean representa apenas dois valores:
//true = verdadeiro
//false = falso
//é muito utilizado para verificar condições, controlar funcionalidades e reprensentar estados.

const estaLogado = true;
const temPermissao = false;

console.log(estaLogado)
console.log(temPermissao)

console.log("-------------")

// 5 - Undefined
// No javascript, undefined(indefinido) representa um valor não foi definido.

let fruta;
console.log(fruta)
console.log(typeof fruta);

console.log("-------------")

// 6 - Null
// O Null no javascript representa a ausencia intencional de um valor
const fotoDepPrfil = null
console.log(fotoDepPrfil)
console.log(typeof fotoDepPrfil)

console.log("-------------")
// 7 - symbol
// O symbol é utilizado para criar identificadores únicos
const id1 = Symbol("id")
const id2 = Symbol("id")

console.log(id1 === id2);