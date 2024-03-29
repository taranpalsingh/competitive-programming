/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
  people = people.sort((a,b) => a-b);
  let boats = 0;
  
  let start = 0, end = people.length-1;
  while (start <= end) {
      if (people[start] + people[end] <= limit) {
          start++;
      }
      end--;
      boats++;
  }
  return boats;
};