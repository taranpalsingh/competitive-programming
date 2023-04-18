/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
  let stack = [], ipush = 0, ipop = 0;

  while (ipop < popped.length || ipush < pushed.length) {
      if (stack[stack.length-1] === popped[ipop]) {
          stack.pop();
          ipop++;
      } else {
          if (ipush >= pushed.length) return false
          stack.push(pushed[ipush++]);
      }
  }
  return stack.length === 0;
};