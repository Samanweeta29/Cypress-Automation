let arrays=[1,2,3,4,5];
function reduceArray(arrays){
    const arrayList = arrays.reduce((x,array)=>{
        return x + array;
    },0);
    console.log(arrayList);

}
reduceArray(arrays);