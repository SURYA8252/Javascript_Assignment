function isArmstrongNumber(num) {
    let digits = num.toString().split('');
    let sum = digits.reduce((acc, digit) => acc + Math.pow(digit, 3), 0);
    return sum === num;
}

function findArmstrongNumbers() {
    let armstrongNumbers = [];
    for (let i = 100; i < 1000; i++) {
        if (isArmstrongNumber(i)) {
            armstrongNumbers.push(i);
        }
    }
    console.log(armstrongNumbers);
}

// Example usage:
findArmstrongNumbers();
