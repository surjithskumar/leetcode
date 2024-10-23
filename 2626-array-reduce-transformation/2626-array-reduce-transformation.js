/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let n = nums.length;
    let val = init;
    // Loop through each element in the nums array
    for (let i = 0; i < n; i++) {
        // Update the value by applying the function fn
        val = fn(val, nums[i]);
    }
    return val; 
};