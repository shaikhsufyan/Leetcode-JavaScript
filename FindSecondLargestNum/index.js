 let nums = [22,43,5,76,92,78,17,6];

 const findSecLargest = (nums) =>{
    let largest = nums[0]; // 92
    for(let i=0; i<nums.length; i++){
        if(nums[i] > largest){ 
            largest = nums[i]
        }
    }

    let secondLar = nums[0]; // 78
    for(let i=0; i<nums.length; i++){
        if(nums[i] > secondLar && nums[i] < largest){ // 6 > 78 && 78 < 92
            secondLar = nums[i]
        }
    }
    return secondLar;
 }
 console.log(findSecLargest(nums));
 