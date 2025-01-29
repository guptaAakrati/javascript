//  Stack memory & Heap Memory
//  stack memory -> use in primitive data type
//  heap memory -> use in non-primitive / refrence data type

let myName = 'nisha';

let anotherName = myName;
 anotherName = 'aakrati';

// console.log(myName);
// console.log(anotherName);


//  heap memory

let userOne = {
    email : 'abc@gmail.com',
    name : 'nisha'
}
 let userTwo = userOne ;

 userOne.email = 'nisha@gmail.com'

 console.log(userOne.email);
 console.log(userTwo.email);
 
 