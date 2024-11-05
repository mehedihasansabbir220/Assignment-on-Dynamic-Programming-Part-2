/**
 * @param {number[]} nums
 * @return {number}
 * Time Complexity: O(n * log n), where n is the length of nums
 * Space Complexity: O(n)
 */
function lengthOfLIS(nums) {
    const tails = [];

    for (const num of nums) {
        let left = 0;
        let right = tails.length;

        // Binary search for the insertion point in tails
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (tails[mid] < num) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        // If num is larger than all elements in tails, add it to the end
        if (left === tails.length) {
            tails.push(num);
        } else {
            tails[left] = num; // Replace the first larger element
        }
    }

    return tails.length;
}

// Example usage:
console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])); // Output: 4
console.log(lengthOfLIS([0, 1, 0, 3, 2, 3]));           // Output: 4
console.log(lengthOfLIS([7, 7, 7, 7, 7, 7, 7]));        // Output: 1
