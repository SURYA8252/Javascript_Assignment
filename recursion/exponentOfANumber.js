function exponent(base, exp) {
    if (exp === 0) {
        return 1;
    } else {
        return base * exponent(base, exp - 1);
    }
}

console.log(exponent(8, 2)); // Output: 64
