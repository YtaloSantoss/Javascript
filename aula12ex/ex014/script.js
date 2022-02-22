function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    
    var data = new Date()
    var hora = data.getHours()

    var mnt = new Date()
    var minutos = mnt.getMinutes()
    
    msg.innerHTML =`Agora são ${hora}:${minutos}hora.`

    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = '../imagens/manha.png'
        document.body.style.background = '#D8D6D7'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE!
        img.src = '../imagens/tarde.png'
        document.body.style.background='#E0AB83'
    } else {
        //BOA NOITE!
        img.src = '../imagens/noite.png'
        document.body.style.background = '#0E1F39'
    }
}