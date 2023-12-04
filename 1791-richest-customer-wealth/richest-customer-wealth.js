/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    
    let richest=0

    for(person of accounts){
     let wealth=person.reduce((sum,val)=>{
return sum+=val
     },0)

     if(wealth>richest){
         richest=wealth
     }
    }

    return richest
};