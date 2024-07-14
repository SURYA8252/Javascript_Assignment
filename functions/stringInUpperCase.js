function capitalizeFirstLetter(str) {
    return str.replace(/\b\w/g, function(char) { return char.toUpperCase(); });
}

console.log(capitalizeFirstLetter('the quick brown fox'));
