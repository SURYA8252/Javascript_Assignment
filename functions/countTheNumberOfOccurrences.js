function countOccurrences(str) {
    const occurrences = {};
    for (let char of str) {
        occurrences[char] = occurrences[char] ? occurrences[char] + 1 : 1;
    }
    return occurrences;
}

console.log(countOccurrences('hello world'));
