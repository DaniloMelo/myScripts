function aposta (time, minhaAposta){

    return new Promise( (resolve, reject) => {

        const geraAposta = parseInt(Math.random() * (100 + 1 - 0) + 0)  // gera um num de 0 a 100

        if(minhaAposta > geraAposta){
            resolve({
                time: time,
                minhaAposta: minhaAposta,
                apostaGerada: geraAposta,
                msg: "Ganhou!!!"
            })
        }else{
            reject({
                time: time,
                minhaAposta: minhaAposta,
                apostaGerada: geraAposta,
                msg: "Perdeu!!!"
            })
        }
    })
}

aposta("Corinthians", 50)  
    .then( res => console.log(`O time ${res.time} ${res.msg} Sua Aposta: ${res.minhaAposta}, Aposta gerada: ${res.apostaGerada}`))
    .catch( err => console.log(`O time ${err.time} ${err.msg} Sua Aposta: ${err.minhaAposta}, Aposta gerada: ${err.apostaGerada}`))


