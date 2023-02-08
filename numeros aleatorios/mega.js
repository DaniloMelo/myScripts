// Gera 1 número aleatório entre 2 que foram passados por parametros
// Depois faz uma if ternário verificando se o array passado por param tem o numero gerado aleatóriamente. 
// Caso TRUE, chamamos a mesma funcao para gerar o numero aleatório novamente (Chamada Recursiva), entao sera criado um novo numero aleatorio e novamente será verificado se ele existe no array.

function gerarNumeroNaoContido(min, max, array) {

    const numAleatorio = parseInt(Math.random() * (max + 1 - min) + min)

    return array.includes(numAleatorio) ? gerarNumeroNaoContido(min, max, array) : numAleatorio
}

console.log(gerarNumeroNaoContido(1, 5, [1, 3, 5]));





// Gera um array com o tamanho de acordo com o parametro passado e preenche com o num 0


function gerarArrayDeNumeros(qtde) {

    const numeros = Array(qtde)
        .fill(0)
        .reduce(num => {
            const novoNumero = gerarNumeroNaoContido(1, 60, num)
            return [...num, novoNumero]
        }, [])
        .sort((n1, n2) => n1 - n2)

    return numeros
}

// console.log(gerarArrayDeNumeros(7))

