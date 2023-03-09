var txtnum = window.document.querySelector('input#num')
var lista = window.document.getElementById('lista')
var vetor = []
var pos = 0

function inlista(n, l){
    if(l.indexOf(n) != -1){
        return true
    }else{
        return false
    } 
}

function carregar(){
    var num = Number(txtnum.value)//não vai aspas('input#num')
    var item = document.createElement('option')
    res.innerHTML = ''
    if(inlista(num, vetor) == true){
        window.alert('Este número já está na lista!')
    }else if(num >= 1 && num <= 100){
        vetor.push(num)
        item.text = `Valor ${vetor[pos]} adicionado.`
        lista.appendChild(item)
        pos++
    }else{
        window.alert('Dígite um número entre 1 e 100!')
    }
    txtnum.value = '' //apaga a caixa de texto
    txtnum.focus() //deixa o cursor selecionado na caixa de texto
}

function finalizar(){
    
    
    
    if(tamanho == 0){
        window.alert('Adicione valores antes de finalizar!')
    }else{
        var res = window.document.getElementById('res')
        var tamanho = vetor.length
        var min = vetor[0]
        var max = vetor[0]
        var soma = 0
        for(let pos in vetor){
            soma = soma + vetor[pos] //soma todos os valores
            if(vetor[pos] < min){ //verifica qual o menor valor do vetor
                min = vetor[pos]
            }else if(vetor[pos] > max){ //verifica qual o maior valor do vetor
                max = vetor[pos]
            }
        }
        var media = soma / pos //calcula a média dos valores
        res.innerHTML = (`Ao todo temos <strong>${tamanho}</strong> números cadastrados <br>`)
        res.innerHTML += (` O menor número é o <strong>${min}</strong> <br>`)
        res.innerHTML += (` O maior número é o <strong>${max}</strong> <br>`)
        res.innerHTML += (` A soma de todos os números é <strong>${soma}</strong> <br>`)
        res.innerHTML += (`A média dos números é <strong>${media}</strong>`)
        
    }
}