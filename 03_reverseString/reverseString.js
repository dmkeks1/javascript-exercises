const reverseString = function(string) {

// Step 1. Use the split() method to return a new array
let splitString = string.split(""); // let splitString = "hello".split("");
// ["h", "e", "l", "l", "o"]

 // Step 2. Use the reverse() method to reverse the new created array
let reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
// ["o", "l", "l", "e", "h"]

// Step 3. Use the join() method to join all elements of the array into a string
let joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
// "olleh"

//Step 4. Return the reversed string
return joinArray;

};

// Do not edit below this line
module.exports = reverseString;
