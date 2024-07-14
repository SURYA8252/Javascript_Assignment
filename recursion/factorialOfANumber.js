function factorial(n) {
    if (n < 0) return -1; // Factorial for negative numbers is not defined
    if (n === 0) return 1; // 0! is 1
    return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120
