

let steuerjahr = document.querySelector('#steuerjahr')
let einkommen = document.querySelector('#einkommen')
let kirche = document.querySelector('#kirchensteuer')
let ehegattenSplitting = document.querySelector('#radio_ja')
let ergebnis = document.querySelector('.ergebnis')

// Variablen eindeutig/ ausdrucksstark benennen 

function addChurchTax (income) {  // Argument wird in der berechnen Funktion aufgerufen
    const tax = income * 0.09
    console.log(income + tax)
    return income + tax
}

//addChurchTax(500)
//addChurchTax(1337)

//const eineNummer = 500
//addChurchTax(eineNummer)

function partner (incomeOne, incomeTwo) {  // Argument wird in der berechnen Funktion aufgerufen
    console.log(incomeOne + incomeTwo)
    return (incomeOne + incomeTwo) / 2
}

function writeResultToFild (result){ // Argument wird in der berechnen Funktion aufgerufen
    console.log(ergebnis)
    ergebnis.innerHTML = `<p> ${Math.floor(result)} € </p>`
}

function berechnen() {
    let income = Number(einkommen.value) //let income ist die Zahl, die in dem Input feld steht (.value) // wird oben einmal in Zahl umgewandelt
    console.log(steuerjahr.value) // String 
    console.log(Number(einkommen.value)) // Number
    if (income <= 9744){
        console.log('Fall 1')
    } else if(income >= 9745 && (income <= 14753)){
        console.log('Fall 2')
    } else if(income >= 14754 && (income <= 57918)){
        console.log('fall 3')
    } else if(income >= 57919 && (income <= 274912)){
        console.log('fall 4')
    } else if (income >= 274913){
        console.log('Fall 5')
    }

    if (kirche.checked == true){
        console.log('kirchensteuer')
        // einkommen.value = 500
        income = addChurchTax(income) // Argument
        // einkommen.value = 545
    }

    if (ehegattenSplitting.checked) {
        const incomeB = Number(prompt('Bitte Partnergehalt eingeben'))
        income = partner(income, incomeB)
    }

    writeResultToFild(income) 
} 
