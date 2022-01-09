/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function(instructions) {
	let [x,y] = [0,0];
	let dir = 1;
	// Right: 1, top: 2, left: 3, down: 4
	
    
	var goStraight = function() {
		switch(dir) {
			case 1: 
				x++;
				break;
			case 2: 
				y--;
				break;
			case 3: 
				x--;
				break;
			case 4: 
				y++;
				break;
		}
	}
    for(const instruction of instructions.toUpperCase().split("")) {
		switch(instruction) {
			case 'G':
				goStraight();
				break;
			case 'L':
				// goLeft();
				if(dir === 4) {
					dir = 1;
				} else {
					dir++; 
				}
				break;
			case 'R':
				// goRight();
				if(dir === 1) {
					dir = 4;
				} else {
					dir--; 
				}
				break;
		}
	}

    console.log([x,y]);
    if(!x && !y) {
        return true;
    }
    
    if (dir === 1) {
        return false;
    } 

    return true;
};
