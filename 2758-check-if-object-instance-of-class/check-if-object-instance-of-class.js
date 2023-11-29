/**
 * @param {*} obj
 * @param {*} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function(obj, classFunction) {
    if (obj!=null&&typeof classFunction === 'function'&&Object(obj) instanceof classFunction) {
    return true
}else {
    return false
}
    
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */