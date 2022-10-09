
var TimeMap = function() {
  this.map = {};
};

/** 
* @param {string} key 
* @param {string} value 
* @param {number} timestamp
* @return {void}
*/
TimeMap.prototype.set = function(key, value, timestamp) {
  if (!this.map.hasOwnProperty(key)) {
      this.map[key] = {}
  }
  this.map[key][timestamp] = value;
};

/** 
* @param {string} key 
* @param {number} timestamp
* @return {string}
*/
TimeMap.prototype.get = function(key, timestamp) {
  if (!this.map.hasOwnProperty(key)) {
      return '';
  }
  if (!this.map[key].hasOwnProperty(timestamp)) {
      let time = timestamp;
      while (time > 0) {
          if (this.map[key].hasOwnProperty(time))  {
              return this.map[key][time];
          }
          time--;
      }
      return "";
  } else {
      return this.map[key][timestamp];
  }
};

/** 
* Your TimeMap object will be instantiated and called as such:
* var obj = new TimeMap()
* obj.set(key,value,timestamp)
* var param_2 = obj.get(key,timestamp)
*/