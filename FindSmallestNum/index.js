let num = [22,39,92,54,4,82,1,85];
  
const findSmallest = (num) =>{
    let smallest = num[0];
    for(let i=0; i<num.length; i++){
        if(num[i] < smallest){  
            smallest = num[i]  
        }
    }
    return smallest
}
console.log(findSmallest(num));


 