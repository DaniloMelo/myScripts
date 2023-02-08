const pessoas = [
  { nome: 'Fernanda', sobrenome: 'Costa', idade: 29 },
  { nome: 'Renato', sobrenome: 'Brandão', idade: 29 },
  { nome: 'Nicolas', sobrenome: 'Alves', idade: 7 },
  { nome: 'Natália', sobrenome: 'Alves', idade: 5 },
];

function callBack(pessoa, index) {
  const nomeCompleto = `${pessoa.nome} ${pessoa.sobrenome}`;

  return {
      nome: nomeCompleto,
      idade: pessoa.idade,
  }
}

const comForeach = pessoas.forEach(callBack);
const comMap = pessoas.map(callBack);

console.log('forEach', comForeach);
console.log('map', comMap);