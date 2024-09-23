function isPrimenumber(num){
    if(num<2){
        console.log("Not a prime num");
    }

    for(let i= 2; i<num; i ++){
        if(num%i===0){
            console.log("Not a prime num");
            break;
        }
        else{
            console.log("Is a prime num");
            break;
        }
    }

  
}

let num=19;
isPrimenumber(num);