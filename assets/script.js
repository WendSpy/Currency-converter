let dolar = 5.1;

let usdInput = document.querySelector("#usd");
let brlInput = document.querySelector("#brl");

usdInput.addEventListener("keyup", () => {
    convert("usd-to-brl");
});

brlInput.addEventListener("keyup", () => {
    convert("brl-to-usd");
});

usdInput.addEventListener("blur", () => {
    usdInput.value = formatCurrency(usdInput.value);
});

brlInput.addEventListener("blur", () => {
    brlInput.value = formatCurrency(brlInput.value);
});

usdInput.value = "1000.00";
convert("usd-to-brl");

// Funções
function formatCurrency(value){
    let fixedValue = fixValue(value);
    let options = {
        useGrouping: false,
        minimumFractionDigits: 2
    };
    let formatter = new Intl.NumberFormat("pt-BR", options);
    return formatter.format(fixedValue);
}

function fixValue(value){
    let fixedValue = value.replace(",", ".");
    let floatValue = parseFloat(fixedValue);
    if (isNaN(floatValue)) {
        floatValue = 0;
    }
    return floatValue;
}

function convert(type) {
    if (type === "usd-to-brl") {
        // Ajustar o valor
        let fixedValue = fixValue(usdInput.value);
        // Converter o valor 
        let result = fixedValue * dolar;
        result = result.toFixed(2);
        // Mostrar no campo real
        brlInput.value = formatCurrency(result);
    }

    if (type === "brl-to-usd") {
        // Ajustar o valor
        let fixedValue = fixValue(brlInput.value);
        // Converter o valor 
        let result = fixedValue / dolar;
        result = result.toFixed(2);
        // Mostrar no campo USD
        usdInput.value = formatCurrency(result);
    }
}