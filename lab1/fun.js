// waf to take any digit (0-9) and 
// return it in words
// 0- zero
// 5- five

const toWords= (digit)=>{
    const words= ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine" ];
    return words [digit];
}

console.log(toWords)