// How Much is True?

// Create a function which returns the number of true values there are in an array.

// Examples
// countTrue([true, false, false, true, false]) ➞ 2
// countTrue([false, false, false, false]) ➞ 0
// countTrue([]) ➞ 0

function countTrue(arr) {
    let trueCount = 0;
    for(i=0; i<arr.length; i++){
        if (arr == []){
            return 0;
        }
        if (arr[i] === true){
            trueCount++;
        }
    }
    return trueCount;
}

console.log(countTrue([true, false, false, true, false]));
console.log(countTrue([false, false, false, false]));
console.log(countTrue([]));