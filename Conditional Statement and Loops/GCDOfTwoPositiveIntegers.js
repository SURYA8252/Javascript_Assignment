function gcd(a, b) {
    if (!b) {
        return a;
    }
    return gcd(b, a % b);
}

// Example usage:
console.log(gcd(56, 98));
