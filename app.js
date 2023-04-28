// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
function financial(x) {
    return Number(x.toFixed(4));
    //return Number.parseFloat(x).toFixed(4);
  }
const fromEuroToDollar = (valueInEuro) => {
    //convertimos el valor a dolares
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    //retornamos el valor
    return valueInDollar;
}
const fromDollarToEuro = (valueInDollar) => {
    let valueInEuro = valueInDollar / oneEuroIs.USD;
    return valueInEuro
}
const fromDollarToYen = (valueInDollar) => {
    let valueInEuro = fromDollarToEuro(valueInDollar);
    let valueInYen = valueInEuro * oneEuroIs.JPY;
    return financial(valueInYen)
}
const fromYenToEuro = (valueInYen) => {
    let valueInEuro = valueInYen / oneEuroIs.JPY;
    return valueInEuro;
}
const fromYenToPound = (valueInYen) => {
    let valueInEuro = fromYenToEuro(valueInYen);
    let valueInPound = valueInEuro * oneEuroIs.GBP;
    return financial(valueInPound)
}
console.log(fromYenToPound(3.5));

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };