/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
    
    let common=[]
    
    for(i=0;i<strs[0].length;i++){
        let count=0
        for(j=0;j<strs.length;j++){
            
            if(strs[0][i]==strs[j][i]){
                count++
            }
        }


        if(count==strs.length){
            common.push(strs[0][i])
        }
        else {
            break
        }
        
        
    }

    return common.join('')
};