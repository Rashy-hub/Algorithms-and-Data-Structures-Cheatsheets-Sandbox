# Searching Algorithms Comparison Table

| Algorithm                | Best Case Time Complexity | Average Case Time Complexity | Worst Case Time Complexity | Space Complexity | Works on Sorted Data |
| ------------------------ | ------------------------- | ---------------------------- | -------------------------- | ---------------- | -------------------- |
| **Linear Search**        | O(1)                      | O(n)                         | O(n)                       | O(1)             | No                   |
| **Binary Search**        | O(1)                      | O(log n)                     | O(log n)                   | O(1)             | Yes                  |
| **Jump Search**          | O(√n)                     | O(√n)                        | O(√n)                      | O(1)             | Yes                  |
| **Exponential Search**   | O(1)                      | O(log n)                     | O(log n)                   | O(log n)         | Yes                  |
| **Interpolation Search** | O(1)                      | O(log log n)                 | O(n)                       | O(1)             | Yes                  |

## Notes on Each Algorithm

-   **Linear Search**: A simple search algorithm that checks every element in the list sequentially. It is not efficient for large datasets but works well with small, unsorted datasets.

-   **Binary Search**: Efficient for searching in sorted arrays. It works by repeatedly dividing the search interval in half. It is much faster than Linear Search for large datasets but requires the data to be sorted beforehand.

-   **Jump Search**: This algorithm works on sorted arrays by jumping ahead a fixed number of steps (usually √n) and then performing a linear search within a smaller range. It is more efficient than Linear Search for larger, sorted datasets.

-   **Exponential Search**: Used to find an element in a sorted array by first finding the range where the element lies and then performing a Binary Search within that range. It is particularly useful for unbounded or infinite lists.

-   **Interpolation Search**: An improvement over Binary Search for uniformly distributed datasets. Instead of dividing the array in half, it estimates the position of the target value using the values at the endpoints of the current search interval. Its performance degrades to O(n) if the data is not uniformly distributed.

## Common Use Cases

-   **Linear Search**: Best suited for small lists or arrays where the search cost is not critical. It can be applied to unsorted data or when only a single occurrence of an element is needed.

-   **Binary Search**: Best used for large, sorted datasets. It is highly efficient when the list is sorted, making it a good choice in applications where data retrieval speed is critical, such as searching through a database of sorted records.

-   **Jump Search**: Ideal for larger sorted datasets where a full scan is too slow and Binary Search might not be suitable, especially in cases where accessing elements involves higher cost (e.g., database lookups).

-   **Exponential Search**: Suitable for searching large, sorted datasets, especially in scenarios where the search space is unbounded or exponentially increasing, such as searching large files or databases.

-   **Interpolation Search**: Works best for datasets where values are evenly distributed, such as records in a numerical database. However, it should not be used for datasets with irregular distribution.

[Binary Search](./Binary%20Search/)
[Linear Search](./Linear%20Search/)
[Back to main README](../../ReadMe.md)
