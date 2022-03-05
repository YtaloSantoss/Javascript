var input1 = document.querySelector('input#num')
var caixalista =  document.querySelector('select#lista')
var saida = document.querySelector('div#saida')

var valores = []

function Numero(n) {
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }        
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }

}

function adicionar(){

//-----SE  for um numero adicionado "e" se "não" estiver em lista----
    if(Numero(input1.value) && !inLista(input1.value, valores)) {
        valores.push(Number(input1.value))
        var item = document.createElement('option')
        item.text = `Valor ${input1.value} adicionado.`
        lista.appendChild(item)
        saida.innerHTML =''
    }else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    input1.value=''
    input1.focus()
}

function finalizar(){
        if(valores.length == 0) {
            window.alert('Adicione valores antes de finalizar!')
        } else {
            var total = valores.length
            var maior = valores[0]
            var menor = valores[0]
            var soma = 0
            var media = 0 
            for(var pos in valores) {
                soma += valores[pos]
                if (valores[pos] > maior)
                    maior = valores[pos]
                if (valores[pos] < menor)
                    menor = valores[pos]
            }
            media = soma / total
            saida.innerHTML =''
            saida.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
            saida.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
            saida.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
            saida.innerHTML +=`<p>Somando todos os valores, temos ${soma}.</.p>`
            saida.innerHTML +=`<p>A média dos valores digitados é ${media}.</p>`
        }
}