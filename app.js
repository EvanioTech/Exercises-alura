/*let contador = 0

while (contador < 10) {
     contador++
     console.log(contador)
}
*/
/*let contador = 10

while (contador > 0) {
     contador--
     console.log(contador)
}
*/

/*let contRegressivo = prompt('insira o número que você deseja iniciar a contagem Regressiva')

while (contRegressivo > 0) {
    contRegressivo--
    alert(contRegressivo)
    console.log(contRegressivo)
}
*/
/*let contador = 0
let contRegressivo = prompt('insira o número que você deseja iniciar a contagem Progressiva apartir de 0')

while (contador < contRegressivo) {
    contador++
    alert(contador)
    console.log(contador)
}
*/
console.log('Seja bem vindo')

const name = 'Matias'

console.log(`Olá, ${name}!`)
alert(`Olá, ${name}!`)


let linguagemPreferida = prompt('Qual sua linguagem de programaçao preferida?')

console.log(linguagemPreferida)

let valor1 = 10
let valor2 = 15
let resultado = valor1 + valor2

console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`)

let usuario = prompt('Olá, seja bem vindo! Qual seu nome?')
let idade = prompt(`${usuario}, por gentileza qual sua idade?`)

if (idade >= 18) {
    console.log(`${usuario} é maior de idade!`)
}
else {
    console.log(`${usuario} é menor de idade!`)
}

let numero = prompt('insira um numero')
if (numero > 0) {
    console.log('numero Positivo')
    
}
else{
    if (numero == 0) {
        console.log('numero zero')
    }
    else{
        console.log('numero negativo')
    }
}

let contador = 0 
while (contador < 10) {
    contador++
    console.log(contador)
}

let nota = 8
if (nota >= 7 ) {
    console.log('Parabens vc foi aprovado!')
    
    
}
else {
    console.log('Você está de recuperaçao')
}

//let radom = Math.random()
//console.log(radom)

//let numberInt = parseInt(Math.random() * 10)
//console.log(numberInt)

let numberInt = parseInt(Math.random() * 1000)

console.log(numberInt)
