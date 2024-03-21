/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let arr=[]

    for(i=0;i<numRows;i++){
         let sarr=[]
        for(j=0;j<=i;j++){
             if(j==i||j==0){
                sarr.push(1)
             }else{
                 sarr.push(arr[i-1][j]+arr[i-1][j-1])
             }
            
           
        }

        arr.push(sarr)
    }
    return arr
};