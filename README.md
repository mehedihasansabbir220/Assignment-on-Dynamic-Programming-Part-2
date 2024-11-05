# Dynamic Programming Solutions with Optimized Algorithms

This repository contains solutions to two dynamic programming problems with optimized algorithms:
1. Finding the longest common subsequence (LCS) of two strings.
2. Finding the longest increasing subsequence (LIS) of an array.

## Task 1: Longest Common Subsequence (LCS) with Memoization

### Problem Statement
Given two strings `text1` and `text2`, find the length of their longest common subsequence (LCS). If there is no common subsequence, return 0.

### Solution
This solution uses a recursive approach with memoization to avoid redundant calculations, optimizing the solution.

### Complexity
- **Time Complexity**: \(O(m \times n)\), where `m` and `n` are the lengths of `text1` and `text2`.
- **Space Complexity**: \(O(m \times n)\), due to memoization storage.

### Usage
```javascript
longestCommonSubsequence("abcde", "ace"); // Output: 3
longestCommonSubsequence("abc", "abc");   // Output: 3
longestCommonSubsequence("abc", "def");   // Output: 0


## Assignment-on-Dynamic-Programming-Part-2
