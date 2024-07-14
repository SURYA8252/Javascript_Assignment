function binarySearch(array, target) {
    function search(low, high) {
        if (low > high) {
            return -1;
        }
        var mid = Math.floor((low + high) / 2);
        if (array[mid] === target) {
            return mid;
        } else if (array[mid] > target) {
            return search(low, mid - 1);
        } else {
            return search(mid + 1, high);
        }
    }
    return search(0, array.length - 1);
}

console.log(binarySearch([0, 1, 2, 3, 4, 5, 6], 5)); // Output: 5
