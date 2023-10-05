/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
let result
for(i=0;i<n;i++){

    result^=start+2*i
}

return result
};