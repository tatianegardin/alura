// criação objeto

const colecionador = {
    nome: "João do Gibi",
    idade: 41,
    tipoColecao: ["quadrinhos"],
    contato: "joao@email.com",
    adicionarTipo: function(propriedade,tipo){
    this[propriedade].push(tipo)

  }
};

for(let i = 0; i < 4; i++) {
    colecionador.adicionarTipo("tipoColecao","HQ"+i)
  }

 
console.log(colecionador)


for(let i = 4 ; i <= 10 ; i++){
    colecionador.adicionarTipo("tipoColecao", "Iphone"+i)
}

console.log(colecionador)

// console.log(colecionador.nome)
// console.log(colecionador["nome"]) 

// console.log(colecionador)

// // print para ver o resultado usando .nome

// console.log(`Print consulta usando ".nome". Mais utilizado em Java e C. `) 

// console.log(colecionador.nome);

// // print para ver a pesquisa de forma usada com colchetes 

// console.log(`Print consulta usando colchetes. "[nome]"` )

// console.log(colecionador["nome"]);




// código alura