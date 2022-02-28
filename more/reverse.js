function reverseStr(text){
    let reverse="";
    for(let i=0; i<text.length;i++){
        let char=text[i];
        reverse=char+reverse;
    }
    return reverse;
}
console.log(reverseStr("I love my country, I love my land, Green Bangladesh, My Homeland."))