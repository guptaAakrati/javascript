//  Primitive datatypes  => call by value

//  7 Types : Null , Number , Boolean , BigInt , Symbol , String , undefined

 const num = 100;
 const num1 = 199.45;

 const isLoggedIn = true;
 let age ;


 const id = Symbol('23');
 const anotherId = Symbol('23');

//  console.log(id)
//  console.log(id2)
// console.log(id === anotherId);

//  refrence type / non-premitive data types 
    //   function , arrays , objects


    let array = ['nisha','aachi','22']

    let myObj = {
        name: 'nisha',
        age: 22
    }

    let myFunction = function(){
        console.log('hello world');
    }
    myFunction();