function max(a){
    let n=a.length;
    let maxNum=a[0];
    for(let num=1; num<=n;num++){
        if(maxNum<a[num]){
            maxNum=a[num];
        }
    }
    return maxNum;
}
let x=[222,55,250,21,200,60,542];
console.log(max(x));