//  const inputContainer = document.querySelector(".inputs");

//  const handleInput = (event) =>{
//     console.log(event.target.value);
//     let value = event.target.value; //1
//     inputContainer.innerHTML = ""; // empty

//     for(let i=0; i<value; i++){
//         let input = document.createElement("input");
//         inputContainer.appendChild(input);
//         input.style.marginTop="10px"
//     }
    

//  }

const nums = [1,2,3,4,5];
const res = nums.filter((curItem,i,arr)=>{
    return curItem%2 ===0
})
console.log(res);
