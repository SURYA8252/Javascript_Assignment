function convertTemperature() {
    const celsius = 60;
    const fahrenheit = 45;

    const cToF = (celsius * 9 / 5) + 32;
    const fToC = (fahrenheit - 32) * 5 / 9;

    console.log(`${celsius}°C is ${cToF} °F`);
    console.log(`${fahrenheit}°F is ${fToC} °C`);
}

convertTemperature();
