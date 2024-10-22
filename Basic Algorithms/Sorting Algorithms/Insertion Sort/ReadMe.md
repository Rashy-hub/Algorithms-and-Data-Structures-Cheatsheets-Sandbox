# Insertion Sort Algorithm

## Introduction

**Insertion Sort** is a simple and intuitive sorting algorithm that builds the final sorted array (or list) one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.

## How It Works

1. Start with the second element (assuming the first is sorted).
2. Compare it to the elements in the sorted part (left side).
3. Insert it in the correct position.
4. Repeat for each element in the list until sorted.

## Time and Space Complexity

-   **Best Case Time Complexity**: O(n) - The array is already sorted.
-   **Average Case Time Complexity**: O(n^2) - The array is in random order.
-   **Worst Case Time Complexity**: O(n^2) - The array is sorted in reverse order.
-   **Space Complexity**: O(1) - Only a constant amount of space is required.

[Back to Sorting Algorithms Folder](../../Sorting%20Algorithms/ReadMe.md)
