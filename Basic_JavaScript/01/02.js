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
    console.log('innerOuter'+ myLastName); //If we use LeT then result is - innerouterJaiswal
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


