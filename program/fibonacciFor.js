function fibo(n){
    let a=[0,1];
    let num=2;
    let result;
    if(n==0){
        return a[0]
    }
    if(n==1){
        return a;
    }
    else{
        for(num;num<n;num++){
            result=a[num-1]+a[num-2];
            a.push(result);
            let fibonacci=a;

            
        }
        return a;
    }
}
console.log(fibo(15));