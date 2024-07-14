function longestCommonStart(arr) {
    if (arr.length === 0) return '';
    let prefix = arr[0];
    for (let i = 1; i < arr.length; i++) {
        while (arr[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix === '') return '';
        }
    }
    return prefix;
}

console.log(longestCommonStart(['go', 'google', 'goose']));
console.log(longestCommonStart(['cat', 'car', 'candle']));
console.log(longestCommonStart(['dog', 'fish', 'horse']));
