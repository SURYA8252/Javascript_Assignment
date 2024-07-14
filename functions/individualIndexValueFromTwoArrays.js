function sumArrays(arr1, arr2) {
    const result = [];
    const maxLength = Math.max(arr1.length, arr2.length);
    for (let i = 0; i < maxLength; i++) {
        result.push((arr1[i] || 0) + (arr2[i] || 0));
    }
    return result;
}

console.log(sumArrays([1, 2, 3], [4, 5, 6]));
console.log(sumArrays([1, 2, 3, 7], [4, 5, 6]));
