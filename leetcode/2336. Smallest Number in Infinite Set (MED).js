var SmallestInfiniteSet = function() {
  this.queue = new MinPriorityQueue();  
  this.map = {};
  for (let i=1; i<=1000; i++) {
    this.queue.enqueue(i);
    this.map[i] = 1;
  }
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function() {
  const minVal = this.queue.dequeue().element;
  delete this.map[minVal];
  return minVal;
};

/** 
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function(num) {
    if (!(num in this.map)) {
      this.queue.enqueue(num);
      this.map[num] = 1;

    }

    // for (const ele of this.queue) {
    //     console.log(ele.element);
    // }
};

/** 
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */