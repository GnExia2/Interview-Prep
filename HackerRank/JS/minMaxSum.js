//https://www.hackerrank.com/challenges/mini-max-sum/problem?isFullScreen=true

function miniMaxSum(arr) {
  let minSum = 0;
  let maxSum = 0;

  arr.sort();


  for (let i = 0; i < arr.length-1; i++) {
    minSum = minSum += arr[i];
  }

  for (let i = 1; i <= arr.length-1; i++) {
    maxSum = maxSum += arr[i];
  }
console.log(minSum + " " + maxSum);

}
