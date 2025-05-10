 let n = 10;
 const createCounter  = (num) =>{
   let count = num;
    return function(){
         let currentCount = count;
         count = count+1;
         console.log(currentCount);
         
         return currentCount;
    }
 }

 const counter = createCounter(10);
 counter()
 counter()
 counter()
