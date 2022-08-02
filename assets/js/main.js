
let steuerjahr = document.querySelector('#steuerjahr')
let einkommen = document.querySelector('#einkommen')
let kirche = document.querySelector('#kirchensteuer')
let ehegattenSplitting = document.querySelector('#radio_ja')
let ergebnis = document.querySelector('.ergebnis')

// Variablen eindeutig/ ausdrucksstark benennen 

function addChurchTax (income) {  // Argument wird in der berechnen Funktion aufgerufen
    const tax = income * 0.09
    console.log(income + tax)
    return tax
}

function partner (incomeOne, incomeTwo) {  // Argument wird in der berechnen Funktion aufgerufen
    console.log(incomeOne + incomeTwo)
    return (incomeOne + incomeTwo) / 2
}

function writeResultToFild (result, tax, church){ // Argument wird in der berechnen Funktion aufgerufen
    console.log(ergebnis)
    ergebnis.innerHTML = `<p> Einkommen: ${toRightFormat(result-tax-church)} € Steuern: ${toRightFormat(tax)} € Kirche: ${toRightFormat(church)} €</p>`
}

function toRightFormat (number){
    return Number (number.toFixed(2)).toLocaleString()
}

function berechnen() {
    let income = Number(einkommen.value) //let income ist die Zahl, die in dem Input feld steht (.value) // wird oben einmal in Zahl umgewandelt
    console.log(steuerjahr.value) // String 
    console.log(Number(einkommen.value)) // Number
    let tax = 0 // ist in der Aufgabe Est
    let churchTax = 0

    if (income <= 9744){
    } else if(income >= 9745 && (income <= 14753)){
        let y = (income-9744)/10000
        tax = (995.21 * y + 1400) *y
    } else if(income >= 14754 && (income <= 57918)){
        let z = (income-14753)/10000
        tax = (208.85 * z + 2397) *z+950.96
    } else if(income >= 57919 && (income <= 274912)){
        tax = 0.42 * income - 9136.63
    } else if (income >= 274913){
        tax = 0.45 * income - 17374.99
    }

    if (kirche.checked == true){
        console.log('kirchensteuer')
        // einkommen.value = 500
        churchTax = addChurchTax(income) // Argument
        // einkommen.value = 545
    }

    if (ehegattenSplitting.checked) {
        const incomeB = Number(prompt('Bitte Partnergehalt eingeben'))
        income = partner(income, incomeB)
    }

    writeResultToFild(income, tax, churchTax) 
} 
