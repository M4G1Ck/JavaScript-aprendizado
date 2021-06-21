const pessoa = {
    nome: 'Gabriel',
    sobrenome: 'Macedo',
    idade: 19,
    endereco: {
        //rua: 'Rua Augusto Severo',
        numero: 841
    }
};


// desestruturacao
// mudando o nome da variavel; precisa comentar o nome
// const {  nome: n = 'laulau', sobrenome, idade  } = pessoa;
// console.log(n, sobrenome);

// const {  
//     endereco: { rua, numero },
//     endereco
//   } = pessoa;
// console.log(rua, numero, endereco);

// mudando o valor da variavel; precisa comentar a rua
const {  
    endereco: { rua: r = 12345, numero },
    endereco
  } = pessoa;
console.log(r, numero, endereco);