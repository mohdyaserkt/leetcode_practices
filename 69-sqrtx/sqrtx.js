/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x==0){
        return x
    }
    for(i=1;i<=x;i++){

        if(i*i==x){
            return i
        }else if(i*i>x){
            return i-1
        }
    }
};