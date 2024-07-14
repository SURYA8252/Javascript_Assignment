function isBlank(str) {
    return (!str || /^\s*$/.test(str));
}

// Example usage:
console.log(isBlank('')); // true
console.log(isBlank('abc')); // false
