/**
 * @param {number[][]} properties
 * @return {number}
 */
var numberOfWeakCharacters = function(properties) {
  let count = 0;
  // console.log(properties.length);

  properties = properties.sort((a,b) => a[0] === b[0]? a[1]-b[1]: b[0]-a[0]);

  console.log(properties);
  let maxAttacker = properties[0][0];
  let maxDefender = properties[0][1];
  let nextMaxDefender = properties[0][1];

  for (let i=1; i<properties.length; i++) {
    if (properties[i][0] < properties[i-1][0]) {
      maxDefender = Math.max(nextMaxDefender, maxDefender);
      nextMaxDefender = properties[i][1];
      maxAttacker = properties[i-1][0];
    }
    
    if (properties[i][0] < maxAttacker && properties[i][1] < maxDefender) {
      count++;
    }
  }

  return count;
};

console.log(numberOfWeakCharacters([[7,1],[7,5],[2,3],[2,2],[2,1],[1,0],[2,6],[1,6]]));
// console.log(numberOfWeakCharacters([[5,5],[2,1],[2,9],[6,3],[3,6],[2,7],[7,2]]));
// console.log(numberOfWeakCharacters([[29,26],[92,1],[81,64],[41,54],[56,74],[76,39],[16,69],[78,84],[65,39],[7,2],[62,96],[16,22],[47,34],[16,22],[66,26],[93,49],[55,16],[41,21],[11,73],[17,1],[63,81],[90,37],[83,50],[7,97],[86,14],[68,67],[65,63],[35,32],[100,1],[23,4],[17,6],[74,52],[98,90],[4,15],[31,36],[69,53],[17,33],[80,56],[8,100],[94,85],[89,76],[14,76],[31,85],[89,54],[73,69],[55,7],[73,13],[31,100],[29,55],[82,6],[12,66],[17,72],[45,50],[99,73],[41,10],[89,16],[69,35],[72,34],[85,49],[12,5],[61,42],[32,28],[10,55],[61,19],[17,4],[48,59],[15,44],[7,48],[1,92],[68,12],[23,6],[5,92],[70,49],[59,3],[9,62],[50,6],[75,39],[7,79],[35,80],[94,41],[25,43],[44,16],[3,68],[87,62],[70,62],[68,49],[8,46],[16,7],[16,60],[42,48]]));
// console.log(numberOfWeakCharacters([[1,2],[1,3],[1,4], [2,1],[3,1],[4,1],[3,10],[9,8],[8,10]]));
