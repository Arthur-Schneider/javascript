function contar(){
    var dadoinicio = window.document.getElementById('inicio')
    var inicio = Number(dadoinicio.value)
    var dadofinal = window.document.querySelector('input#final')
    var final = Number(dadofinal.value)
    var dadopasso = window.document.querySelector('input#passo')
    var passo = Number(dadopasso.value)
    var res = window.document.getElementById('resultado')
    
    res.innerHTML = ('<p><strong>Contando...</strong></p>')
    
    while(inicio <= final){
        if(passo == 0){
            window.alert('Passo inválido! CONSIDERANDO PASSO 1')
            passo = 1
        }
        res.innerHTML += (inicio)
        if(inicio < final){
            res.innerHTML += ('👉')
        }else{
            res.innerHTML +=('🏁')
        }
        
        inicio = inicio + passo
    }
    
}