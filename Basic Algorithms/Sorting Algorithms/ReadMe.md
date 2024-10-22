# Sorting Algorithms Comparison Table

| Algorithm          | Best Case Time Complexity | Average Case Time Complexity | Worst Case Time Complexity | Space Complexity | Stable |
| ------------------ | ------------------------- | ---------------------------- | -------------------------- | ---------------- | ------ |
| **Bubble Sort**    | O(n)                      | O(n^2)                       | O(n^2)                     | O(1)             | Yes    |
| **Selection Sort** | O(n^2)                    | O(n^2)                       | O(n^2)                     | O(1)             | No     |
| **Insertion Sort** | O(n)                      | O(n^2)                       | O(n^2)                     | O(1)             | Yes    |
| **Merge Sort**     | O(n log n)                | O(n log n)                   | O(n log n)                 | O(n)             | Yes    |
| **Quick Sort**     | O(n log n)                | O(n log n)                   | O(n^2)                     | O(log n)         | No     |

## Notes on Each Algorithm

-   **Bubble Sort**: Simple but inefficient for large datasets; repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.
-   **Selection Sort**: Inefficient for large lists; repeatedly selects the minimum (or maximum) element from the unsorted portion and moves it to the beginning (or end).
-   **Insertion Sort**: Builds the sorted array one element at a time; more efficient for small or partially sorted datasets.
-   **Merge Sort**: Divides the array into halves, sorts them, and then merges them back together; stable and works well with large datasets.
-   **Quick Sort**: Efficient and widely used; divides the array into sub-arrays based on a pivot and recursively sorts them; can degrade to O(n^2) in the worst case, but performs well on average.

## Common Use Cases

-   **Bubble Sort**: Due to its simplicity, it is often used for educational purposes to demonstrate sorting algorithms. It can be suitable for small datasets or when memory space is limited, and stability is required.

-   **Selection Sort**: Best suited for small datasets or when memory write operations are costly, as it makes the minimum number of swaps. It can also be used in scenarios where memory is constrained since it is an in-place sorting algorithm.

-   **Insertion Sort**: Particularly effective for small or nearly sorted datasets. It is often used in practice for sorting small lists or as a subroutine in more complex algorithms, such as Merge Sort.

-   **Merge Sort**: Ideal for sorting large datasets and linked lists. It is stable and guarantees O(n log n) performance, making it a good choice for external sorting algorithms where the data does not fit into memory.

-   **Quick Sort**: Generally the go-to choice for sorting large datasets due to its average-case efficiency and cache performance. It is used in many standard libraries and applications. However, it is not stable and can be less efficient with very small or nearly sorted data compared to other algorithms like Insertion Sort.
    [Bubble Sort](./Bubble%20Sort/)
    [Selection Sort](./Selection%20Sort/)
    [Insertion Sort](./Insertion%20Sort/)
    [Merge Sort](./Merge%20Sort/)
    [Quick Sort](./Merge%20Sort/)

[Back to main README](../../ReadMe.md)
