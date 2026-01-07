// Javascript Interview Question

let originalObj = {
    name : "Sufyan",
    address:{
        city:"Pune"
    }
}
// let shallowCopy = {...originalObj};
// shallowCopy.address.city="Banglore"
//  console.log(shallowCopy.address.city);
//  console.log(originalObj.address.city);

// Types to make shallow copy
//    let shallowCopy = Object.assign({},originalObj);
// shallowCopy.address.city="DELHI";
// console.log(originalObj);

// console.log(shallowCopy);








// Deep Copy Interview Question
// let originalObj = {
//     name :"SAM",
//     address:{
//         city:"MUMbai"
//     }
// }
// let deepCopy = JSON.parse(JSON.stringify(originalObj));
// deepCopy.address.city = "DELHI";
// console.log(originalObj.address.city);
// console.log(deepCopy.address.city);


// Types to make deep copy
// let deepCopy = structuredClone(originalObj);
// deepCopy.address.city = "MUMBAI";
// console.log(originalObj);
// console.log(deepCopy);

 
 


let obj1 = {
    name :"SUFYAN"
}
let obj2 = {
    proff : "SE"
}
let obj3 = {
    country : "INDIA"
}
Object.assign(obj1,obj2,obj3);
console.log(obj1);
let newObj = Object.assign(obj1,obj2,obj3);
console.log(newObj);
// shallow copy
let shallowCopy = Object.assign({},obj2);
console.log(shallowCopy);

