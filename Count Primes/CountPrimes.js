/*
Description:

Count the number of prime numbers less than a non-negative number, n.
*/

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  var count = 0;
  var notPrimes = new Array(n).fill(false);
  for (var i = 2; i < n; i++) {
    if (!notPrimes[i]) {
      count++;
      for (var j = 2; i * j < n; j++) {
        notPrimes[i * j] = true;
      }
    }
  }
  return count;
};
