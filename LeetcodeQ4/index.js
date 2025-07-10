let arr = [1,2,3];
let newArr = []
const transformArray = (arr,fun) =>{
    for(let i=0; i<arr.length; i++){
        
        // newArr.push(arr[i]+1)
        // newArr.push(45)
        newArr.push(fun(arr[i],i))

        
    }
    console.log(newArr);
    
}

const operation = (val,index) =>{
    // return val+1 [2,3,4]
    // return val+index [1,3,5]
    return 45
}
// transformArray() [2,3,4]
transformArray(arr,operation);