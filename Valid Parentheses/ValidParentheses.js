/*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const obj = {
    ')': '(',
    ']': '[',
    '}': '{'
  };
  const stack = [];
  for (b of s) {
    if (b === '(' || b === '[' || b === '{') stack.push(b);
    else if (stack.pop() !== obj[b]) return false;
  }
  return stack.length === 0;
};

//-------------------------------------
// Implementation using a stack
//
// var MyStack = function() {
//     this.list = [];
// };
// MyStack.prototype.push = function(x) {
//     this.list.unshift(x);
// };
// MyStack.prototype.pop = function() {
//     return this.list.shift();
// };
// MyStack.prototype.top = function() {
//     return this.list[0];
// };
// MyStack.prototype.isEmpty = function() {
//     return this.list.length === 0;
// };

// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// var isValid = function(s) {
//     const stack = new MyStack();
//     for(b of s) {
//         if(b === '(' || b === '[' || b === '{') {
//             stack.push(b);
//         } else {
//             if(b === ')' && stack.pop() !== '(')
//                 return false;
//             else if(b === ']' && stack.pop() !== '[')
//                 return false;
//             else if(b === '}' && stack.pop() !== '{')
//                 return false;
//         }
//     }
//     if(!stack.isEmpty())
//         return false
//     return true;
// };
