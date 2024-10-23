/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    n=arr.length;
    var filteredArray = new Array();
    for(let i=0;i<n;i++){
        if(fn(arr[i],i)){
            filteredArray.push(arr[i]); // arr[i] : only values are pushed to the filtered array because either the index position remains blank
        }
    }
    return filteredArray;
};