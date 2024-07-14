function getWeekEndDate(date) {
    let day = date.getDay();
    let diff = date.getDate() + (7 - day); // adjust to get to Saturday
    let endDate = new Date(date.setDate(diff));
    endDate.setHours(23, 59, 59, 999);
    return endDate;
}

// Example usage:
let date = new Date("07/12/2024");
console.log(getWeekEndDate(date)); // Output: 07/13/2024 23:59:59
