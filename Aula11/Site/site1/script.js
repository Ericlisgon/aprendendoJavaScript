function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minutos} Horas...`

    

    if (hora >= 0 && hora < 12) {
        //Bom dia
        img.src = 'imagem/manha.png'
        document.body.style.background = '#f5f5f5'
        document.body.style.color = 'tomato'
    }else if (hora >= 12 && hora <= 18) {
        //Boa Tarde
        img.src = 'imagem/tarde.png'
        document.body.style.background = 'tomato'
    }else {
        //Boa noite
        img.src = 'imagem/noite.png'
        document.body.style.background = 'rgba(26, 5, 5, 0.856)'
        document.body.style.color = 'white'
    }
}