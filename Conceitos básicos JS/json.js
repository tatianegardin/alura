const pessoa = {
    nome: "Peter Parker",
    dataNascimento: "25/05/19",
    carteiraIdentidade: "999362-1",
    email: "peterparker@email.com",
    telefone: "+552711112222",
    cidade: "Cariacica",
    estado: "ES"
}

const pessoaJson = JSON.stringify(pessoa, undefined, 4);

const pessoaParse = JSON.parse(pessoaJson);


// OBJETO LITERAL

console.log(`----------------------------------------------------- 
isso é um objeto literal,
----------------------------------------------------- 


`
)

console.log(pessoa)


// JSON
console.log(`

-----------------------------------------------------
isso é um objeto transformado em json,
----------------------------------------------------- 


`) 


console.table(pessoa)

console.log(pessoaJson)

// JSON TRANSFORMADO EM OBJETO LITERAL

console.log(`

-----------------------------------------------------
isso é um json transformado em um objeto liretal
-----------------------------------------------------


`)


console.log(pessoaParse)


 



