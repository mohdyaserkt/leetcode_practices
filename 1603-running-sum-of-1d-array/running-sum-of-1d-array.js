/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let newArr=[]
    for(i=0;i<nums.length;i++){
     let sum1=nums.slice(0,i+1).reduce((sum,val)=>{
       return sum+=val
     },0)

newArr.push(sum1)
    }

    return newArr
};