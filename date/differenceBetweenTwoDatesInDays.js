function dateDiffInDays(date1, date2) {
    const oneDay = 24 * 60 * 60 * 1000;
    const diffDays = Math.round(Math.abs((date1 - date2) / oneDay));
    return diffDays;
}

// Example usage:
let date1 = new Date("07/12/2024");
let date2 = new Date("07/10/2024");
console.log(dateDiffInDays(date1, date2)); // 2
