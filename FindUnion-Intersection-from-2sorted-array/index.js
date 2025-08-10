// Find Union and Intersection from Two Sorted Array
let a = [1,3,4,6,7];
let b = [2,3,4,5];

let mergeArr = [...a, ...b];
let union = [];
let intersection = [];
let obj={}
mergeArr.sort((a,b)=>{
    return a-b;
})

const removeDuplicate = () =>{
    mergeArr.forEach((curValue)=>{
        if(!union.includes(curValue)){
            union.push(curValue)
        }
    })
    
}
removeDuplicate()
console.log("Union :: ",union);

const findIntersection = () =>{
    // for(let j=0; j<a.length; j++){
    //     for(let i=0; i<b.length; i++){
    //         if(a[j] === b[i]){
    //             intersection.push(a[j])
    //         }
    //     }
    // }
    mergeArr.map((curVal)=>{
        obj[curVal] = (obj[curVal] || 0)+1
    })
}
 
findIntersection();
console.log("Intersection ::",obj);
 
 