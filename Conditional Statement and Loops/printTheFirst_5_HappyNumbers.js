function isHappyNumber(num) {
    let seenNumbers = new Set();
    while (num !== 1 && !seenNumbers.has(num)) {
        seenNumbers.add(num);
        num = sumOfSquares(num);
    }
    return num === 1;
}

function sumOfSquares(num) {
    return num.toString().split('').reduce((sum, digit) => sum + Math.pow(digit, 2), 0);
}

function firstNHappyNumbers(n) {
    let happyNumbers = [];
    let number = 1;
    while (happyNumbers.length < n) {
        if (isHappyNumber(number)) {
            happyNumbers.push(number);
        }
        number++;
    }
    console.log(happyNumbers);
}

// Example usage:
firstNHappyNumbers(5);
