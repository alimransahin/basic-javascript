 function fact(num){
    let a=[];
    let result=1;
    let nums=1;
    while(num>=nums){
        if(nums<=num){
            result=result*nums;
            a.push(nums);
        }
        nums++;
    }
    let factorial=a+" = "+result;
    return factorial;
}
console.log(fact(5));