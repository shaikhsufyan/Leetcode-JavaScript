let sentance = "hello madam how are you";
let arr = sentance.toLocaleLowerCase()
.split(" ");

arr.forEach((curWord)=>{
    let reversed = curWord.split("")
    .reverse().join("");

    if(reversed === curWord){
        console.log(curWord+ " is palindrome");
        
    }else{
        console.log(curWord +" is not palindrome");
        
    }
})