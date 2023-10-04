/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let leastnum="za"
    for(i=0;i<letters.length;i++){
     if(letters[i]<leastnum&&letters[i]>target){
         leastnum=letters[i]
     }
    }
    if(leastnum=="za"){
        return letters[0]
    }

    return leastnum
};