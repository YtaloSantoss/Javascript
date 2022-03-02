
var n =  [5, 8, 2, 9, 3]
console.log(`Ordem crescente ${n.sort()}`)
n.push(100)
console.log(`O vetor tem ${n.length} posições`)
console.log(`O primeiro valor do vetor é ${n[0]}`)
var teste = n.indexOf(4)
if (teste== -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`Ovalor está na posição ${teste}`)
}
