/* // const errorDiv = document.querySelector('div.error')



//obter um selector atraves do browse

const h1 = document.querySelector('body > h1')

//para obter mais de uma elemento

const paragraphs = document.querySelectorAll('p')
//seleciona todas a p
//obtem um node list ou lista de nós
// pode usar colchetes para referenciar os itens
// ou pode percorrer a constante paragraphs  atraves de um forEach

paragraphs.forEach(paragraph => {
    console.log(paragraph)
})

const errors = document.querySelectorAll('.error')

console.log(errors)

/* obter a referencia do elemento através do ID
const title = document.getElementById('title')
 */

/* //obter elementos atraves do nome da classe
const erros = document.getElementByClassName('error') */

//html collection representa um lista genérica de elementos
//node list são similares mas não identico.
//o html collection não funciona método forEach


const paragraphs = document.getElementsByTagName('p')

//precisar converter um html colletion em um array
//por isso é melhor usar o select porque ele gera uma
// node list.
