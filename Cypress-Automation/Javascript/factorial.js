function findFactorial(num){
    let result=1;
 for (let i=1;i<=num;i++){
    result=result*i;
 }
//  console.log(result);
return result;
}

let num = 5;
const factorialResult = findFactorial(num);
console.log(factorialResult);