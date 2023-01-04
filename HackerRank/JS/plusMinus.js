//https://www.hackerrank.com/challenges/plus-minus/problem?isFullScreen=true
let arr = [-4, 3, -9, 0, 4, 1]
function plusMinus(arr) {
  let n = arr.length;
  let positiveCount = 0;
  let negativeCount = 0;
  let zeroCount = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0){
      positiveCount++
    }
    else if (arr[i] < 0){
      negativeCount++
    }
    else {
      zeroCount++
    }
  }
  console.log((positiveCount/n).toFixed(6));
  console.log((negativeCount/n).toFixed(6));
  console.log((zeroCount/n).toFixed(6));
}

plusMinus(arr);
