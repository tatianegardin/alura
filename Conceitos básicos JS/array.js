// const notas = [10, 6.5, 8, 7.5]

// function media(array){
//     let tamanhoArray = array.length; // configura o tamanho do array usado no for
//     let resultado = 0 // inicializa variavel com valor 0
//     for (let i = 0; i< tamanhoArray; i++){ // um for que percorre as posições do array
//         resultado += array.shift() } // acrescenta na variavel resultado o valor anterior + o valor da primeira posição do array
//     return resultado / tamanhoArray // valor acumulado dividivo pelo tamanho do array

// }

// // console.log(media(notas))



// let resultadoMedias = 0


// console.log(notas.forEach(nota => {
//     resultadoMedias += nota
// })



// métodos array


// const arrayOriginal = ["Maria", "Carlos", "Eduardo", "Samanta"]
// const arrayConcat = arrayOriginal.concat("André", "Fernanda")

// console.log(arrayConcat)
// console.log(arrayOriginal)





// const arrayOriginal = ["Maria", "Carlos", "Eduardo", "Samanta"]
// const arrayConcat = arrayOriginal.concat(["André", "Fernanda"], ["Ricardo", "Ana"], ["Marcelo", "Bia"])

// console.log(arrayConcat)
// console.log(arrayOriginal)






// const arrayOriginal = [50, 60, 70]
// const arrayConcat = arrayOriginal.concat([80, [90, 100]])

// console.log(arrayConcat)
// console.log(arrayOriginal)














// const notas1 = [10, 6.5, 8 ,7.5]
// const notas2 = [9, 6, 6]
// const notas3 = [8.5, 9.5]

// const notasGerais = [notas1,notas2,notas3]

// let media = 0

// for (let i = 0; i < notasGerais.length; i++) {
//   for (let j = 0; j < notasGerais[i].length; j++) {
//     media += notasGerais[i][j]/notasGerais[i].length;
//   }
// }

// media = media/notasGerais.length

// console.log(media)












const nome = "Alura";
let nomeMaiusculas = "";

for (let i = 0; i < nome.length; i++) {
 nomeMaiusculas += nome[i].toUpperCase()
}
console.log(nomeMaiusculas) //ALURA