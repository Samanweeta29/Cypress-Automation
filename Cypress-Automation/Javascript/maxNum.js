function findMaxNumber(array){
    if(array.length===0){
        throw new Error("Array is empty");
    }
    let max=array[0];
    for (let i=1;i<array.length;i++){
        if(array[i]>max){
            max=array[i];
        }
    }
    return max;
}
const numbers=[1,7,8,3,2];
const maxNum= findMaxNumber(numbers);
console.log("The Maximum number is: "+maxNum);