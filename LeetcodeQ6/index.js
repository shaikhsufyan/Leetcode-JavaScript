let init = 0;
let arr = [1,2,3,4,5];

const reduce = (arr,fn,init) =>{
    if(arr.length == 0){
        return init
    }else{
        for(let i=0; i<arr.length; i++){
            init = fn(init,arr[i])
        }
        console.log(init);
        return init
    }
     
    
}
reduce(arr,fn,init)

function fn(acc,curValue ){
    return acc+curValue
}