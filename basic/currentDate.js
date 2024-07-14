function getCurrentDate() {
    const today = new Date();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const yyyy = today.getFullYear();

    console.log(`${mm}-${dd}-${yyyy}, ${mm}/${dd}/${yyyy}, ${dd}-${mm}-${yyyy}, ${dd}/${mm}/${yyyy}`);
}

getCurrentDate();