
function addArrays(arrays){
    const arraylist= arrays.map((array)=>{
        return array+1;
    });
    console.log(arraylist);
}
let arrays=[1,2,3,4,5];
addArrays(arrays);