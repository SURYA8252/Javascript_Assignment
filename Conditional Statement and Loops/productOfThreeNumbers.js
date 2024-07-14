function findSign(a, b, c) {
    let product = a * b * c;
    if (product > 0) {
        alert("The sign is +");
    } else {
        alert("The sign is -");
    }
}

// Example usage:
findSign(3, -7, 2);
