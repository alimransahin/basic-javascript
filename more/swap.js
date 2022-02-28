let a=5;
let b=4;
console.log("before Swap a="+a+"; b="+b);
let temp=a;
a=b;
b=temp;
console.log("after Swap a="+a+"; b="+b);

[a,b]=[b,a];
console.log("after Swap a="+a+"; b="+b);