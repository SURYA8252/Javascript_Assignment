function protectEmail(email) {
    let avg, split, part1, part2;
    split = email.split("@");
    part1 = split[0];
    part2 = split[1];
    avg = part1.length / 2;
    part1 = part1.substring(0, (part1.length - avg));
    return part1 + "...@" + part2;
}

// Example usage:
console.log(protectEmail("robin_singh@example.com")); // 'robin...@example.com'
