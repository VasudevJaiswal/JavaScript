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
// Result is - 21 or This is a bug of JavaScript

// Empty_Space+Empty_Space=InString
console.log(" "+" ");
// Result is Space=WithoutString

// Empty_Space+0 
console.log(" "+0);
// Result is 0 


// String - String 
console.log("Vasudev"-"Jaiswal");
// Result is NaN means Not a Number 

// Not a Number use different 
var myPhoneNumber = 12345676890;
console.log(isNaN(myPhoneNumber));
// Result is false

var myName = "Vasudev"
console.log(isNaN(myName)) 
// Result is true becasue this is not a number it is a string 

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

// Null  - What is null 
var IamUseless = null;
console.log(IamUseless);
console.log(typeof(IamUseless))
// data types : object 
// Result is null

// Undefined Values 
// var IamSmartBy;
// console.log(IamSmartBy);