let num=[1,5,44,8,456,66,45,1,5,4,5,4,2,5,4,6 ];
let duplicate=[];
for(n=0; n<num.length;n++){
    let element=num[n];
    let index=duplicate.indexOf(element);
    if(index==-1){
        duplicate.push(element);
    }

}
console.log(duplicate);