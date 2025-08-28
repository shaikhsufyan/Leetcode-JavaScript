
console.log("A");

setTimeout(()=>{
    console.log("B");
    
})
const promise = new Promise((resolve)=>{
    console.log("E");
    resolve("C")
    
})
promise.then((res)=>{
    console.log(res);
    
})
console.log("D");








let obj1 = {};
let obj2 = {};
console.log(obj1 == obj2);
console.log(obj1 === obj2);

