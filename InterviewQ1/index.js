// INTERVIEW QUESTION :: JAGDESH JINA FOR INFOSYS
// We have this 2 array for key and value using this create object like this :: { name: 'sufyan', age: 23, country: 'India' }
const key = ['name','age','country'];
const value = ['sufyan',23,'India'];
let detail = {};
const createObj = () =>{
   
    for(let i=0; i<key.length; i++){
        detail[key[i]]=value[i]
    }
    console.log(detail);
    
}
createObj()