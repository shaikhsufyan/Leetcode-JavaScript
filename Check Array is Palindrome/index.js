// Check Array is Palindrome
 

const isPalindrome = (arr) =>{
    let left = 0;
    let right = arr.length-1; // 4
    while(left < right){
        if(arr[left] !== arr[right]){ // 3 !==  3
            return false
        }
        left++;
        right--
    }
    return true
}
let arr = [1,2,3,4,5];
console.log(isPalindrome(arr));
