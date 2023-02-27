/**
 * // Definition for a QuadTree node.
 * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */

/**
 * @param {number[][]} grid
 * @return {Node}
 */
var construct = function(grid) {
  let root = new Node(1, 0);
  

  // var helper = function(root, topLeft, topRight, bottomLeft, bottomRight) {
  var helper = function(n, r, c) {
      // console.log(`${n}: ${r}: ${c}`);
      if (n === 1)
          return new Node(grid[Math.ceil(r)][Math.ceil(c)], true);

      let allSame = true;
      for (let i=r; i<n+r; i++) {
          for (let j=c; j<n+c; j++) {
              if (grid[i][j] != grid[r][c]) {
                  allSame = false;
                  break;
              }
          }
          if (!allSame) break;
      }

      if (allSame)
          return new Node(grid[r][c], true);

      // console.log('grid is not same throughout')
      const newNode = new Node(1, false);
      n = n/2;
      newNode.topLeft = helper(n, r, c);
      newNode.topRight = helper(n, r, c + n);
      newNode.bottomLeft = helper(n, r + n, c);
      newNode.bottomRight = helper(n, r + n, c + n);
      return newNode;
  }
  // helper(root, [0,0], [0,grid.length], [grid.length,0], [grid.length,grid.length]);
  return helper(grid.length, 0, 0);
};










