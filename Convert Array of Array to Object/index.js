// convert array of array to array of object [{},{}]

// let arr = [
//     [22.4225,75.0876],
//     [12.4225,45.0876],
//     [22.4225,95.0876],
//     [42.4225,85.0876],
//     [32.4225,65.0876],
// ];
 

// let res = arr.map(([lat,long])=>{
//     return {lat:lat,long:long}
// })
//  console.log(res);
 









 
// Object.assign is used to copy one or more 
// properties from source to target
 let obj1 = {
    name:"sufyan"
 }
 let obj2 = {
    age:23
 }
 let newObj =  Object.assign(obj1,obj2,{proff:"SE"});
 console.log(obj1);
 
 

 