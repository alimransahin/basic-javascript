function isPrime(num){
    let result;
    if(num==1){
        result=num+" not prime Number";
    }
   else if(num==2){
        result=num+" prime Number";
    }
   else{
        for(let n=2; n<num;n++){
            if(num%n==0){
                result=num+" Not Prime Number";
                break;
            }
            else{
                result=num+" Prime Number"
            }
        }
    }
    return result; 
}
console.log(isPrime(6));