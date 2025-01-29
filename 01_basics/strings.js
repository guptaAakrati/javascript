//  strings

let myName = 'nisha';
let email = 'abc@gmail.com';

// console.log(myName + email); out-dated method

// console.log(`Hello World My Name Is ${myName} and My Email Is ${email}`);

// another method

let string = new String('nisha');
// console.log(string);
// console.log(string[0]);

// console.log(__proto__);
// console.log(string.length);
// console.log(string.toUpperCase());
// console.log(string.charAt(1));
// console.log(string.indexOf('s'));


let newString = string.substring(0,3);  // we can't give negative value in substring.
// console.log(newString);


// const slice = string.slice(0,3);
const slice = string.slice(-4,2);
console.log(slice);


//  trim method => remove extra spaces
const trimString = '       nisha       ';
console.log(trimString);
console.log(trimString.trim());

//  replace method

const line = 'hello world . how are you';
// console.log(line);

// console.log(line.replace('world', 'universe'));

//  incluedes or not

console.log(line.includes('aakrati'));
console.log(line.includes('hello'));