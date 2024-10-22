# Hash Tables: A Theoretical Overview

## Introduction

A **Hash Table** is a data structure that stores key-value pairs. It uses a **hashing function** to map keys to a specific index in an array, making it possible to access values efficiently. Hash tables are widely used in applications where fast lookups are required, such as databases, caching, and associative arrays (or objects in JavaScript). Some famous hashing function => md5 , sha-2 or even bcrypt

For example, a hash table could store a mapping between names and phone numbers:

| Name    | Phone Number |
| ------- | ------------ |
| Alice   | +32498657489 |
| Bob     | +32459987756 |
| Charlie | +32645487654 |

## Definition

A Hash Table can be defined as:

-   A collection of key-value pairs.(kind of a Map in javascript or you could use an array of arrays)
-   A **hashing function** that takes a key and converts it into an index where the corresponding value is stored. Since the function is deterministic, the same input will always produce the same hash output
-   **Collision handling** is necessary because different keys may hash to the same index.

In JavaScript, hash tables are often implemented using **arrays**, with keys hashed to a valid index in the array. The hash function helps to ensure efficient data storage and retrieval.

## Common Use Cases

Hash tables are commonly used in various applications, including:

-   **Caching**: Storing frequently accessed data for quick retrieval.
-   **Database Indexing**: Quickly finding records in large datasets.
-   **Symbol Tables**: Used in compilers or interpreters to store variable names.
-   **Associative Arrays**: Key-value storage for quick lookups.

## Hash Table Operations

The most common operations in a hash table include:

-   **Insert**: Adds a key-value pair to the hash table.
-   **Delete**: Removes a key-value pair from the hash table.
-   **Search**: Retrieves the value associated with a given key.
-   **Hashing**: Converts a key into a valid index in the underlying array.

### Example Methods

Here are the basic methods that a Hash Table might implement in JavaScript:

-   **`insert(key, value)`**: Inserts a key-value pair into the hash table.
-   **`get(key)`**: Retrieves the value associated with the key.
-   **`remove(key)`**: Deletes the key-value pair associated with the key.
-   **`hash(key)`**: Hashes the key to an index.

## Collision Handling

Since multiple keys might hash to the same index, handling collisions is crucial for hash table efficiency. There are two common techniques:

-   **Chaining**: Store multiple key-value pairs at the same index using a list or another structure.We will use that solution in our example here ;)
-   **Open Addressing**: Find another available spot in the array if a collision occurs (e.g., linear probing).

## Conclusion

Hash tables are a powerful and efficient data structure for storing key-value pairs with quick access times. By using a hashing function to map keys to indices in an array, hash tables provide an ideal solution for applications that require fast lookups, such as caching, database indexing, and symbol tables.

[Back to main README](../../ReadMe.md)
