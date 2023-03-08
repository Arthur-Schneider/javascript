function fatorial(n){
    if(n == 1){ // fatorial de 1 é 1
        return 1
    }else{
        return n*fatorial(n-1) //mesma função do exericio anterior (pega o n e multipla por n -1)
    }
}
console.log(fatorial(5))