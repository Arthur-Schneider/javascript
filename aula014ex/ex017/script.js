function tabuada(){
    var numero = window.document.querySelector('input#num')
    var res = window.document.querySelector('textarea#res')
    var lista = window.document.getElementById('lista')

    lista.innerHTML = '' //limpa o select
    if(numero.value.length == 0){
        window.alert('Dígite um número!')
    }else{
        for(var controle = 1; controle <= 10; controle++){
            var num = Number(numero.value)
            var item = document.createElement('option') //cria o elemento option
            item.text = `${num} x ${controle} = ${num*controle} `//adiciona o text no option
            lista.appendChild(item) //adiciona o item como filho do select
        }
    }
}