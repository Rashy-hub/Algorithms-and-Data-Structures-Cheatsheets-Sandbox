# Quick Sort Algorithm

## Introduction

**Quick Sort** is an efficient, recursive sorting algorithm that uses the divide-and-conquer approach. It picks an element as a pivot and partitions the array around the pivot, recursively sorting the sub-arrays.

## How It Works

1. Select a pivot element from the array (commonly the last element).
2. Partition the array into two halves:
    - Elements less than the pivot go to the left.
    - Elements greater than the pivot go to the right.
3. Recursively apply the above steps to the sub-arrays.

## Time and Space Complexity

-   **Best Case Time Complexity**: O(n log n) - The pivot divides the array into roughly equal parts.
-   **Average Case Time Complexity**: O(n log n)
-   **Worst Case Time Complexity**: O(n^2) - When the smallest or largest element is always chosen as the pivot.
-   **Space Complexity**: O(log n) - Due to recursive stack space.

[Back to Sortgin Algorithms folder](../../Sorting%20Algorithms/ReadMe.md)
