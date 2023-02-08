verificarPalindromo("")

function verificarPalindromo (palavra){

    const p = palavra

    const separandoLetras = p.split("")

    let revertendoPalavra = separandoLetras.reverse()

    juntandoLetras = revertendoPalavra.join("")

    if(p == juntandoLetras){
        console.log(`A palavra ${p} é um palindromo`);
    }else{
        console.log(`A palavra ${p} não é um palindromo`);
    }
    
    return juntandoLetras
}