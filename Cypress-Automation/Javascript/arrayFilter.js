let arrays=[1,2,8,0,3,6,7];
function applyFilter(arrays){
    const arraylist = arrays.filter((array)=>{
        return array > 4;
    });
    console.log(arraylist);

}

applyFilter(arrays);