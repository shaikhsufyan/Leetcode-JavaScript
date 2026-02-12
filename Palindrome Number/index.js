// What is Palindrome Number or Word
// When reverse Word or Number then same readable are called palindrome number
// 121 --> 121 
// madam --> madam
// hello --> olleh

// const checkPalindrome = (num) =>{
//     let original = num.toString()
//     let  reversed = original.split("").reverse().join("")
//     console.log("reversed",reversed);
    
//     if(original === reversed){
//         console.log(original + " is Palindrome Number");
        
//     }else{
//         console.log(original + " is not Palindrome Number");

//     }
// }
//  checkPalindrome(122)






const checkPalindrome = (sent) =>{
     let sentance = sent.split(" ");

     sentance.forEach((curVal,i)=>{
        let reversed = curVal.split("").reverse().join("");
        console.log("reverse",reversed);

        if(reversed === curVal){
            console.log(curVal+" is Palindrome Word");
            
        }else{
            console.log(curVal+" is not Palindrome Word");

        }
        
     })


}
 checkPalindrome("hello madam how are you")
 




























































