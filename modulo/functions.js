const analisarEscolha = function(numero1, numero2, imparOuPar){
    let inicialNumero = Number(numero1)
    let finalNumero = Number(numero2)
    let opcao = imparOuPar.toLowerCase()
    
    let contPares = 0
    let contImpares = 0

    if(inicialNumero <= finalNumero){
        if(opcao === "par"){
            while(inicialNumero <= finalNumero){
                if (inicialNumero %2 ==0){
                    console.log(inicialNumero)
                    contPares +=1
                }
                inicialNumero +=1
            }
            console.log(`Quantidade de números encontrados [${contPares}]`)
        }
        else if(opcao === 'impar'){
            while(inicialNumero <= finalNumero){
                if(inicialNumero %2 !=0){
                    console.log(inicialNumero)
                    contImpares +=1
                }
                inicialNumero +=1
            }
            console.log(`Quantidade de números encontrados [${contImpares}]`)   
        }
    }
    else    
        return 'Forma incorreta de inserir os números'

}

module.exports = {
    analisarEscolha
}