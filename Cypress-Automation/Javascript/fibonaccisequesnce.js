function getfibonacci(terms){
let sequence = [];

if (terms <= 0){
    return [];
}else if (terms === 1) {
    return [0];
}else if (terms === 2) {
    return [0,1];
}
sequence[0] = 0;
sequence[1] = 1;

for (let i = 2 ; i < terms; i++){
    sequence[i]=sequence[i-1] + sequence[i-2];
} 
return sequence;
}

let terms = 10;
let fibonacci = getfibonacci(terms);
console.log("The fibonaci serries for " + terms + "terms is:  "+ fibonacci);
