function compareDates(date1, date2) {
    if (date1 > date2) {
        return `${date1} is greater than ${date2}`;
    } else if (date1 < date2) {
        return `${date1} is less than ${date2}`;
    } else {
        return `${date1} is equal to ${date2}`;
    }
}

// Example usage:
let date1 = new Date("07/12/2024");
let date2 = new Date("07/11/2024");
console.log(compareDates(date1, date2));
