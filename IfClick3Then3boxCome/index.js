let inputContainer = document.querySelector(".inputs");
const handleInput = (event) =>{
    console.log(event.target.value);
    inputContainer.innerHTML=""
    let value = event.target.value;
    for(let i=0; i< value; i++){
        let input = document.createElement("input");
        inputContainer.appendChild(input);
        input.style.width="200px"
        input.style.marginTop="10px"
    }
}