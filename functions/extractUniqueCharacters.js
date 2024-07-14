function uniqueChars(str) {
    const unique = [];
    for (let char of str) {
        if (!unique.includes(char)) {
            unique.push(char);
        }
    }
    return unique.join('');
}

console.log(uniqueChars('thequickbrownfoxjumpsoverthelazydog'));
