 let arr = [10,20,30,40];

 const filter = (arr,fun)=>{
    let filteredArr = []
    for(let i=0; i<arr.length; i++){
        if(fun(arr[i],i)){
            filteredArr.push(arr[i])
        }
    }
    console.log(filteredArr);
    
 }
 filter(arr,fun);

 function fun(arrValue,i){
    return arrValue>10
 }