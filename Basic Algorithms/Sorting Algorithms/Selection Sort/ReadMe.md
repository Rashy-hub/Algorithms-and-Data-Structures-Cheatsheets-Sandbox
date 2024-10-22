# Selection Sort Algorithm

## Introduction

**Selection Sort** is a simple comparison-based sorting algorithm. It divides the input list into two parts: the sorted part and the unsorted part. The algorithm repeatedly selects the smallest (or largest, depending on the order) element from the unsorted part and moves it to the end of the sorted part.

## How It Works

1. Start with the first element as the minimum.
2. Compare this minimum with the next element.
3. If the next element is smaller, update the minimum.
4. After completing the comparisons, swap the minimum element with the first element.
5. Repeat the process for the remaining unsorted elements.

## Time and Space Complexity

-   **Best Case Time Complexity**: O(n^2) - The array is already sorted.
-   **Average Case Time Complexity**: O(n^2) - The array is in random order.
-   **Worst Case Time Complexity**: O(n^2) - The array is sorted in reverse order.
-   **Space Complexity**: O(1) - Only a constant amount of space is required.

[Back to Sorting Algorithms Folder](../../Sorting%20Algorithms/ReadMe.md)
