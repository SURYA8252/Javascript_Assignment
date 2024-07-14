function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    var middle = Math.floor(arr.length / 2);
    var left = mergeSort(arr.slice(0, middle));
    var right = mergeSort(arr.slice(middle));
    return merge(left, right);
}

function merge(left, right) {
    var result = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    return result.concat(left, right);
}

console.log(mergeSort([34, 7, 23, 32, 5, 62])); // Output: [5, 7, 23, 32, 34, 62]
