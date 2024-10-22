// Quick Sort Algorithm
function quickSort(arr) {
    if (arr.length <= 1) return arr

    const pivot = arr[arr.length - 1] // Choose the last element as pivot
    const left = []
    const right = []

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)]
}

// Example usage
const array = [10, 7, 8, 9, 1, 5]
console.log(quickSort(array)) // Output: [1, 5, 7, 8, 9, 10]
