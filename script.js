function celsiusToFahrenheit(celsius) {
    return (celsius * 1.8) + 32;
}
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) / 1.8;
}

function convertCelsiusToFahrenheit() {
    let input = document.querySelector('.userInput');
    let userInput = input.value;
    let error = document.querySelector('.error');
    let HTMRESULT = document.querySelector('.result');

    if (userInput === "" || isNaN(userInput)) {
        error.style.display = 'block';
        error.innerText = `Please enter a valid number!`;
        HTMRESULT.style.display = 'none';
        return;
    }
    error.style.display = 'none'
    HTMRESULT.style.display = 'block'
    
    let result = celsiusToFahrenheit(parseFloat(userInput));
    document.querySelector('.result').innerText = `Fahrenheit: ${result.toFixed(2)}`;

    input.value = ""
}
function convertFahrenheitToCelsius() {
    let input = document.querySelector('.userInput');
    let userInput = input.value;
    let error = document.querySelector('.error')
    let HTMRESULT = document.querySelector('.result');

    if (userInput === "" || isNaN(userInput)) {
        error.style.display = 'block';
        error.innerText = `Please enter a valid number!`;
        HTMRESULT.style.display = 'none';
        return;
    }
    error.style.display = 'none'
    HTMRESULT.style.display = 'block'

    let result = fahrenheitToCelsius(parseFloat(userInput));
    document.querySelector('.result').innerText = `Celsius: ${result.toFixed(2)}`

    input.value = ""
}
