# Queue Data Structure: A Theoretical Overview

## Introduction

A **queue** is a linear data structure that follows the **First In, First Out (FIFO)** principle. This means the first element added to the queue is the first one to be removed, similar to a line of people waiting for service. Queues are commonly used in scenarios where order must be preserved, such as task scheduling or handling requests in systems.

For example, a queue of integers might look like this:

Front -> [2] [3] [4] [5] <- Rear

_Alternatively, depending on your implementation:_

Rear -> [2] [3] [4] [5] <- Front

In array-based implementations, the choice of array methods like `push()`, `pop()`, `shift()`, or `unshift()` will determine whether elements are added or removed from the front or rear.

## Definition

A queue can be defined as:

-   A collection of elements with two main operations:
    -   **Enqueue**: Adds an element to the rear of the queue.
    -   **Dequeue**: Removes an element from the front of the queue.
-   A queue can be empty, and trying to dequeue from an empty queue results in an **underflow** condition.

In JavaScript, a queue can be implemented using an array, where elements are added to one end (rear) and removed from the other (front).

## Common Use Cases

Queues are useful in various programming scenarios, including:

-   **Task Scheduling**: Queues are used in operating systems and job schedulers to manage tasks in the order they arrive.
-   **Breadth-First Search (BFS)**: Algorithms like BFS use queues to explore nodes layer by layer in a graph.
-   **Request Handling**: Web servers use queues to handle multiple incoming requests, ensuring they are processed in order.
-   **Print Queue**: Printers use a queue to manage print jobs, processing them in the order they are received.

## Queue Operations

Common operations that can be performed on a queue include:

-   **Enqueue**: Adds a new element to the rear of the queue.
-   **Dequeue**: Removes the element from the front of the queue.
-   **Peek**: Returns the front element without removing it.
-   **IsEmpty**: Checks if the queue is empty.
-   **GetSize**: Returns the number of elements in the queue.

### Example Methods

Here are some example methods for a queue implementation in JavaScript:

-   **`enqueue(item)`**: Adds a new element to the rear of the queue.
-   **`dequeue()`**: Removes and returns the element at the front of the queue.
-   **`peek()`**: Returns the front element without removing it.
-   **`isEmpty()`**: Checks if the queue is empty.
-   **`getSize()`**: Returns the number of elements in the queue.
-   **`printQueue()`**: Prints the current state of the queue in a readable format.

## Conclusion

Queues are an essential data structure in programming, particularly in situations where elements must be processed in the same order they arrive. By following the First In, First Out (FIFO) principle, queues ensure fairness and proper task execution. They are widely used in operating systems, algorithms like BFS, request handling, and scheduling systems.
