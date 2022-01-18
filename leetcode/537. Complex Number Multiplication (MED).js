/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var complexNumberMultiply = function(num1, num2) {
    let [a, b] = num1.split("+");
    b = +b.replace("i", "");
    a = +a;
    let [c, d] = num2.split("+");
    d = +d.replace("i", "");
    c = +c;
    
    return ''+((a*c) - (b*d)) + '+' +''+((a*d) + (b*c)) + 'i';
};
