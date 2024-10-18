//**Naive Iterative Solution**

function naiveFactorial(n) {
    let result = 1
    for (let i = 2; i <= n; i++) {
        result *= i
    }
    return result
}

console.log(naiveFactorial(4)) // will output 24
console.log(naiveFactorial(5)) // will output 120

/*
    - **Time Complexity**: O(n) - Each iteration processes one number.
    - **Space Complexity**: O(1) - Uses constant space regardless of the input size.
*/

// **Recursive Solution**

function RecursiveFactorial(n) {
    //base case
    if (n <= 1) return 1
    //recursive case
    return n * RecursiveFactorial(n - 1)
}

console.log(RecursiveFactorial(4))
console.log(RecursiveFactorial(5))

/*
    - **Time Complexity**: O(n) - Each call processes one number.
    - **Space Complexity**: O(n) - The depth of the recursion stack can go up to n, consuming additional space.
*/
