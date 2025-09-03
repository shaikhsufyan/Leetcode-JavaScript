// WHAT IS NULLISH COALESCING OPERATOR

// ?? is the nullish coalescing operator in
//  JavaScript.

// It returns the right-hand value only if  
// the left-hand value is null or undefined.


let name = null ?? "Default";
console.log(name);


 




// It’s different from || (OR), which also treats false, 0, "", and NaN as falsy.


// "" false, NaN, 0
// OR Example
// let x = "";
// console.log(x || "OR Default Value");


let obj = {
    name:"SUFYAN",
    myFuns:function(){
        console.log(this); 
    }
}
obj.myFuns()

 function myFun(){
    console.log(this); 
 } 
 myFun()    