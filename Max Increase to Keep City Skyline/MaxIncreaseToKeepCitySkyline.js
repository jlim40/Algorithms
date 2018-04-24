/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
  const top = [];
  const side = [];
  for (let i = 0; i < grid.length; ++i) {
    let sideMax = grid[i][0];
    let topMax = grid[0][i];
    for (let j = 0; j < grid[0].length; ++j) {
      if (grid[i][j] > sideMax) sideMax = grid[i][j];
      if (grid[j][i] > topMax) topMax = grid[j][i];
    }
    side.push(sideMax);
    top.push(topMax);
  }
  let sum = 0;
  for (let i = 0; i < grid.length; ++i) {
    for (let j = 0; j < grid[0].length; ++j) {
      if (grid[i][j] !== Math.max(side[i], top[j]))
        sum += Math.min(side[i], top[j]) - grid[i][j];
    }
  }
  return sum;
};
