function isDate(input) {
    return Object.prototype.toString.call(input) === '[object Date]';
}

// Example usage:
console.log(isDate(new Date())); // true
console.log(isDate("2024-07-12")); // false
