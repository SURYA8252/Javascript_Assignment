function monthName(date) {
    const monthNames = ["January", "February", "March", "April", "May", "June", 
                        "July", "August", "September", "October", "November", "December"];
    return monthNames[date.getMonth()];
}

// Example usage:
console.log(monthName(new Date("07/12/2024"))); // July
