# Binary Search Algorithm

## Introduction

**Binary Search** is a fast search algorithm that works on sorted arrays. It divides the search interval in half repeatedly until the target value is found or the interval is empty.
[Check the binary tree data structure](../../../Basic%20Data%20Structure/Trees/ReadMe.md)

## How It Works

1. Start with two pointers, one at the beginning (`left`) and one at the end (`right`) of the array.
2. Calculate the middle index (`mid`) of the current interval.
3. If the middle element is equal to the target value, return the index.
4. If the target value is less than the middle element, narrow the search to the left half by moving the `right` pointer to `mid - 1`.
5. If the target value is greater than the middle element, narrow the search to the right half by moving the `left` pointer to `mid + 1`.
6. Repeat until the target is found or the interval is empty.

## Time and Space Complexity

-   **Best Case Time Complexity**: O(1) - The target is found at the mid index on the first check.
-   **Average Case Time Complexity**: O(log n) - The search space is halved with each iteration.
-   **Worst Case Time Complexity**: O(log n) - The search continues until the interval is empty.
-   **Space Complexity**: O(1) - Only a constant amount of space is required for pointers.

[Back to Searching Algorithms Folder](../../Searching%20Algorithms/ReadMe.md)
