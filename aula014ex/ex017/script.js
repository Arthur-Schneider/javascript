function tabuada(){
    var numero = window.document.querySelector('input#num')
    var num = Number(numero.value)
    var res = window.document.querySelector('textarea#res')
    var resultado = 0

    for(var controle = 1; controle <= 10; controle++){
        resultado = controle*num
        res.innerHTML += (`${num} x ${controle} = ${resultado} `)
    }
}