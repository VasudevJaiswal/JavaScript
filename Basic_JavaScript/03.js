//                              Array.prototype.pop()
/* The pop() method removes the last element from an array and returns the pop() method removes the last element from an 
array and retruns that element . this method changes the length of the array .
*/

const plants = ['tomato','cabbage','kale','cauliflower'];

console.log(plants);
console.log(plants.pop()); // The result is - cauliflower ["Removing all the element instead of  the last element of the array"]
console.log(plants.shift());    // The result is - Tomato ["Removing all the element instead of the first element of the array"]



// __________________________________________________________________________________
// Challenging Time 
// __________________________________________________________________________________

const months = ['Jan','March','April','June','July'];

// 1. Add DEc at the end of an Array ?
// Sol 1. 

const newMonths = months.splice(4,0,Dec);


// 2. What is return value of  splice method ?


// 3. Update march to March (Update)?


// 4. Delete June for From an Array ? 
