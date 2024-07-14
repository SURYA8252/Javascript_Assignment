function stringParameterize(str) {
    return str.trim().toLowerCase().replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-');
}

// Example usage:
console.log(stringParameterize("Robin Singh from USA.")); // 'robin-singh-from-usa'
