const createCounter = (n) =>{
    let initialValue = n;
   
    // const increment = () =>{
    //    n++
    //     console.log(n);
        
    //     return  n

    // }
    // const decrement = () =>{
    //     n--;
    //     console.log(n);
        
    //     return n

    // }
    // const reset = () =>{
    //     console.log(n);
        
    //     return n
    // }
    return{
        increment: () =>{
            n++;
            console.log(n);
            return n
            
        },
        decrement: () =>{
            n--;
            console.log(n);
            return n
            
        },
        reset : () =>{
            console.log(initialValue);
            return initialValue;
        }        
    }
}
createCounter(5).increment() //6
createCounter(5).decrement() //4
createCounter(5).reset() //5
