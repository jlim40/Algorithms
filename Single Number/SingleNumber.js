/*
Given an array of integers, every element appears twice except for one. Find that single one.

Note:
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let set = new Set();
    nums.forEach((n) => {
        if(set.has(n))
            set.delete(n);
        else
            set.add(n);
    });
    return set.values().next().value;
};
