/**
 * @param {number} n
 * @return {number[]}
 */
var beautifulArray = function(n) {
		const results = [[0], [1]];
		
		for(let i=2; i<=n; i++) {
				const result = [];
				
        // console.log(results[i-1]);
				for(const ele of results[i-1]) {
						const val = 2*ele - 1;
            // console.log(val);
						if(val <= i) {
								result.push(val);
						}
				}
				
				
				results[i-1].forEach(ele => {
						const val = 2*ele;
            // console.log(val);
						if(val <= i) {
								result.push(val);
						}
				})
				// console.log(`${i}: ${result}`);
				results.push(result)
		}
		
		// console.log(results)
		return results[n];
};

console.log(beautifulArray(5));