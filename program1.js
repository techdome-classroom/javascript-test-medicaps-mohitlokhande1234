function longestSubstring(s) {
    // Implementation of longestSubstring function
    let a_pointer = 0;
    let b_pointer = 0;
    let max = 0;
    const hash_set = new Set();
    while (b_pointer < s.length) {
    if (!hash_set.has(s.charAt(b_pointer))) {
        hash_set.add(s.charAt(b_pointer));
        b_pointer++;
        max = Math.max(hash_set.size, max);
    } else {
        hash_set.delete(s.charAt(a_pointer));
        a_pointer++;
    }
}
return max;
}


module.exports = { longestSubstring };


