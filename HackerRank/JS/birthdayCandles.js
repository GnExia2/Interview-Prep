//https://www.hackerrank.com/challenges/birthday-cake-candles/problem?isFullScreen=true&h_r=next-challenge&h_v=zen
// let candleArr = [3, 2, 1, 3];
let candleArr = [18, 90, 90, 13, 90, 75, 90, 8, 90, 43]

function birthdayCakeCandles(candles) {
  let maxHeight = 0;
  let heightCount = 0;

  for (var i = 0; i < candles.length; i++) {
    if (candles[i] > maxHeight){
      maxHeight = candles[i];
    }
    else {
      heightCount++;
    }
  }
  return heightCount;
}

console.log(birthdayCakeCandles(candleArr));
