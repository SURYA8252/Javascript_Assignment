function sortNumbers(a, b, c) {
    let numbers = [a, b, c];
    numbers.sort((x, y) => y - x);
    alert(numbers.join(', '));
}

// Example usage:
sortNumbers(0, -1, 4);
