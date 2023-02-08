function beProgrammer() {
    const possibilities = [
      () => console.log('Eu sou a luz das estrelas'),
      () => console.log('Eu sou a cor do luar'),
      () => console.log('Eu as coisas da vida'),
      () => console.log('Eu sou o medo de amar.....'),
    ];
  
    const someIndex = Math.floor(Math.random() * possibilities.length);
  
    possibilities[someIndex]();
  
    setTimeout(() => {
      beProgrammer();
    }, 1000);
  }