// convert time stamp to date
// let timeStamp = 1730457600000;
// let date = new Date(timeStamp);
 
// let day = date.getDate();
// let month = date.getMonth();
// let year = date.getFullYear();

// let fullDate = `${day}-${month}-${year}`
// console.log(fullDate);











// find time from full date and Add AM : PM
let timeStamp = 1730457600000;
let date = new Date(timeStamp);
console.log(date);

let hour = date.getHours();
let minute = date.getMinutes();
console.log(hour, minute);
let ampm = hour >= 12 ?"PM":"AM";
hour = hour % 12;

console.log(hour+":"+minute+":"+ampm);
