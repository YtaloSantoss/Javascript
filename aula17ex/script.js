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
        window.alert('Tudo OK!')
    }else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
}