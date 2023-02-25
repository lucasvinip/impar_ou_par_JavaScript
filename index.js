/********************************************************
Objetivo - Realizar sistemas de numeros pares e impares
Data- 24/02/2023
Autor - Lucas Vinicius
Versão - 1.0
*********************************************************/

var readline = require('readline')
var funcao = require('./modulo/functions.js')

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log('============================================')
console.log('Impar ou Par?!')
console.log('============================================')

entradaDados.question('Número inicial?: ',function(numeroInicial){
    let numero1 = Number(numeroInicial)

    entradaDados.question('Número final?: ', function(numeroFinal){
        let numero2 = Number(numeroFinal)

        if(numero1 == '' || numero2 == ""){
            console.log('preencha os campos')
            entradaDados.close()
        }
        else if(isNaN(numero1) || isNaN(numero2)){
            console.log('apenas números')
            entradaDados.close()
        }
        else if(numero1 <0 || numero1 >500){
            console.log('números entre 0 a 100, número inicial')
            entradaDados.close()
        }
        else if(numero2 <100 || numero2 >1000){
            console.log('números entre 100 a 1000, número final')
            entradaDados.close()
        }
        else {
            entradaDados.question('Escolha entre impar ou par?: \n', function(imparOuPar){
                let escolhaImparPar = imparOuPar.toLowerCase()
                console.log('---------')
                imparOuPar = funcao.analisarEscolha(numero1, numero2, imparOuPar)
                entradaDados.close()
            })
        }
        
    })
})