function uncamelize(str, separator) {
    if (typeof separator == 'undefined') {
        separator = " ";
    }
    return str.replace(/[A-Z]/g, function (letter) {
        return separator + letter.toLowerCase();
    });
}

// Example usage:
console.log(uncamelize('helloWorld')); // 'hello world'
console.log(uncamelize('helloWorld', '-')); // 'hello-world'
