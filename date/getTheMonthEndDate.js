function getMonthEndDate(date) {
    let endDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    endDate.setHours(23, 59, 59, 999);
    return endDate;
}

// Example usage:
let date = new Date("07/12/2024");
console.log(getMonthEndDate(date)); // Output: 07/31/2024 23:59:59
