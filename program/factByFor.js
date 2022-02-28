function fact(num){
    let result=1;
    let a=[];
    for(let nums=1; nums<=num; nums++){
        result=result*nums;
        a.push(nums);

    }
    let factorial=a+" = "+result;
    return factorial;
}
console.log(fact(7));