/**
 * Initialize your data structure here.
 */
var MapSum = function() {
  this.obj = {}
  this.prefixesSum = {}
};

/** 
 * @param {string} key 
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function(key, val) {
  const change = this.obj.hasOwnProperty(key) ? val - this.obj[key] : val;
  this.obj[key] = val; 

  for(let i = 0; i < key.length; i++) {
    const prefix = key.slice(0, i + 1);
    this.prefixesSum[prefix] = this.prefixesSum.hasOwnProperty(prefix) ? this.prefixesSum[prefix] + change: change;
  }

  console.log(this.prefixesSum);
  console.log(this.obj);
};

/** 
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function(prefix) {
    return this.prefixesSum.hasOwnProperty(prefix) ? this.prefixesSum[prefix]: 0;
};

/** 
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */

const a = new MapSum();
a.insert("apple", 3);
a.insert("app", 3);
// a.insert("a", 3);
// a.insert("ap", 3);
console.log(a.sum("ap"))