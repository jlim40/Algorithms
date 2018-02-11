/*
Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

For example:

Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.

Follow up:
Could you do it without any loop/recursion in O(1) runtime?
*/


/**
 * @param {number} num
 * @return {number}
 */
let addDigits = function(num){
	let n = num;
	while(parseInt(n/10) > 0)
        n = helper(n);
	return n;
}

let helper = function(num) {
	if(parseInt(num/10) > 0){
		return num%10 + helper(parseInt(num/10));
	}
	return num%10;
}
