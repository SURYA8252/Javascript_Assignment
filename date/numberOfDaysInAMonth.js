function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

// Example usage:
console.log(daysInMonth(2, 2024)); // 29 (leap year)
console.log(daysInMonth(2, 2023)); // 28
