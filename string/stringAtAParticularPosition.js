function insertString(mainString, insString, pos) {
    if (typeof (pos) == "undefined") {
        pos = 0;
    }
    if (typeof (insString) == "undefined") {
        insString = '';
    }
    return mainString.slice(0, pos) + insString + mainString.slice(pos);
}

// Example usage:
console.log(insertString('We are doing some exercises.', 'JavaScript ', 18)); // 'We are doing some JavaScript exercises.'
