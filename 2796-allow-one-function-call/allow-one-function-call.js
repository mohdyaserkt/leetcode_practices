/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let res;
    let call=false
	return function(...args){
        
        if(!call){
            call=true
            res=fn(...args)
            return res
            
        }else{
             return undefined
        }
       

    }
};


/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
