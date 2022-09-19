/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function(paths) {
  
  const dir = {}
  paths.forEach(path => {
    const pathSplits = path.split(" ");
    const dirName = pathSplits[0];
    // console.log(dirName);
    for (let i=1; i<pathSplits.length; i++) {
      const file = pathSplits[i].split("(");
      // console.log(file[0]);
      const content = file[1].slice(0, file[1].length - 1);
      // console.log(content);
      if (dir.hasOwnProperty(content)) {
        dir[content].push(dirName + "/" + file[0]);
      } else {
        dir[content] = [dirName + "/" + file[0]];
      }
    }
  })

  // console.log(dir);
  const ans = [];
  for (const key of Object.keys(dir)) {
    ans.push(dir[key]);
  }
  return ans;
};

console.log(findDuplicate(["root/a 1.txt(abcd) 2.txt(efgh)","root/c 3.txt(abcd)","root/c/d 4.txt(efgh)","root 4.txt(efgh)"]));
console.log(findDuplicate([]));