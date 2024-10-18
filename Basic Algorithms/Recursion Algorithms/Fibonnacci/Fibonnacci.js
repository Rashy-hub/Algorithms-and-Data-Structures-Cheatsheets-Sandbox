// **Naive Recursive Solution**

function naiveFibonacci(n) {
    // Base case
    if (n <= 1) return n
    // Recursive case
    return naiveFibonacci(n - 1) + naiveFibonacci(n - 2)
}

console.log(naiveFibonacci(10)) // will output 55
console.log(naiveFibonacci(20)) // will output 6765

/*
    - **Time Complexity**: O(2^n) - Each call generates two more calls, leading to exponential growth.
    - **Space Complexity**: O(n) - The depth of the recursion stack can go up to n.
*/

// **Dynamic Programming (Memoization) Solution**

function memoizedFibonacci(n, memo = {}) {
    // Base case
    if (n <= 1) return n
    // Check if the value is already computed
    if (memo[n]) return memo[n]
    // Recursive case with memoization
    memo[n] = memoizedFibonacci(n - 1, memo) + memoizedFibonacci(n - 2, memo)
    return memo[n]
}

console.log(memoizedFibonacci(10)) // will output 55
console.log(memoizedFibonacci(20)) // will output 6765

/*
    - **Time Complexity**: O(n) - Each value from 0 to n is computed only once.
    - **Space Complexity**: O(n) - Space is used to store the memoized results.
*/

// **Iterative Approach**

function iterativeFibonacci(n) {
    if (n <= 1) return n
    let a = 0,
        b = 1
    for (let i = 2; i <= n; i++) {
        let temp = a + b
        a = b
        b = temp
    }
    return b
}

console.log(iterativeFibonacci(10)) // will output 55
console.log(iterativeFibonacci(20)) // will output 6765

/*
    - **Time Complexity**: O(n) - Each iteration processes one Fibonacci number.
    - **Space Complexity**: O(1) - Uses constant space regardless of the input size.
*/
