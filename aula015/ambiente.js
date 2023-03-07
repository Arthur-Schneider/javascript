let num = [8, 5, 4, 2, 6]

num.push(1) //adicona o valor 1 a ultima posição
num.sort() //coloca o vetor em ordem crescente
num[2] = 3 //adicona o valor 3 a terceira posição
console.log(num)
console.log(`O vetor possui ${num.length} posições`)
console.log(`O terceiro elemento é o ${num[2]}`)

/* for(let posicao = 0; posicao < num.length /*enquanto a posiçao for menor ao tamanho total do vetor; posicao++){ //vai exibir todo o vetor
    console.log(`A posição ${posicao} tem o valor ${num[posicao]}`)
}
*/
//usando o for simplificado
for(let posicao in num){
    console.log(`A posição ${posicao} do vetor possui o valor ${num[posicao]}`)
}
let pos = num.indexOf(9) //pega qual a posiçao está o valor 5
//let pos1 = num.indexOf(9) //pega qual a posiçao está o valor 5
console.log(`O valor está na posição ${pos}`)
//console.log(`O valor 9 está na posição ${pos1}`) //vai retorna -1 pois o vetor não tem o valor 9

if(pos == -1){
    console.log('Valor não encontrado')
}else{
    console.log(`O valor está na posição ${pos}`)
}