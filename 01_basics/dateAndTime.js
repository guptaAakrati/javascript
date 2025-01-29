// date

const myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());



//  date

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
console.log(myDate.getTime());
console.log(Math.floor(Date.now()/1000));  // convert into seconds.

myDate.toLocaleString('default',{
    weekday : 'long',
    
})

