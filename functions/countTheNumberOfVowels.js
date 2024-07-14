function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if (vowels.indexOf(char) !== -1) {
            count++;
        }
    }
    return count;
}

console.log(countVowels('The quick brown fox'));
