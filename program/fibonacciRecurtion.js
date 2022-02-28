function fibo(n){

    if(n==0){
        return [0];
    }
    if(n==1){
        return [0,1];
    }
    else{
       let fibonacci= fibo(n-1);
        let nelement=fibonacci[n-1]+fibonacci[n-2];
        fibonacci.push(nelement);
        return fibonacci;
    }
    
}
console.log(fibo(10));