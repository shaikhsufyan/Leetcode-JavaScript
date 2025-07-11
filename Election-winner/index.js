// // Find the winner of election Given an array of votes , determine the winner. If multiple
// // candidate have the same votes the one apperaing first wins
// let votes = ['b','b', 'a','b','c','a','a'];
// let winner = {};

// // {
//     //  b : 3,
//     //  a : 3,
//     //  c : 1
// // }

// const findWinner = (votes) =>{
//     votes.forEach((curValue)=>{
//         winner[curValue] = (winner[curValue] || 0)+1
//     })
// }
// findWinner(votes);
// console.log(winner);

// const keys = Object.keys(winner);
// console.log("Keys :",keys);
// const values = Object.values(winner);
// console.log(values);
 
// const result = keys.filter((x)=>{
//     return winner[x] === Math.max(...values) 
// })
// console.log("Result :",result[0]);





// What is IIFE ?


// ()()
(function myFun(){
    console.log("Named IIFE");
    
})();
(function(){
    console.log("IIFE");
    
})();

 




