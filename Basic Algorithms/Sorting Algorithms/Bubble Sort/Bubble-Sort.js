/**@function
 * Generate an random array filled with unordered integers
 *@param {number} size - size of the array
 *@param {number} max - maximum value of random filled numbers
 *@returns {number[]} - the integers filled array ready to use
 */
function randomIntArray(size, max) {
    let result = new Array(size)
    result.fill(0)
    let randomValue
    for (let index in result) {
        randomValue = Math.floor(Math.random() * max + 1)
        result[index] = randomValue
        // console.log(element)
    }
    return result
}

/**@function
 * Bubble Sort an input array
 *@param {number[]} arr - array to sort // ex: [90, 64, 64, 93, 37, 37, 72, 32, 59, 27]
 *@returns {number[]}  - sorted array returned
 */

function bubbleSort(arr) {
    let temp = 0
    let swapped
    do {
        swapped = false
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
                swapped = true
            }
        }
    } while (swapped)

    return arr
}
let arrayToSort = randomIntArray(10, 100)
console.log(arrayToSort + ' => array to sort')
console.log(bubbleSort(arrayToSort) + ' => bubble sorted array')
