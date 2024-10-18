# Factorial Algorithm: A Theoretical Overview

## Introduction

The **factorial** of a non-negative integer `n`, denoted as `n!`, is the product of all positive integers less than or equal to `n`. Factorials are commonly used in different areas of mathematics and computer science.

For example:

-   `0! = 1` (by definition)
-   `1! = 1`
-   `5! = 5 * 4 * 3 * 2 * 1 = 120`

## Definition

The factorial of a number `n` is defined as:

-   `n! = n * (n-1) * (n-2) * ... * 1` for `n > 0`
-   `0! = 1` (special case)

Mathematically, the recursive definition is:

-   `n! = n * (n-1)!` for `n > 0`
-   `0! = 1`

This recursive relationship forms the basis for many algorithmic implementations of the factorial function.

## Common Use Cases

Factorials are used in various fields, including:

-   **Combinatorics**: To calculate permutations and combinations.
-   **Probability**: In determining the number of possible outcomes.
-   **Mathematical Analysis**: In series expansions and limits.
-   **Algorithms**: Such as backtracking algorithms and dynamic programming.
