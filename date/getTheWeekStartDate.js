function getWeekStartDate(date) {
    let day = date.getDay();
    let diff = date.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
    let startDate = new Date(date.setDate(diff));
    startDate.setHours(0, 0, 0, 0);
    return startDate;
}

// Example usage:
let date = new Date("07/12/2024");
console.log(getWeekStartDate(date)); // Output: 07/08/2024 00:00:00
