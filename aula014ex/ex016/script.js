function contar(){
    var dadoinicio = window.document.getElementById('inicio')
    var inicio = Number(dadoinicio.value)
    var dadofinal = window.document.querySelector('input#final')
    var final = Number(dadofinal.value)
    var dadopasso = window.document.querySelector('input#passo')
    var passo = Number(dadopasso.value)
    var res = window.document.getElementById('resultado')
    
    res.innerHTML = ('<p><strong>Contando:</strong></p>')
    
    if(dadoinicio.value.length == 0 || dadofinal.value.length == 0){ //testa se algum campo ficou vazio
        res.innerHTML = ('[ERRO] FALTAM DADOS, DIGITE NOVAMENTE!')
    }else{ //executa se todos os campos foram digitados
        if(inicio < final){ // se o numero inicial for menor que o final, ordem CRESCENTE    
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
        }else{ //se o numero inicial for maior que o final, ordem DECRESCENTE
            while(inicio >= final){
                if(passo == 0){
                    window.alert('Passo inválido! CONSIDERANDO PASSO 1')
                    passo = 1
                }
                res.innerHTML += (inicio)
                if(inicio > final){
                    res.innerHTML += ('👉')
                }else{
                    res.innerHTML +=('🏁')
                }
                
                inicio = inicio - passo
            }
        }
    }
}