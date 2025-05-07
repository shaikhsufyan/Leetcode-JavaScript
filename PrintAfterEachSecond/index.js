
let x = 6
function print(){
    for(let i=1; i<x; i++){
        setTimeout(()=>{
            console.log(i);
            
        },i*1000)
    }
}
print()