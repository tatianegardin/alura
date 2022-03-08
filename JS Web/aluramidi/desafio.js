//Questão 01

let str = '*'
let space = ' '

function f(n){
    for(let i=1; i <= n ; i++){
        console.log(space.repeat(n-i) + str.repeat(i))
    }
}

f(6);



//Questão 02

let regex = /(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[!@#$%^&*()-+]).{6,}/g

function verificandoRegex(senha){
    return regex.test(senha)
}


function verificiandoSenha(senha){
    if(senha.length < 6 ){
        return 6 - senha.length 
    }
    else if (verificandoRegex(senha)){
        return ("Essa senha é forte!")
    }else{
        return ("Essa senha está fraca, ela precisa ter no mínimo 6 caracteres sendo no mínimo 1 digito, 1 letra em minúsculo, 1 letra em maiúsculo,  1 caractere especial")
    }
}



const senha1 = "Ya3&ab" // senha correta

const senha2 = "tatiane" // senha com apenas letras minúsculas

const senha3 = "Tatiane" // senha com letras maiúsculas e minúsculas 

const senha4 = "Tatiane123" // senha com letras maiúsculas, minúsculas e digitos

const senha5 = "Ya3" // senha com menos de 6 caracteres


console.log(verificiandoSenha(senha1)) 

console.log(verificiandoSenha(senha2))

console.log(verificiandoSenha(senha3))

console.log(verificiandoSenha(senha4))

console.log(verificiandoSenha(senha5))






