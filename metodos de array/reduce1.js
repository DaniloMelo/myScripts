/*
O reduce recebe 2 params, uma funcao cb, e o valor inicial do acumulador. 

A funcao cb do reduce recebe 4 params, 
1 - acumulador. Se o segundo param do reduce (vlr inicial) nao for setado, o acumulador recebe o primeiro parametro do array.
2 - elemento/dado/item da iteracao atual do array
3 - index (opcional)
4 - array (opcional)

*/





// Exemplo 1
// A partir de um array de objetos, retorna um numero que é a soma dos valores do atributo preco
// Resultado: 35
const produtos = [
    { nome: "caderno", preco: 20, qtde: 1 },
    { nome: "caneta", preco: 5, qtde: 3 },
    { nome: "borracha", preco: 8, qtde: 1 },
    { nome: "lapis", preco: 2, qtde: 2 },
]

// function calcTotal (acumulador, itemAtual){  // Trocado por uma fn dentro do reduce. 
//     return acumulador + itemAtual
// }
const totalProdutos = produtos.map(prod => prod.preco).reduce((acumulador, itemAtual) => acumulador + itemAtual)

// console.log(totalProdutos)





// Exemplo 2
// A partir de um array de objetos, retorna um numero que é a soma dos valores do atributo preco * a quantidade
// Resultado: 35
const totalProdutos2 = produtos.reduce((acumulador, itemAtual) => acumulador + itemAtual.preco * itemAtual.qtde, 0)

// console.log(totalProdutos2)





// Exemplo 3
// A partir de um array de strings, retorna um objeto
// Resposta { D: 2, R: 1, J: 3 }
const nomes = ["Danilo", "Daniel", "Renato", "Joao", "Jessica", "Jose"]

const contaLetrasNomes = nomes.reduce((count, nomeAtual) => {
    const primeiraLetra = nomeAtual[0] // recebe a primeira letra dos nomes a cada iteracao.

    // if (count[primeiraLetra]) {  // count é iniciado como um array vazio, a cada iteracao, é verificado se existe uma prop com a letra da iteracao no objeto vazio, se true soma 1, else cria a prop e recebe o valor de 1
    //     count[primeiraLetra]++   
    // } else {
    //     count[primeiraLetra] = 1;
    //}

    count[primeiraLetra] ? count[primeiraLetra]++ : count[primeiraLetra] = 1;

    return count


}, {})

// console.log(contaLetrasNomes)





// Exemplo 4
// A partir de um array de objetos, retorna um objeto de pessoas com um contador de pessoa por idade.
// Resposta { '30': [ 'Danilo', 'Maria' ], '45': [ 'Joao' ] }
const pessoas = [
    { nome: "Danilo", idade: 30 },
    { nome: "Maria", idade: 30 },
    { nome: "Joao", idade: 45 },
]

const pessoasPorIdade = pessoas.reduce((count, nomeAtual) => {

    if(count[nomeAtual.idade]){
        count[nomeAtual.idade].push(nomeAtual.nome)
    }else{
        count[nomeAtual.idade] = []
        count[nomeAtual.idade].push(nomeAtual.nome)
    }

    return count
}, {})

console.log(pessoasPorIdade)












// Exemplo 5


