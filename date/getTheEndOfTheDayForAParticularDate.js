function endOfDay(date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59, 999);
}

// Example usage:
console.log(endOfDay(new Date("07/12/2024 10:00"))); // Output: 07/12/2024 23:59:59.999
