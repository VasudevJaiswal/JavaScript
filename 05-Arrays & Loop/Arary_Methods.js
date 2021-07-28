// Array methods 
let myArr = ['Vasudev ', 'Aadity ', 18, 23, 'Hanuman', 20, null, true];
console.log(myArr.length);

// // Last Element last one Disappear 

myArr.pop();
console.log(myArr);

// // Add Elements in last And appear 

myArr.push('Ridhi');
console.log(myArr);

// // dispappear in first Elements of line 

myArr.shift();
console.log(myArr);

// // Unshit for adding Element in line 

myArr.unshift();
const newlen = myArr.unshift("Harry")
console.log(myArr);


myArr.toString();
console.log(myArr);

// // To string and number seperated 

myArr.sort();
console.log(myArr);

// // String Methods in JavaScript 


let mylovelystring = "Vasudev Jaiswal is Good boy";
console.log(mylovelystring);
console.log(mylovelystring.length);
console.log(mylovelystring.indexOf("Jaiswal"));
console.log(mylovelystring.lastIndexOf("good"));

// Slicing in JavaScript 


// console.log(mylovelystring.slice(0,6));

// // Repalace method in string in javascript 
// s = mylovelystring.replace("Vasudev", "Ridhi");
// console.log(s, mylovelystring);

// d1 = d.replace("good", "bad");
// console.log(d1);