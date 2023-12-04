/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function(n) {
    let i=1
    while(true){
        if(n*i%2==0){
            return n*i
        }
        i++

    }
};