let reverseredStr;
function pallindrome(text){

     reverseredStr=text.split('').reverse().join('');
     
    
}


const text= "racecar";
pallindrome(text);
console.log(reverseredStr);
if(reverseredStr===text){
    console.log("String is Pallindrome.");
}
else{
    console.log("String is not Pallindrome.");
}