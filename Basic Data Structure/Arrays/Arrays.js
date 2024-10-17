/* Arrays can be created in different ways */
const ARRAY_QTY=6;

const arr1 = []; // ! This way we declare an empty array
const arr2 = [1, 2, 3]; // ! This way we declare an array already filled with values
const arr3 = [1, "test", true]; // ! Values can be different in JavaScript
const arr4 = new Array(); // ! We can use the Array built-in class to instantiate a new array
const arr5 = new Array(6); // ! If only one parameter is provided, it is its size
const arr6 = new Array(1, 2, 3); // ! If multiple parameters are provided, they will be the values of the newly created array


/* this loop will print out */
for (let i = 1; i <= ARRAY_QTY; i++) {
    // Access the variable name dynamically with eval => security issues ?
    const arr = eval(`arr${i}`); 
    console.log(`arr${i}:`, arr);
  }

  /*We can access elements of arrays trough loops and index */
  
/* In JavaScript, arrays are mutable by default, meaning you can modify them directly
   However, using techniques that promote immutability can lead to safer and more predictable code, especially in functional programming paradigms.
   The most basic way is to use the spread operator

*/
const originalArray = [1, 2, 3];

// Creating a new array by adding an element , we could also spread as many arrays we want , the result will just be a merged array

const newArray = [...originalArray, 4];

console.log('Original Array:', originalArray); // Output: [1, 2, 3]
console.log('New Array:', newArray); // Output: [1, 2, 3, 4]

/* Arrays comes with handy built in methods some of them don't modify the original array while others do (mutable)  */

console.log("*** ARRAY BUILT-IN METHODS ***")

const numbers = [5, 3, 8, 1, 2];

// 1. Push - Add elements to the end
numbers.push(7);
console.log('After push:', numbers); // Output: [5, 3, 8, 1, 2, 7]

// 2. Pop - Remove the last element
const popped = numbers.pop();
console.log('After pop:', numbers); // Output: [5, 3, 8, 1, 2]
console.log('Popped element:', popped); // Output: 7

// 3. Unshift - Add elements to the beginning
numbers.unshift(0);
console.log('After unshift:', numbers); // Output: [0, 5, 3, 8, 1, 2]

// 4. Shift - Remove the first element
const shifted = numbers.shift();
console.log('After shift:', numbers); // Output: [5, 3, 8, 1, 2]
console.log('Shifted element:', shifted); // Output: 0

// 5. Slice - Extract a section of the array
const sliced = numbers.slice(1, 4);
console.log('Sliced array:', sliced); // Output: [3, 8, 1]

// 6. Splice - Add/remove elements at a specific index
const spliced = numbers.splice(1, 2, 6, 9); // Remove 2 elements at index 1 and add 6, 9
console.log('After splice:', numbers); // Output: [5, 6, 9, 1, 2]
console.log('Removed elements:', spliced); // Output: [3, 8]

// 7. IndexOf - Find the index of an element
const index = numbers.indexOf(1);
console.log('Index of 1:', index); // Output: 3

// 8. Includes - Check if an element exists
const hasFive = numbers.includes(5);
console.log('Includes 5:', hasFive); // Output: true

// 9. Map - Create a new array by applying a function to each element
const doubled = numbers.map(num => num * 2);
console.log('Doubled array:', doubled); // Output: [10, 12, 18, 2, 4]

// 10. Filter - Create a new array with elements that pass a test
const filtered = numbers.filter(num => num > 5);
console.log('Filtered array (greater than 5):', filtered); // Output: [6, 9]

// 11. ForEach - Execute a function for each element
console.log('Logging each element:');
numbers.forEach(num => console.log(num)); // Output: 5, 6, 9, 1, 2 (each on a new line)

// 12. Reduce - Reduce the array to a single value
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log('Sum of numbers:', sum); // Output: 23

// 13. Sort - Sort the elements in ascending order
const sortedNumbers = [...numbers].sort((a, b) => a - b); // Create a copy and sort
console.log('Sorted array:', sortedNumbers); // Output: [1, 2, 5, 6, 9]

// 14. Reverse - Reverse the order of the elements
const reversed = [...numbers].reverse(); // Create a copy and reverse
console.log('Reversed array:', reversed); // Output: [2, 1, 9, 6, 5]

// 15. Find - Find the first element that satisfies a provided testing function
const found = numbers.find(num => num > 5);
console.log('First number greater than 5:', found); // Output: 6

// 16. FindIndex - Find the index of the first element that satisfies a provided testing function
const foundIndex = numbers.findIndex(num => num > 5);
console.log('Index of first number greater than 5:', foundIndex); // Output: 1

// 17. Some - Check if at least one element passes the test
const hasEven = numbers.some(num => num % 2 === 0);
console.log('Contains even number:', hasEven); // Output: true

// 18. Every - Check if all elements pass the test
const allPositive = numbers.every(num => num > 0);
console.log('All numbers are positive:', allPositive); // Output: true

// 19. Flat - Create a new array with all sub-array elements concatenated into it
const nestedArray = [1, 2, [3, 4, [5, 6]]];
const flatArray = nestedArray.flat(2); // Flattening to 2 levels deep
console.log('Flattened array:', flatArray); // Output: [1, 2, 3, 4, 5, 6]

// 20. FlatMap - Map each element using a mapping function, then flatten the result into a new array
const flatMappedArray = nestedArray.flatMap(num => [num * 2]); // Double each element and flatten
console.log('Flat mapped array:', flatMappedArray); // Output: [2, 4, [6, 8, [10, 12]]]



  