/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    const visited = new Array(rooms.length).fill(false);
    var helper = function(room) {
        if (visited[room])
            return;
        visited[room] = true;
        for (const k of rooms[room]) {
            helper(k);
        }
    }
    helper(0);
    for (const val of visited) {
        if (!val)
            return false;
    }
    return true;
};