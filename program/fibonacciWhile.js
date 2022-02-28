function fibo(num){
    let n=2;
    let a=[0,1];
    if(num==0){
        return a[0]
    }
    if(num==1){
        return a;
    }
    else{
        while(n<num){
            let fibonacci=a[n-1]+a[n-2];
            a.push(fibonacci);
            n++;
        }
        return a;
    }
}
console.log(fibo(10));