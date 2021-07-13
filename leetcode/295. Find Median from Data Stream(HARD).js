/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
  this.list = [];
};

/** 
* @param {number} num
* @return {void}
*/
MedianFinder.prototype.addNum = function(num) {

  let i = this.list.length;
  if(this.list.length===0) {
      this.list.push(num);
      return;
  }
  while(i>0) {
    if(this.list[i-1]<num) {
      // console.log("gotta break");
      // console.log(i);
      break;
    }
    this.list[i] = this.list[i-1];
    i--;
  }
  this.list[i] = num;
  // console.log(this.list)
};

/**
* @return {number}
*/
MedianFinder.prototype.findMedian = function() {
  const len = this.list.length
  if(len%2 != 0) {
      return this.list[Math.ceil(len/2)-1];        
  }
  else {
      return (this.list[len/2 -1] + this.list[len/2])/2
  }
};

/** 
* Your MedianFinder object will be instantiated and called as such:
* var obj = new MedianFinder()
* obj.addNum(num)
* var param_2 = obj.findMedian()
*/