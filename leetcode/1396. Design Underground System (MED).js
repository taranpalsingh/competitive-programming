var UndergroundSystem = function() {
    this.incomplete = {};
    this.complete = {};
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    this.incomplete[id] = [stationName, t];
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, tostationName, tot) {
    const [startStationName, startt] = this.incomplete[id];
    const time = tot-startt;
    delete this.incomplete[id];

    if (!(startStationName in this.complete))
        this.complete[startStationName] = {};


    if (!(tostationName in this.complete[startStationName]))
        this.complete[startStationName][tostationName] = [time, 1];
    else {
        this.complete[startStationName][tostationName][0] += time;
        this.complete[startStationName][tostationName][1] += 1;
    }
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    const [time, count] = this.complete[startStation][endStation];
    return time/count;
};

/** 
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */