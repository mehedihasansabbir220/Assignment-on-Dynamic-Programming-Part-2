/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 * Time Complexity: O(m * n), where m and n are the lengths of text1 and text2
 * Space Complexity: O(m * n)
 */
function longestCommonSubsequence(text1, text2) {
    const m = text1.length;
    const n = text2.length;
    const memo = Array(m).fill(null).map(() => Array(n).fill(-1));

    function dp(i, j) {
        if (i < 0 || j < 0) return 0;
        if (memo[i][j] !== -1) return memo[i][j];

        if (text1[i] === text2[j]) {
            memo[i][j] = 1 + dp(i - 1, j - 1);
        } else {
            memo[i][j] = Math.max(dp(i - 1, j), dp(i, j - 1));
        }

        return memo[i][j];
    }

    return dp(m - 1, n - 1);
}

// Example usage:
console.log(longestCommonSubsequence("abcde", "ace")); // Output: 3
console.log(longestCommonSubsequence("abc", "abc"));   // Output: 3
console.log(longestCommonSubsequence("abc", "def"));   // Output: 0
