function exponent(b, n) {
    return n === 0 ? 1 : b * exponent(b, n - 1);
}

console.log(exponent(2, 3));
console.log(exponent(5, 2));
console.log(exponent(7, 0));
