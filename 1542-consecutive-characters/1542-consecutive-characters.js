/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
    
     
    let val=s[0]
    let valcount=0

    let count=0
    for(i=1;i<s.length;i++){
      if(s[i-1]==s[i]){
          count++

          if(count>valcount){
              val=s[i]
              valcount=count
          }
      }else{
          count=0
      }
    }

    return valcount+1
};