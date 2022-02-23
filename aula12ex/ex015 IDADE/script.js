function verificar() {
    //pegar data atual e ano atual 
    var data = new Date()
    var ano = data.getFullYear()
    //variaves/modelo de objetos para documentos
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
        //condição composta 
        if (fano.value.length == 0 || fano.value > ano) {
            window.alert('Verifique os dados e tente novamente!')
        } else {
            var fsex = document.getElementsByName('radsex')
            var idade = ano - Number(fano.value)
            var gênero = '' 
            //-----img-----------
            var img = document.createElement('img') 
            img.setAttribute('id', 'foto')
            if (fsex[0].checked) {
                gênero = 'Homem'
                if (idade >=0 && idade <10) {
                    //Criança
                    img.setAttribute('src', 'bebe-menino.png')
                } else if (idade < 21) {
                    //Jovem
                    img.setAttribute('src', 'jovem-homem.png')
                } else if (idade < 50) {
                    // Adulto
                    img.setAttribute('src', 'adulto-homem.png')
                } else {
                    // idoso
                    img.setAttribute('src', 'velho-homem.png')
                }
            } else if (fsex[1].checked) {
                gênero = "Mulher"
                if (idade >=0 && idade <10) {
                    //Criança
                    img.setAttribute('src', 'bebe-menina.png')
                } else if (idade < 21) {
                    //Jovem
                    img.setAttribute('src', 'jovem-mulher.png')
                } else if (idade < 50) {
                    // Adulto
                    img.setAttribute('src', 'adulta-mulher.png')
                } else {
                    // idoso
                    img.setAttribute('src', 'velha.mulher.png')
                }
            }
            res.style.textAlign = 'center'
            res.innerHTML = ` Detectamos ${gênero} com ${idade} anos.`
            res.appendChild(img)
            
        }

}