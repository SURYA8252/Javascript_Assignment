function first(arr, n) {
    if (n == null) {
        return arr[0];
    }
    return arr.slice(0, n);
}

// Example usage:
console.log(first([7, 9, 0, -2]));
console.log(first([], 3));
console.log(first([7, 9, 0, -2], 3));
