const fichaGuerreiro = {
    nome: "Aragorn",
    classe: "guerreiro"
   }
   
   const equipoGuerreiro = {
    espada: "Andúril",
    capa: "capa élfica +2"
   }


// cria um objeto dentro de outro objeto

console.log("ERRADO")

const guerreiros = {
    fichaGuerreiro,
    equipoGuerreiro
}

console.log(guerreiros)

// cria um objeto com chave e valor que foi extraida de 2 objetos separados

console.log("CERTO")

const guerreiro = { ...fichaGuerreiro, ...equipoGuerreiro }

console.log(guerreiro)

