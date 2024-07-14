function startOfDay(date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

// Example usage:
console.log(startOfDay(new Date("07/12/2024 10:00"))); // Output: 07/12/2024 00:00
