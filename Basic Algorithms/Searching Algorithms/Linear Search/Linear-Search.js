// Linear Search Algorithm
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i // Return the index of the target element
        }
    }
    return -1 // Return -1 if not found
}

// Example usage
const array = [5, 3, 8, 4, 2]
console.log(linearSearch(array, 4)) // Output: 3
console.log(linearSearch(array, 10)) // Output: -1
