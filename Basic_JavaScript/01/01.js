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
