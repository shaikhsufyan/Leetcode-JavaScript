// expect(5).toBe() function ko . dot laga dusre function ko call kar sakte hai. expect() function me toBe () function ko call kar rahe hai to expect function function me return bhi karna hoga nhi to work nhi karega
// Approach 1
// const expect = (n) =>{

//     function toBe(num){
//         if(n === num){
//             console.log(true);
//             return true
//         }else{
//             throw new Error("Not Equal")
//         }
        
//     }
//     function notToBe(x){
//         if(n !== x){
//             console.log(true);
            
//             return true
//         }else{
//            throw new Error("Equal")
//         }
//     }
//      return {toBe,notToBe}
// }

// Approach 2
const expect = (n) =>{

    return {
        toBe : (x) =>{
            if(n === x) console.log(true);
            
            else throw new Error("Not Equal")
        },
        notToBe : (y) =>{
            if(n !== y)console.log(true);
            else throw new Error("Equal")
        }
    }
}
expect(5).toBe(6);
expect(5).notToBe(4)