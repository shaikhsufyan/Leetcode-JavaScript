
// Remove Duplicate Number From Sorted Array


const removeDuplicate = (arr) =>{
    if(arr.length ==0) return 0;

    let i =0; // 2
    for(let j=1; j<arr.length; j++){
        if(arr[i] !== arr[j]){ // 2 !== 3
            i++;
            arr[i] = arr[j]
        }
    }
    return i+1
}
// [1,2,3]
 
let arr = [1,2,2,3,3,4,5,5,6,6];
let uniqueLength = removeDuplicate(arr)
 console.log(arr.slice(0,uniqueLength));
 
