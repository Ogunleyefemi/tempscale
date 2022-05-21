//converting celcius to fahrenhiet
// (celcius * 1.8) + 32
let C = parseInt(prompt("VALUE IN CELCIUS"));
function toFahren(){
    let toFahren= (C * 1.8) + 32;
    return toFahren;
}
document.write(toFahren());