function filterArray(arr){
          let arr2= arr.filter((val)=>{
               return val%2===0;
            })
            console.log(arr2);

}

let arr=[9,0,6,21,12,15,5];
filterArray(arr);