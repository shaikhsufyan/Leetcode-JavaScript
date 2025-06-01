// Remove Duplicate Element from Array and return the length of unique elements
let arr = [1,2,2,3,4,4,5,5,6];
// [1,2,3,4,5,6]
// new set({1,2,3,4,5,6})
const removeDuplicate = (arr) =>{
    let unique = new Set();
    let index = 0; //index = 6
    
    for(let i=0; i<arr.length; i++){ //i = 9
        if(!unique.has(arr[i])){
            unique.add(arr[i])
            arr[index]=arr[i]
           index++
        }
    }
    // console.log("Unique Element ::", index);
    // for(let i=0; i<index; i++){
    //     console.log(i);
        
    // }
    return index
   
    
}
let uniueElementLength = removeDuplicate(arr);
for(let i=1; i<= uniueElementLength; i++){
    console.log(i);
    
}


 

 
