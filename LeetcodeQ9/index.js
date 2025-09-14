let arr = [1,2,3,4,5];
 let size = 3
console.log(size);
 
const subArray = (arr,size) =>{
    let chunkArr = [];
    let newArr = [];
    if(arr.length > 0){
        for(val of arr){
            if(chunkArr.length < size){
                chunkArr.push(val)
            }else{
                newArr.push(chunkArr);
                chunkArr=[];
                chunkArr.push(val)
            }
        }
        newArr.push(chunkArr)
    }else{
        return arr
    }
    return newArr
    
}
// subArray(arr,size)
console.log(subArray(arr,size));
