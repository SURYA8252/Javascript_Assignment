function capitalizeWords(str) {
    return str.replace(/\b\w/g, function (chr) {
        return chr.toUpperCase();
    });
}

// Example usage:
console.log(capitalizeWords('js string exercises')); // 'Js String Exercises'
