function range(x, y) {
    if (y - x === 2) {
        return [x + 1];
    } else {
        var list = range(x, y - 1);
        list.push(y - 1);
        return list;
    }
}

console.log(range(2, 9)); // Output: [3, 4, 5, 6, 7, 8]
