function daysUntilChristmas() {
    const today = new Date();
    const year = today.getFullYear();
    const nextChristmas = new Date(year, 11, 25); // 11 is December

    if (today > nextChristmas) {
        nextChristmas.setFullYear(year + 1);
    }

    const oneDay = 1000 * 60 * 60 * 24;
    const daysLeft = Math.ceil((nextChristmas.getTime() - today.getTime()) / oneDay);
    console.log(`${daysLeft} days left until next Christmas!`);
}

daysUntilChristmas();
