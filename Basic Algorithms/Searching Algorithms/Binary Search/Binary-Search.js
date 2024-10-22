// Binary Search Algorithm
function binarySearch(arr, target) {
    let left = 0
    let right = arr.length - 1

    while (left <= right) {
        const mid = Math.floor((left + right) / 2)

        if (arr[mid] === target) {
            return mid // Return the index of the target element
        } else if (arr[mid] < target) {
            left = mid + 1 // Search in the right half
        } else {
            right = mid - 1 // Search in the left half
        }
    }
    return -1 // Return -1 if not found
}

// Example usage
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(binarySearch(sortedArray, 5)) // Output: 4
console.log(binarySearch(sortedArray, 10)) // Output: -1
