let arr  = [100,1,3,5,3,2,1,2,26,38];
let uniqueArr = []
   let sortedArr = arr.sort((a,b)=>{
        return a-b
    })
 
    const findDuplicate = () =>{
        let index = 0
        for(let i=1; i<sortedArr.length; i++){ // i=10
            if(uniqueArr.length == 0){
                uniqueArr.push(sortedArr[0])
            }
            if(sortedArr[i] !== sortedArr[i-1]){ // 100 !== 38
                uniqueArr.push(sortedArr[i])
            }  
        }
    }
 
//  uniqueArr = [1,2,3,5,26,38,100]
findDuplicate()
console.log(uniqueArr);
