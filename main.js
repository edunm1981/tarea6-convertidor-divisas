const btnDropdown = document.querySelector("button[data-bs-toggle='dropdown']");
const btnMonedaColones = document.querySelector("#moneda-a-colones"); 
const btnColonesMoneda = document.getElementById("colones-a-moneda"); 

const inputValorMoneda = document.getElementById("valor-moneda");
const inputValorColones = document.getElementById("valor-colones");

const liEUR = document.getElementById("eur");  
const liUSD = document.getElementById("usd");  
const liQ = document.getElementById("q"); 
const liMXN = document.getElementById("mxn");
const liLPS = document.getElementById("lps");

const TIPO_CAMBIO_DOLAR_COLONES = 514.26;
const TIPO_CAMBIO_EURO_COLONES = 558.70;
const TIPO_CAMBIO_QUETZAL_COLONES = 68.07;
const TIPO_CAMBIO_MEXICO_COLONES = 425.15;
const TIPO_CAMBIO_HONDURAS_COLONES = 21.44;

let monedaSeleccionada = 'USD';

liEUR.addEventListener('click', () => {
    btnDropdown.innerText = 'Euro';  
    btnMonedaColones.innerText = 'Euros a colones';  
    btnColonesMoneda.innerText = 'Colones a euros';  
    monedaSeleccionada = 'EUR';
});

liUSD.addEventListener('click', () => {
    btnDropdown.innerText = 'Dolar'; 
    btnMonedaColones.innerText = 'Dólares a colones'; 
    btnColonesMoneda.innerText = 'Colones a dólares'; 
    monedaSeleccionada = 'USD';
});

liQ.addEventListener('click', () => {
    btnDropdown.innerText = 'Quetzal'; 
    btnMonedaColones.innerText = 'Quetzales a colones'; 
    btnColonesMoneda.innerText = 'Colones a Quetzales'; 
    monedaSeleccionada = 'Q';
});

liMXN.addEventListener('click', () => {
    btnDropdown.innerText = 'Mexico'; 
    btnMonedaColones.innerText = 'Pesos a colones'; 
    btnColonesMoneda.innerText = 'Colones a Pesos'; 
    monedaSeleccionada = 'MXN';
});

liLPS.addEventListener('click', () => {
    btnDropdown.innerText = 'Honduras'; 
    btnMonedaColones.innerText = 'Lempiras a colones'; 
    btnColonesMoneda.innerText = 'Colones a Lempiras'; 
    monedaSeleccionada = 'LPS';
});


btnMonedaColones.addEventListener('click', () => {
    const valorMoneda = inputValorMoneda.value; 

    if(valorMoneda.length === 0 || parseInt(valorMoneda) < 0){ 
        alert('El valor no es correcto');
        return; 
    }

    const valorMonedaParseado = parseFloat(valorMoneda); 
    
    let result = 0;
    
    switch(monedaSeleccionada){
        case 'USD':
            result = valorMonedaParseado * TIPO_CAMBIO_DOLAR_COLONES;
        break;

        case 'EUR': 
            result = valorMonedaParseado * TIPO_CAMBIO_EURO_COLONES;
        break;

        case 'Q': 
            result = valorMonedaParseado * TIPO_CAMBIO_QUETZAL_COLONES;
        break;

        case 'MXN': 
            result = valorMonedaParseado * TIPO_CAMBIO_MEXICO_COLONES;
        break;

        case 'LPS': 
            result = valorMonedaParseado * TIPO_CAMBIO_HONDURAS_COLONES;
        break;

        default:
            console.error('Moneda no controlada');
            
    }

    inputValorColones.value = result.toFixed(2); 
});

 
btnColonesMoneda.addEventListener('click', () => {
    const colonesValor = inputValorColones.value;

    if (colonesValor.length === 0 || parseInt(colonesValor) < 0) { 
        alert('El valor no es correcto');
        return; 
    }

    const valorColonesParseado = parseInt(colonesValor); 

    let result = 0;

    switch (monedaSeleccionada) {
        case 'USD':
            result = valorColonesParseado / TIPO_CAMBIO_DOLAR_COLONES;  
            break;

        case 'EUR':
            result = valorColonesParseado / TIPO_CAMBIO_EURO_COLONES; 
            break;

        case 'Q':
            result = valorColonesParseado / TIPO_CAMBIO_QUETZAL_COLONES; 
            break;

        case 'MXN':
            result = valorColonesParseado / TIPO_CAMBIO_MEXICO_COLONES;
            break;

        case 'LPS':
            result = valorColonesParseado / TIPO_CAMBIO_HONDURAS_COLONES;
            break;

        default:
            console.error('Moneda no controlada');
    }

    inputValorMoneda.value = result.toFixed(2);
});
