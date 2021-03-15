function verifivar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano= document.getElementById('txtano')
    var res = document.querySelector('div#res')
if (fano.value.length == 0 ||Number (fano.value) > ano){
    window.alert('(ERRO) Digite a sua idade novamente!')
}else {
    var fsex = document.getElementsByName ('radiosex')
    var idade = ano - Number(fano.value)
    var gênero = ''
    var img = document.createElement('img')
    img.setAttribute('img', 'foto')
    if (fsex [0].checked){
        gênero = 'Homem'
        if (idade >=0 && idade <10 ){
            //Criança
            img.setAttribute('src', 'imagem/criançaMenino.png')
        }else if (idade >= 10 && idade < 21){
            //Jovem
            img.setAttribute('src', 'imagem/jovemHomem.png')
        }else if (idade >= 21 && idade < 50){
            //Homem
            img.setAttribute('src', 'imagem/adultoHomem.png')
        } else if(idade >= 50 ){
            //idoso
            img.setAttribute('src', 'imagem/senhorHomem.png')
        }
    }
    else if (fsex[1].checked){
        gênero = 'Mulher'
        if (idade >=0 && idade <10 ){
            //Criança
            img.setAttribute('src', 'imagem/criançaMulher.png')    
        }else if (idade >= 10 && idade < 21){
            //Jovem
            img.setAttribute('src', 'imagem/jovemMulher.png')
        }else if (idade >= 21 && idade < 50){
            //Mulher
            img.setAttribute('src', 'imagem/adultaMulher.png')    
        } else if(idade >= 50 && 120){
            //idosa
            img.setAttribute('src', 'imagem/senhoraMulher.png')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    res.appendChild(img)
}

}