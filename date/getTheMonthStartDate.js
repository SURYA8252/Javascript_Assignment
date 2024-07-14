function getMonthStartDate(date) {
    let startDate = new Date(date.getFullYear(), date.getMonth(), 1);
    startDate.setHours(0, 0, 0, 0);
    return startDate;
}

// Example usage:
let date = new Date("07/12/2024");
console.log(getMonthStartDate(date)); // Output: 07/01/2024 00:00:00
