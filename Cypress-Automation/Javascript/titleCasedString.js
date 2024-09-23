function titleCasedString(str){
const words = str.split(" ");
const changedTitle = words.map((word)=>{
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
});

return changedTitle.join(" ");
}

let str = "my life is a dream";
let titleCasedStr = titleCasedString(str);
console.log("Input string was:  " + str);
console.log("Output String is: "+ titleCasedStr);