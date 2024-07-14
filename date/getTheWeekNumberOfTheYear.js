function getWeek(date) {
    let oneJan = new Date(date.getFullYear(), 0, 1);
    let numberOfDays = Math.floor((date - oneJan) / (24 * 60 * 60 * 1000));
    let result = Math.ceil((date.getDay() + 1 + numberOfDays) / 7);
    return result;
}

// Example usage:
console.log(getWeek(new Date("07/12/2024"))); // Week number of the year
