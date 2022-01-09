/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 */
var Solution = function(head) {
    this.head = head;
    this.count = 0;
    this.array = [];
    this.createArray();
};

Solution.prototype.createArray = function() {
    let curr = this.head;
    
    while(curr) {
        this.array.push(curr.val);
        curr = curr.next;
    }
    this.count = this.array.length;
    // console.log(this.array);
    // console.log(this.count);
};

/**
 * @return {number}
 */
Solution.prototype.getRandom = function() {
    const rand = Math.floor(Math.random() * this.count);
    // console.log(this.array[rand]);
    return this.array[rand];
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */
