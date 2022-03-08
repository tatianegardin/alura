// let data = "21-11-1997";
// let exp = /-/g;
// let dataFormatada = data.replace(exp,"/");

// console.log(dataFormatada);


// var arquivo = '100,200-150,200;20'; 
// let arquivo2 = arquivo.split()
 
// exp = /[.;,-]/

// var novoArquivo = arquivo.split(exp);

// console.log(novoArquivo);
// console.log(arquivo2);
 








let regex = /(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[!@#$%^&*()-+]).{6,}/g

function verificandoRegex(senha){
    return regex.test(senha)
}


function verificiandoSenha(senha){
    if(verificandoRegex(senha)){
        return ("Essa senha é forte!")
    }else{
        return ("Essa senha está fraca, ela precisa ter no mínimo 6 caracteres sendo no mínimo 1 digito, 1 letra em minúsculo, 1 letra em maiúsculo,  1 caractere especia")
    }
}
let senhaCorreta = "TaTiaNe123!"
console.log(verificiandoSenha(senhaCorreta))


// var re = /(\w+)\s(\w+)/;
// var str = 'John Smith';
// var newstr = str.replace(re, '$2, $1');
// console.log(newstr);




