var vetor = []
var pos = 0

function carregar(){
    var txtnum = window.document.querySelector('input#num')
    var num = Number(txtnum.value)//não vai aspas('input#num')
    var lista = window.document.getElementById('lista')
    var item = document.createElement('option')
    
    if(txtnum.value.length == 0){
        window.alert('Dígite um número!')
    }else if(num >= 1 && num <= 100){
        vetor.push(num)
        item.text = `Valor ${vetor[pos]} adicionado.`
        lista.appendChild(item)
        pos++
    }else{
        window.alert('Dígite um número entre 1 e 100!')
    }
}
function finalizar(){
    var res = window.document.getElementById('res')
    var tamanho = vetor.length
    var soma = 0
    for(let pos in vetor){
        soma = soma + vetor[pos]
    }
    var media = soma / pos

    if(tamanho == 0){
        window.alert('Dígite um número!')
    }else{
    res.innerHTML = (`Ao todo temos ${tamanho} números cadastrados <br>`)
    res.innerHTML += (` A soma de todos os números é ${soma} <br>`)
    res.innerHTML += (`A média dos números é ${media}`)
    }
}