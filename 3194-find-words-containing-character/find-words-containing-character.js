/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
let newarr=[]
    for(i=0;i<words.length;i++){
        if(words[i].includes(x)){
            newarr.push(i)
        }
    }

return newarr
    
};