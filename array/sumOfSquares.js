function sumOfSquares(arr) {
    return arr.reduce((sum, num) => sum + num * num, 0);
}

// Example usage:
console.log(sumOfSquares([0, 1, 2, 3, 4]));
