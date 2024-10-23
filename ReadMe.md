# Basic Data Structures

This project is designed to help me (and hopefully you too 😅) understand, implement, and work with fundamental data structures & basic algorithms using JavaScript (Node.js). There's no heavy theoretical content here—just a straightforward, practical reminder!

## Data Structures:

1. [**Arrays** 📊](./Basic%20Data%20Structure/Arrays)
2. [**Linked Lists** 🔗](./Basic%20Data%20Structure/Linked%20Lists)
3. [**Stacks** 🥞](./Basic%20Data%20Structure/Stacks)
4. [**Queues** ⏳](./Basic%20Data%20Structure/Queues)
5. [**Trees** 🌳](./Basic%20Data%20Structure/Trees)
6. [**Hash Tables** 🗝️](./Basic%20Data%20Structure/Hash%20Tables)
7. [**Graphs** 🕸️](./Basic%20Data%20Structure/Graphs)
8. [**Sets** 🦄](./Basic%20Data%20Structure/Sets)

## Basic Algorithms:

1. [**Recursion:** 🔄](./Basic%20Algorithms/Recursion%20Algorithms)

    - [**Factorial** ✖️](./Basic%20Algorithms/Recursion%20Algorithms/Factorial)
    - [**Fibonacci** 🌀](./Basic%20Algorithms/Recursion%20Algorithms/Fibonnacci)

2. [**Sorting Algorithms:** 📏](./Basic%20Algorithms/Sorting%20Algorithms)

    - [**Bubble Sort** 🔵](./Basic%20Algorithms/Sorting%20Algorithms/Bubble%20Sort)
    - [**Selection Sort** 🎯](./Basic%20Algorithms/Sorting%20Algorithms/Selection%20Sort)
    - [**Insertion Sort** ➕](./Basic%20Algorithms/Sorting%20Algorithms/Insertion%20Sort)
    - [**Merge Sort** 🔀](./Basic%20Algorithms/Sorting%20Algorithms/Merge%20Sort)
    - [**Quick Sort** ⚡](./Basic%20Algorithms/Sorting%20Algorithms/Quick%20Sort)

3. [**Searching Algorithms:** 🔍](./Basic%20Algorithms/Searching%20Algorithms)

    - [**Linear Search** ➡️](./Basic%20Algorithms/Searching%20Algorithms/Linear%20Search/)
    - [**Binary Search** 🌴](./Basic%20Algorithms/Searching%20Algorithms/Binary%20Search/)

## Common Time and Space Complexities Reminder

-   **O(1):** Constant Time (**Ideal Case** 😇)
-   **O(log n):** Logarithmic Time
-   **O(n):** Linear Time
-   **O(n log n):** Linearithmic Time
-   **O(n²):** Quadratic Time (**Worst Case** 👿)

## Tips When Working with JavaScript Array and String Built-in Methods

While solving the top 150 LeetCode interview questions, I noticed that when it comes to space and time complexities, some of the built-in array and string methods in JavaScript are clearly not optimized.
Basically, we should avoid these methods in performance-critical situations. That's why I came up with the idea to create a sort of cheat sheet or reminder that highlights the impact of each method on Big O complexity evaluation. The methods are sorted from best to worst in terms of performance, helping you quickly identify which ones to use and which to avoid.

### Optimized Methods to Use for Arrays :

| **Method**                                                                         | **Description**                                                            | **Time Complexity** | **Space Complexity** | **Modifies Original/Returns New** | **Can be Optimized/Alternative**      |
| ---------------------------------------------------------------------------------- | -------------------------------------------------------------------------- | ------------------- | -------------------- | --------------------------------- | ------------------------------------- |
| `push()`                                                                           | Adds an element to the end of an array.                                    | O(1)                | O(1)                 | Modifies Original                 | No                                    |
| `pop()`                                                                            | Removes the last element of an array.                                      | O(1)                | O(1)                 | Modifies Original                 | No                                    |
| `find()`                                                                           | Returns the first element that satisfies a condition.                      | O(n)                | O(1)                 | Returns New                       | No                                    |
| `every()`                                                                          | Checks if all elements meet a condition.                                   | O(n)                | O(1)                 | N/A                               | No                                    |
| `some()`                                                                           | Checks if at least one element meets a condition.                          | O(n)                | O(1)                 | N/A                               | No                                    |
| `includes()`                                                                       | Checks if an array contains a specific element.                            | O(n)                | O(1)                 | N/A                               | No                                    |
| `indexOf()`                                                                        | Finds the index of an element in an array.                                 | O(n)                | O(1)                 | N/A                               | No                                    |
| `filter()`                                                                         | Creates a new array with elements that meet a condition.                   | O(n)                | O(n)                 | Returns New                       | Can use loops for memory optimization |
| **------------------------AVOID USING BELOW THIS LINE---------------------------** |
| `map()`                                                                            | Creates a new array with results of a function applied on each element.    | O(n)                | O(n)                 | Returns New                       | Prefer loops for better control       |
| `concat()`                                                                         | Merges two or more arrays into a new one.                                  | O(n)                | O(n)                 | Returns New                       | Use spread syntax for optimization    |
| `slice()`                                                                          | Returns a shallow copy of a portion of an array.                           | O(n)                | O(n)                 | Returns New                       | Use loops if memory usage is critical |
| `splice()`                                                                         | Changes array contents by adding/removing elements.                        | O(n)                | O(n)                 | Modifies Original                 | Avoid in performance-sensitive cases  |
| `sort()`                                                                           | Sorts the elements of an array in place.                                   | O(n log n)          | O(log n)             | Modifies Original                 | Use optimized sorting algorithms      |
| `reduce()`                                                                         | Executes a reducer function on each element, resulting in a single output. | O(n)                | O(1)                 | N/A                               | Use loops for memory control          |

### Optimized Methods to Use for Strings:

| **Method**                                                                         | **Description**                                                   | **Time Complexity** | **Space Complexity** | **Modifies Original/Returns New** | **Can be Optimized/Alternative**         |
| ---------------------------------------------------------------------------------- | ----------------------------------------------------------------- | ------------------- | -------------------- | --------------------------------- | ---------------------------------------- |
| `length`                                                                           | Returns the length of a string.                                   | O(1)                | O(1)                 | N/A                               | No                                       |
| `charAt()`                                                                         | Returns the character at a specific index.                        | O(1)                | O(1)                 | N/A                               | No                                       |
| `includes()`                                                                       | Checks if a string contains a specified value.                    | O(n)                | O(1)                 | N/A                               | No                                       |
| `indexOf()`                                                                        | Returns the index of the first occurrence of a value in a string. | O(n)                | O(1)                 | N/A                               | No                                       |
| `slice()`                                                                          | Extracts a part of a string and returns it as a new string.       | O(n)                | O(n)                 | Returns New                       | Can use loops for better memory control  |
| `trim()`                                                                           | Removes whitespace from both ends of a string.                    | O(n)                | O(n)                 | Returns New                       | No                                       |
| **------------------------AVOID USING BELOW THIS LINE---------------------------** |
| `split()`                                                                          | Splits a string into an array of substrings.                      | O(n)                | O(n)                 | Returns New                       | Use loops for memory and performance     |
| `replace()`                                                                        | Replaces occurrences of a string with another.                    | O(n)                | O(n)                 | Returns New                       | Use loops and conditionals when possible |
| `toLowerCase()`                                                                    | Converts a string to lowercase.                                   | O(n)                | O(n)                 | Returns New                       | Use carefully in large-scale operations  |
| `toUpperCase()`                                                                    | Converts a string to uppercase.                                   | O(n)                | O(n)                 | Returns New                       | Same as above                            |
| `substring()`                                                                      | Returns a subset of a string between two indexes.                 | O(n)                | O(n)                 | Returns New                       | Prefer manual string manipulation        |
