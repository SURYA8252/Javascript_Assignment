function addMinutes(date, minutes) {
    return new Date(date.getTime() + minutes * 6000);
}

// Example usage:
let date = new Date("07/12/2024 10:00");
console.log(addMinutes(date, 30)); // 10:30 AM
