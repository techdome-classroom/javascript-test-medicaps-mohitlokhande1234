function smallestMissingPositiveInteger(nums) {

  // Implement the function smallest_missing_positive_integer
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
        nums[i] += Math.floor(Math.abs(nums[i]) / value) * value;
        if (nums[i] < 0) nums[i] += value;
    }
}

// Make an array for storing the frequencies of remainders
const a = Array(100001).fill(0);

// Store the frequencies of all the remainders
for (const num of nums) {
    a[num % value]++;
}

// Just check which remainder is not available 
let n = Math.floor(nums.length / value) + 1;
for (let j = 0; j < n; j++) {
    for (let i = 0; i < value; i++) {
        if (a[i] === j) return value * j + i;
    }

}






module.exports = smallestMissingPositiveInteger;
