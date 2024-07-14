function abbrevName(str) {
    let splitNames = str.trim().split(" ");
    if (splitNames.length > 1) {
        return (splitNames[0] + " " + splitNames[1].charAt(0) + ".");
    }
    return splitNames[0];
}

// Example usage:
console.log(abbrevName('Robin Singh')); // 'Robin S.'
