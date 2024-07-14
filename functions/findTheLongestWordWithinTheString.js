function longestWord(str) {
    const words = str.split(' ');
    let maxLength = 0;
    let longest = '';
    for (let word of words) {
        if (word.length > maxLength) {
            maxLength = word.length;
            longest = word;
        }
    }
    return longest;
}

console.log(longestWord('Web Development Tutorial'));
