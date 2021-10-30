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

const sum1 = () =>{
    let a = 5; b =6;
    let sum1 = a+b;
    return `The sum of the two number is ${sum1}`;
}

console.log(sum());
//this called fat Arrow function - [ =>]
//The output is-  the sum of the two number is  11 
   
   
   
