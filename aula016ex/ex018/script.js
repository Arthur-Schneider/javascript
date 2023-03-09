var txtnum = window.document.querySelector('input#num')

function carregar(){
    
    var lista = window.document.getElementById('lista')
    var item = document.createElement('option')
    var num = Number(txtnum.value)//não vai aspas
    var vetor = []
    vetor.push(num)
    item.text = `Valor ${vetor} adicionado.`
    lista.appendChild(item)
   
        
}
function finalizar(){
    var res = window.document.getElementById('res')
    res.innerHTML = (`Ao todo temos 7 números cadastrados`)
}