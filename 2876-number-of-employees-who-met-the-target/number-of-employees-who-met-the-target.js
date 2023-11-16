/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {
    let count1=0
    for(i=0;i<hours.length;i++){
        if(hours[i]>=target){
            count1++
        }
    }

    return count1
};