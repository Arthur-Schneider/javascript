function carregar(){
    var agora = new Date()
    var hora = agora.getHours()
    var horadia = window.document.querySelector('div#hora')
    var img = window.document.querySelector('img#img')

    horadia.innerHTML = `Agora são ${hora} horas`

    if(hora >= 6 && hora < 12){
    //Bom dia
        img.src = 'imagens/manha.jpg'
        document.body.style.background = '#e2cd9f'
    } else if(hora >= 12 && hora < 18){
    //Boa tarde
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = '#b9846f'
    } else{
    //Boa noite
        img.src = 'imagens/noite.jpg'
        document.body.style.background = '#515154'
    }
}
