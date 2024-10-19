# Stack Data Structure: A Theoretical Overview

## Introduction

A **stack** is a linear data structure that follows the **Last In, First Out (LIFO)** principle, meaning the last element added to the stack is the first one to be removed. Stacks are widely used in programming for various applications, such as managing function calls and handling expressions.

For example, a stack of integers might look like this:

Top -> [3] [2] [1]

## Definition

A stack can be defined as:

-   A collection of elements with two main operations:
    -   **Push**: Adds an element to the top of the stack.
    -   **Pop**: Removes the element from the top of the stack.
-   A stack can be empty, in which case it is considered **underflow** when trying to pop an element from it.

In JavaScript, a stack can be implemented using an array or a linked list, but here we will focus on an array-based implementation for simplicity.

## Common Use Cases

Stacks are used in various applications, including:

-   **Function Call Management**: The call stack keeps track of active functions, managing execution contexts and returning control to the calling function.
-   **Expression Evaluation**: Stacks can help evaluate mathematical expressions and convert between different notations (infix, postfix).
-   **Backtracking Algorithms**: Used in algorithms that explore possible solutions by remembering previous states.
-   **Undo Mechanisms**: Many applications use stacks to store user actions, allowing users to undo operations.

## Stack Operations

Common operations that can be performed on a stack include:

-   **Push**: Adds a new element to the top of the stack.
-   **Pop**: Removes the top element from the stack.
-   **Peek/Top**: Returns the top element without removing it.
-   **IsEmpty**: Checks if the stack is empty.
-   **GetSize**: Returns the number of elements in the stack.

### Example Methods

Here are some example methods for the stack implementation in JavaScript:

-   **`push(element)`**: Adds a new element to the top of the stack.
-   **`pop()`**: Removes and returns the top element of the stack.
-   **`peek()`**: Returns the top element without removing it.
-   **`isEmpty()`**: Checks if the stack is empty.
-   **`getSize()`**: Returns the number of elements in the stack.

## Conclusion

Stacks are similar to built-in arrays in that they both store collections of elements, but stacks come with additional control mechanisms. Stacks follow the Last In, First Out (LIFO) principle, where the last element added is the first one to be removed. This characteristic makes stacks particularly useful for managing data and controlling flow in various applications, such as function calls, undo operations, and expression evaluation.
