
// INTERVIEW QUESTION :: JAGDESH JINA FOR INFOSYS
// We have this 2 array  combined this array and remove duplicate value from this array
const arr1 = [1,2,3,7,8];
 const arr2 = [1,4,5,9,10];
 const combinedArr = [...arr1,...arr2];
     let uniqueArr  = [];
 
 const removeDuplicate = () =>{
 
    for(let i=0; i<combinedArr.length; i++){
        if(!uniqueArr.includes(combinedArr[i])){
            uniqueArr.push(combinedArr[i])
        }
    }
   console.log(uniqueArr);
   
 }
 removeDuplicate()
