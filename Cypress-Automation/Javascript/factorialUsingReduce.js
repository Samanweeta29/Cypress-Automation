let n = 5;
function createArray(n){
    let numbers=[];
    for (let i=1;i<=n;i++){
        numbers.push(i);
    }
    return numbers;
}

const numbers = createArray(n);
//numbers = [1,2,3,4,5]
function findFactorial(numbers){
    const factorial = numbers.reduce((x,y)=>{
        return x*y;
    },1);
    console.log(factorial);
}
findFactorial(numbers);