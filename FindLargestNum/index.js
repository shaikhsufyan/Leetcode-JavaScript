// Find largest number from array
let nums = [11,39,40,29,55,65,90,95];

const findLargest = (nums) =>{
    let largest = nums[0];
    for(let i=0; i<nums.length; i++){ 
        if(nums[i] > largest){ 
            largest = nums[i]    
        }
    }
    return largest
}
console.log(findLargest(nums));

