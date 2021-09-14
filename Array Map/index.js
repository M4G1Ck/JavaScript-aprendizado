// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Retorne apenas a chave "nome" do objeto para
// Adicione uma chave id em cada objeto
const pessoas = [
    { nome: 'Luiz', idade: 62},
    { nome: 'Maria', idade: 23},
    { nome: 'Eduardo', idade: 55},
    { nome: 'Letícia', idade: 19},
    { nome: 'Rosana', idade: 32},
    { nome: 'Wallace', idade: 47},
];

const nomes = pessoas.map(obj => obj.nome);
console.log(nomes);