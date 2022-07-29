console.log('it works')


let steuerjahr = document.getElementById('steuerjahr')
console.log(steuerjahr)

let einkommen = document.getElementById('einkommen')
let kirchensteuer = document.getElementById('kirchensteuer')
let ja = document.getElementById('radio_ja')
let nein = document.getElementById('radio_nein')


function berechnen() {
    console.log(steuerjahr.value) // String 
    console.log(Number(einkommen.value)) // Number
    if (Number(einkommen.value)<= 9744){
        console.log('Fall 1')
    } else if(Number(einkommen.value) >= 9745 &&    (Number(einkommen.value) <= 14753)){
        console.log('Fall 2')
    } else if(Number(einkommen.value) >= 14754 && (Number(einkommen.value) <= 57918)){
        console.log('fall 3')
    } else if(Number(einkommen.value) >= 57919 && (Number(einkommen.value) <= 274912)) {
        console.log('fall 4')
    } else if (Number(einkommen.value) >= 274913){
        console.log('Fall 5')
    }
    
/*  console.log(kirchensteuer.value)
    if (Number(kirchensteuer.value) =){
        console.log(8*100)
    } */


    console.log(ja.checked)
    if (radio_ja.checked){
        console.log('Ja')
        return 1
    }
    
    console.log(nein.checked)
    if (radio_nein.checked){
        console.log('Ja')
        return 2
    }
}