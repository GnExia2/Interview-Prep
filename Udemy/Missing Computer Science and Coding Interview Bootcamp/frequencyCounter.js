// Frequency Counter - sameFrequency

// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:

console.log(sameFrequency(182,281)); // true
console.log(sameFrequency(34,14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22,222)); // false

function sameFrequency(a,b){
    const strNum1 = a.toString();
    const strNum2 = b.toString();

    if (strNum1.length !== strNum2.length) {
        return false;
    }

    const frequencyCounter = {};

    for (let digit of strNum1) {
        frequencyCounter[digit] = (frequencyCounter[digit] || 0) + 1;
    }

    for (let digit of strNum2) {
        if (!frequencyCounter[digit]) {
            return false;
        } else {
            frequencyCounter[digit] -= 1;
        }
    }

    return true;
}
