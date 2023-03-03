function verificar(){
    var container = window.document.querySelector('section#container')
    var anonasc = window.document.querySelector('input#ano')//Pega o dado digitado pelo usuário
    var ano = Number(anonasc.value)//Transforma os dados em numéricos
    var tiposexo = window.document.getElementsByName('sexo')
    //var sexo = String(tiposexo.value)
    var foto = window.document.querySelector('div#foto') //Associa a DIV foto a VAR foto
    var dado = new Date()
    var anoatual = dado.getFullYear()//Pega o ano atual
    var idade = anoatual - ano //Faz a subtração do ano atual pelo ano digitado pelo usuário
    var img = document.createElement('img') //Criei o elemento img por JS
    img.setAttribute('id', 'fotopessoa') //Atribui um id a esse elemento (fotopessoa)

    if(ano == 0 || ano > anoatual){ //Verifica se o usuario digitou um numero maior que zero e menor que o ano atual
        foto.style.color = 'red'
        foto.innerHTML = '<p>[ERRO] Revise os dados e tente novamente!</p>'
    }else{
        if(tiposexo[0].checked){
            foto.style.color = 'black'
            foto.innerHTML = `<p>Identificamos um Homem de ${idade} anos</p>`
            foto.appendChild(img)//Vai mostrar o elemento IMG na tela
            if(idade >= 0 && idade < 10){ //Criança
                img.setAttribute('src', 'imagens/homem-10anos.png')
            }else if(idade >= 10 && idade < 20){//Jovem
                img.setAttribute('src', 'imagens/homem-20anos.png')
            }else if(idade >=20 && idade < 50){//Adulto
                img.setAttribute('src', 'imagens/homem-30anos.png')
            }else{ //Idoso
                img.setAttribute('src', 'imagens/homem-80anos.png')
            }
        }else{
            foto.style.color = 'black'
            foto.innerHTML = `<p>Identificamos uma Mulher de ${idade} anos</p>`
            foto.appendChild(img)//Vai mostrar o elemento IMG na tela
            if(idade >= 0 && idade < 10){ //Criança
                img.setAttribute('src', 'imagens/mulher-10anos.png')
            }else if(idade >= 10 && idade < 20){//Jovem
                img.setAttribute('src', 'imagens/mulher-20anos.png')
            }else if(idade >=20 && idade < 50){//Adulto
                img.setAttribute('src', 'imagens/mulher-30anos.png')
            }else{ //Idoso
                img.setAttribute('src', 'imagens/mulher-80anos.png')
            }
        }
    }
    
}