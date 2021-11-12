
// Section 01. values and variables in JavaScript 

var myName = 'Vasudev Jaiswal';
var myAge = 18;
console.log("My Name is ",myName);
console.log("I'm  year's old",myAge);

// : Where: 
// var = Variable (key)
// myName = Name 
// Vasudev Jaiswal = (Value)

// The First Character must be a letter an underscore (_) or an Dollar ($) 
// . You can't Use any Numerical (Number)

// Variable Name is Case Sensitive

// No limit to the length  of the variables length 

// You not use JavaScript Reserved words as Variable Name 

// Section 02
// Data Types in JavaScript 

// Six Data Types in JavaScript 
// 1. undefined: typeof instance ==='undefined'
// 2. Boolean: typeop instance ===="booleans"
// 3.Number
// 4.String
// 5.BigInt
// 6.Symbol

// Check any type using - typeof
// console.log(typeof(myName)) - Example

// String
var myName ="Vasudev";
console.log(myName);  
console.log(typeof(myName));

// Number
var myAge = 18;
console.log(myAge)
console.log(typeof(myAge));

// Boolean
var iamVasu = true;
console.log(iamVasu);
console.log(typeof(iamVasu));

// Challenge Time 

// Number+String 
console.log(10+"20");
// Result is 1020

// Number-String 
console.log(26-"5");   
// Result is - 21 or This is a - First  bug of JavaScript

// Empty_Space+Empty_Space=InString
console.log(" "+" ");
// Result is Space=WithoutString

// Empty_Space+0 
console.log(" "+0);
// Result is 0 


// String - String 
console.log("Vasudev"-"Jaiswal");
// Result is NaN means -  Not a Number 

// Not a Number use different 
var myPhoneNumber = 12345676890;
console.log(isNaN(myPhoneNumber));
// Result is false

var myName = "Vasudev"
console.log(isNaN(myName)) 
// Result is true becasue this is not a number it is a string 


// --------------------------------------------------------------------------------------------------------------


// Boolean +Boolean = Ture+True
console.log(true+true);
// Result is 2 

// True + false = 1
console.log(true+false);

// false + True = 1
console.log(false+true);

// false - true = 0
console.log(false-false);

// true - false = 1
console.log(true-false);

// _____________________________________________________________________________________________________________
// Interview questions 1 and 2. 
// _____________________________________________________________________________________________________________


//Quis 1. Null  - What is null 

var IamUseless = null;
console.log(IamUseless);
console.log(typeof(IamUseless))
// data types : object  - 2nd bug of javascript    
// Result is null

// Undefined Values 
var IamStandBy;
console.log(IamStandBy);
// The result is - undefined 


// Quis 2. What is NaN 

// NaN is a property of the global object 
// In other words , it is a variable in global Scope 
// The Initial value of NaN is Not-A-Number

var myPhoneNumber = 987654321;
var myName = "Vasudev Jaiswal"

console.log(isNaN(myPhoneNumber));
// result is - False becasuse of Number 

console.log(isNaN(myName));
// result is - True 

if(isNaN(myName)){
    console.log("Please Enter valid Number ");

}
// The result is - Please Enter valid Number 

// -------------------------------
// NaN practice 
// -------------------------------

NaN === NaN;
Number.NaN === NaN;
isNaN(NaN);
isNaN(Number.NaN);
Number.isNaN(NaN);

console.log(isNaN(NaN));

// The result is true 

// ____________________________________________________
// Section -3  EXPRESSIONS AND OPERATORS 
// ____________________________________________________


// Arithmetic Operators 
// "5"[Operand] "+"[Operator] "20"[Operand]

console.log(5+20);

// What is Expressions ?
// ''' Expressios the combinaton of operand and operators '''

/* Types of Operator  :-

1. Assignment Operators
2. Arithmetic Operators 
3. Comparison Operators
5. Logical Operators
6. String Operators 
7. Conditional (ternary) Operators

*/


// Assignment operator 
/*An assignment operator assigns a value to its left operand based on the value to its left operand
based on the value of its right operand.
The simple assignment operator  is equal (=)
*/

var x = 5;
var y = 5;

console.log(`is both  the x and y are equal : ${x == y}`);

// -------------------------------------
// Arithmetic Operators
// --------------------------------------

/* An arithmetic operator takes numerical values (either literals or variables ) as their operands and 
retruns a  single numerical value .
*/

console.log(5+5);
console.log(10-5);
console.log(20/5);
console.log(6*6);

console.log("Remainder Operators "  + 27%4);
// The reslut is - 3


// Icreament and Drecreament Operator 
// operator: x++ or ++x or x-- or --x 

/* If use POSTFIX , with operator after operand (for example, x++ and x--) 
the increment operator incxrements adn returns the value before increasing . */

// [POSTFIX]
var num = 15;
var Newnum = num++ ;
console.log(num);
console.log(Newnum);
// The result is - 16 before 15


/* If use PREFIX, with opertor operand (for example ++x),
the increment operator increment and returns the value after increasing */

var NewNum = ++num;
console.log(NewNum);
// The result is - 17

// --------------------------------
/* Comparison Operator:-
-----------------------------------
A comparison operator compares its operand and returns a logical vlaue based on whether the commparsion 
is true */

var a = 30;
var b = 10;

// Equal (==) 
console.log(a==b);
// The result is - false 


// Not Equal (a ! = b)
console.log(a != b );
// The result is - true 

// Greater than (>)
console.log(a > b );
// The result is - True 

// Less than (<)
console.log(a<b);
// The result is - false

// Less than or equal (=<)
console.log(a<=b);
// The result is false 


// -----------------------------------
// Logical Operators 
// -----------------------------------
/* Logical operators are typically usesd with Boolean (logical) values;
when they are , they return a Boolean value. 
*/

var a = 30;
var b = -20;


// Logical AND (&&)
/* The Logical AND (&&) operator (Logical conjunction) for a set of operands is true if and only if all 
of its operands are true.*/
console.log( a > b && b>0 );
// The result is - false 

// console.log(a>b && b>0 && b<0);
// The result is - false 


//Logical OR (||)
/* The logical OR operator (Logical disjuction) for a set of operands is true if 
and only if one or more of its operands is true . */
console.log((a<0) || (a>0));
// the result is true 


// Logical NOT (!)
/* The logical NOT (!) operator (logical complement , negation) takes truth 
to falsity and vice versa. */

console.log(!(a>0) || (b<0));
// The result is - true 


// /---------------------------------------------
//                String Operators 
// ----------------------------------------------
/* The concatenation operator (+) concateneates two string values together , returning 
another string that is the union of the two operand strings . */


console.log("Hello world");

console.log("hello" + "world" );
// The result is helloworld 

var myFirstName = "Vasudev";
console.log(myFirstName + " Jaiswal")
// The result is - Vasudev Jaiswal 

// ------------------------------------------------------------------------
// Challenge time 
// -------------------------------------------------------------------------

// Qusi 1. What will be the output 3**3 ? 
// sol 1:
// **[Expoenential Operator] - power 

console.log(3**2);
// The result is - 9 

console.log(3**3);
// the result is - 27 


// __________________________________________________________________________
// [2.] Conditional (ternary) Operator 
// __________________________________________________________________________
/* The conditional operator is the only javascript operator that takes three operands */

// variable  = (condition)? value1:value2

var Age = 19
if(Age>18){
    console.log("You are eligble for vote")

}else{
    console.log("Not Eleigible")
}

// Useing Ternary operator 

var age = 19;
console.log((age=>18)? "you can vote":"You can't vote");
// Result is - You can vote 


// __________________________________________________________
// [3.] switch Statements 
// __________________________________________________________
// Evaluates an expressionn , matching the expression's value to a case clause , and executes statements associated
// with that case .

// 1st without break Statement


// Find the Area  of circle , triangle and rectangle 

var area = "triangle"; 
// Change area and result is diffrence every change 
var PI = 3.142, l=5, b=4,  r=3;

switch(area){
case 'circle':
    console.log("the area of the circle is :"+ PI*r**2);
    break;

case 'triangle':
    console.log("The area of triangle is " + (l*b)/2);
    break;

case 'rectangle':
    console.log("The area of rectangle is "+ (l*b));
    break;
default:
    console.log("Please Enter a valid Dat")
}


// Break statements 
/* Terminates the current loop,switch , or label statements and transfers program control
to statement following the terminated statement. */

// _______________________________________________________

// While Loop Statement 
/* The While statement creates a loop that executes a specified statement as long as the test condition
valuates to ture */
// ________________________________________________________

var num = 1;
while(num<=10){
    console.log(num);
    num++;
}

// 1. If you don't use any increment that Loop called Infinte loop 
// 2. The result is - 0-10 
// 3. if num = 20;  then result is nothing in that senerio[quis] - then it's called ## Block Scope


// __________________________________
// DO While Loop 
// __________________________________

var num = 1;

do{
    console.log(num);
    num++;

}while(num<=10);
// The output is - 1-10
// 1. If we put var num =20; then result is terminate  




// _____________________________________________________________________________
// For Loop
/*
for(initializer; Condition; iteration)
{
    //code to be executed ;
}
*/
// _____________________________________________________________________________

for(var num = 1; num <=10; num++){
    console.log(num);
}

// The result is - 1 - 10 


// task.1  Javascript program print table for given number (8,9,12,15) using loop ?

// 8th - Table  -  [8 * 1 = 8 ] to till [8*10 = 80 ]

for(var num =1; num<=10; num++){
    var tableOf = 8;
    console.log( tableOf + " * " + num  + " = " + tableOf * num);
}

for(var num = 1; num<=10; num++){
    var tableOf = 10;
    console.log(tableOf + " * " + num + " = " + tableOf*num);
}


// _____________________________________________________________________________________________________
// Section 5      Function in JavaScript 
// _____________________________________________________________________________________________________


// [5.1] Function Definition  :-
/*  A Function defintion (also called a functionn declaration, or function statement ) consists of 
the function keyword , followed by:-

The name of Function .
A list of parameters to the function, elclosed in parentheses and separated by commas,
The JavaScript statements that define the function, enclosed in curly brackets {...........}.

function functionName()
{
    //statement
}
*/


// ________________________________________
// [5.2] Calling a Function 
// ________________________________________

//Making a Fucntion
function sum(){ 
    var a = 10;
    var b = 20;
    console.log("the sum of a and b is ", a+b);
}

sum();                        //Calling a function 
// The output is - 30 
// 1. If you are not calling a fucnction then the output is - UNDEFINED 


// [3.]  Function Parameter and Function Arguments :-
// function paramenter are the names listed in the function's definition. 
// function Arguments are the real values passed to the function 


// task1. What is Difference between Fucntion paramenter vs function Arguments 


// paramenter is - sum(a,b) :- Where a and b is paramenter 
function sum1(a,b){
    totalValue = a + b;
    console.log("The sum of two value", totalValue);
}

sum1(10,30); // When you calling a function with sum1(a,b) then here is (10,30) - ## Fucntion Arguments 
// The output is two value is - 40  


// Interview Quistion 

// Q . Why Function  ? :-

/* You can reuse code: Define the code once, and use it mnay times . 
You can use the same code many times with different Arguments ,
to produce different results. 

                                     OR , 
A function is a group of reusable code which can be called anywhere in your program. This eliminates the
the need of writing the same code again and again.
*/

// ________________________________________________________
// [4.] Function Expressions :- 
// Function expression simply means Create a function and put it into the variable 
// ________________________________________________________

function sum2(a,b){
    var totalValue = a+b;
    console.log(totalValue);
}

var funExp1 = sum2(15,10);
funExp;

// ____________________________________
// 5. Return Keyword
// ____________________________________
/*When JavaScript reaches a return statement, the functionn will stop executing.

*** Function often compute a return value.
The return value is "returned" back to the "caller"

*/

function sum3(a,b){
    // var total = a+b;    //don't need to code this line 
    // console.log(total);   // don't need to code this line
    return total = a+b;
}
var funExp = sum3(5,25)
console.log("The sum of two no is"+ funExp)
// The result is -30 







// Now it's time for modern JavaScript  
// Feature of ECMASCRIPT 2015 also known as ES6

// __________________________________________________
                //  LET VS CONST VS VAR 
// __________________________________________________


var myName = "Vasudev Jaiswal";
console.log(myName);

myName = "Vasudev Jaiswal";
console.log(myName);  //Not be changed 

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

console.log(mult(5));  //If we return only A or B parameters 
//Result is - NaN

                //   OR , 

function mult(a,b=2){
    return a*b;
}
console.log(mult(5));
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


var myFriends1 = ['vinod', 'Aadity', 'Hanuman','Ridhi'];
console.log(myFriends1[1]);  //Output is - Aadity

// if we want to check the length,  of the data or Array
console.log(myFriends1.length); //Total elemnet of the data or Arrya // The output is - 4 
// Length start with [1-infinite] not 0 


//We use  for Loop to navigate 

var myFriends2 = ['Aaditya', 'Hanuman', 'Ridhi'];

for(var i=0; i<myFriends2.length; i++){
    console.log(myFriends2[i]);
}

// The output is - Aaditya , Hanuman , Ridhi 

// After ES6 we have for .. in and for .. of loop too 

var myFriends3 = ['Aaditya', 'Hanuman', 'Ridhi'];

for(let elemnets in myFriends3){
    console.log(elemnets);
}
// The Output is - 0,1,2,3 

for(let elemnets of myFriends3){
    console.log(elemnets);
}

//The output is - Aaditya , Hanuman , Ridhi 


// Array.prototype.forEach()
// Calls  a Fucntion for each elements in the array

var myFriends4 = ['Aaditya', 'Hanuman', 'Ridhi'];

myFriends4.forEach(function(elements,index,array){
    console.log(elements);
});

// Same Output  


// _____________________________________________________________________________
//                   [2.] Searching and Filter in an Array 
// _____________________________________________________________________________

/* 
Array.prototyp.indexOf()
Returns the first (least) index of an element within the array equal to an element , or -1 
if none is found . It search the element from the 0th index number 

*/

var myFriends4 = ['Vasudev','Aaditya', 'Hanuman', 'Ridhi']


