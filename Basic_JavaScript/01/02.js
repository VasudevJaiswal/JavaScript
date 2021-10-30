// Now it's time for modern JavaScript  
// Feature of ECMASCRIPT 2015 also known as ES6

// __________________________________________________
                //  LET VS CONST VS VAR 
// __________________________________________________


var myName = "Vasudev Jaiswal";
console.log(myName);

myName = "Vasudev Jaiswal";
console.log(myName)  //Not be changed 

let myName1 = "Jaiswal Vasudev";
console.log(myName1); 

myName1 = "Jaiswal Vasudev";
console.log(myName1);


// There is be no change between let and var 

const myName2 = "Jaiswa's development studio";
console.log(myName2); // Not be changed again 

// myName2 = "Jaiswal's development studio";
// console.log(myName2)               // When we use this code the terminal output is zero because of const not be changed again .


function biodata(){
    var myFirstName = "Vasudev";
    console.log(myFirstName);

    if(true){
        let myLastName = "Jaiswal";
        console.log('inner'+ myLastName);
        console.log('inner'+ myFirstName);

    }
    // console.log('innerOuter'+ myLastName); //If we use LeT then result is - innerouterJaiswal
    // console.log('innerOuter'+  myFirstName);      // Because [Block scope ] of var the output is error  
}

biodata();

// var = Function Scope 
// let and const = Block Scope 


// ___________________________________________________________

            // Templates Leterals (Templates Strings)
// ___________________________________________________________

// JavaScript program to print table for given Number (8)? 
// Output  :   8*1 = 8 -   8*10 = 80 

for(let num = 1; num<=10; num++){
    let tablOf = 8;
    // console.log(`${tableOf} * ${num} = ${tablOf * num}`);
}


// _______________________________________________________________
                    // Default Parameters :-
// Default Function parameters allow named parameters to be initialized with default values if no value or undefined is passed . 

// _______________________________________________________________

function mult(a,b){
return a*b;
}

console.log(mult(5,2));
// The output is - 10

                // OR , 

console.log(mult(5))  //If we return only A or B parameters 
//Result is - NaN

                //   OR , 

function mult(a,b=2){
    return a*b;
}
console.log(mult(5))
// Now the Output is - 10   // this is called DEFAULT PARAMETERS 



// ____________________________________________________________
                    // 6. Fat ArrowFunction 
// ____________________________________________________________

//Normal way of writing Function

console.log(sum());

function sum(){
    let a = 5; b= 6;
    let sum = a+b;
    return `The sum of the two number is ${sum}`;
}


//Use of fat arrow function

const sum1 = () => `The sum of the two number is ${(a=5)+ (b=12)}`;
console.log(sum1());
//this called fat Arrow function - [ =>]
//The output is-  the sum of the two number is  17 
   

// ____________________________________________________________

// Section - ARRAYS IN JAVASCRIPT 
   
// ____________________________________________________________

/* When we feel like storing multiple values in one variables then instead of var, we
will use an Array. In javaScript , we have an Array Class , and arrays are the prototype of this class.
*/


//example:-

//When we use var var,We can Stored only one value at a time . 
var friend1 = 'Aaditya';
var friend2 = 'Hanuman';
var friend3 = 'Ridhi';

//Using a Array Class :-
// var myFriends = new Array;  //This line not mandatory its optional 
var myFriends = ['Aaditya',22, 'Hanuman', 20,'Ridhi',21, true, false ];

/* 
     var Names  = [Aaditya,Hanuman,Ridhi];
     1st Element - [Aaditya] = Lower Index/ Lower boundry   - Represent or indexing by = 0
     last Element - [Ridhi] = Upper Index / Upper boundry   - Represent or indexing by = 2 - [Array length '-' 1 ]

*/


//                          What will do in this Array section 
/* Traversal of an Array 
   Searching and filter in an Array 
   How to sort and Compare an Aray
   How to Insert,Add,Replace and Delete Elements in  Array(CRUD)
   Map(), Reduce(), filter()
*/


// ________________________________________________________________
            // Traversal of An Array :- Traversal in array navigate through an array 
// ________________________________________________________________

/* 
If we want to get the single date at a time and also 
If we want to change the data 
*/

// if we want to check the length,  of the data 

var myFriends1 = ['vinod', 'Aadity', 'Hanuman','Ridhi'];
console.log(myFriends1[1]);  //Output is - Aadity
