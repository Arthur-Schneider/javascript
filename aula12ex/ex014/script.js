function carregar(){
    var agora = new Date()
    var hora = agora.getHours()
    var horadia = window.document.querySelector('div#hora')
    var img = window.document.querySelector('img#img')
    var msg = window.document.getElementById('msg')
    
    horadia.innerHTML = `Agora são ${hora} horas`
    
    if(hora >= 6 && hora < 12){
    //Bom dia
        msg.innerHTML = 'Bom Dia!'
        img.src = 'imagens/manha.jpg' //muda o src do arquivo com o id img
        document.body.style.background = '#e2cd9f'
    } else if(hora >= 12 && hora < 18){
    //Boa tarde
        msg.innerHTML = 'Boa Tarde!'
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = '#b9846f'
    } else{
    //Boa noite
        msg.innerHTML = 'Boa Noite!'
        img.src = 'imagens/noite.jpg'
        document.body.style.background = '#515154'
    }
}
