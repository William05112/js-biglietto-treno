//Raccolta dati
const numerochilometri = prompt("Quanti chilometri vuoi percorrere?");
const eta = prompt("Quanti anni hai?");

//Conversione dati in valore numerico
const chilometriconvertiti = parseInt(numerochilometri);
const etaconvertita = parseInt(eta);

//Rappresentazione dati
const km = `${numerochilometri} Km`;

let annieta;
if ( etaconvertita > 1){
    annieta = `${eta} anni`;
}else{
    annieta = `${eta} anno`;
}

let annodinascitauno = 2025 - etaconvertita;
let annodinascitadue = 2025 - etaconvertita - 1;
let annodinascitatre = 2025 - etaconvertita + 1;

console.log(`Hai ${annieta} dunque sei nato ipoteticamente nel ${annodinascitatre}, nel ${annodinascitauno} o nel ${annodinascitadue} non sapendo il mese di nascita.`);




//Calcolo prezzo biglietto
const prezzobase = chilometriconvertiti * 0.21;
const sconto18 = prezzobase * 20 / 100;
const sconto65 = prezzobase * 40 / 100;

let prezzofinale;
if (etaconvertita < 18){
    prezzofinale = prezzobase - sconto18;
    console.log(`Il prezzo finale è di ${prezzofinale.toFixed(2)} euro per ${km} da te scelti grazie ad uno sconto del 20% per i minorenni sul prezzo base di ${prezzobase.toFixed(2)} euro.`);
    
}else if (etaconvertita > 65){
    prezzofinale = prezzobase - sconto65;
    console.log(`Il prezzo finale è di ${prezzofinale.toFixed(2)} euro per ${km} da te scelti grazie ad uno sconto del 40% per gli over 65 sul prezzo base di ${prezzobase.toFixed(2)} euro.`);
    
}
else{
    prezzofinale = prezzobase;
    console.log(`Il prezzo finale è di ${prezzofinale.toFixed(2)} euro per ${km} da te scelti.`);
}

//const prezzofinalestringa = prezzofinale.toFixed(2);

//console.log(`Il prezzo del biglietto calcolato quindi è di ${prezzofinalestringa} euro per ${km} da te scelti.`);









// test calcolo vecchio
// if (etaconvertita < 18){
//     const sconto = prezzobase * 20 / 100;
//     const prezzofinale = prezzobase - sconto;
//     console.log(`Il prezzo del biglietto è di ${prezzofinale} euro`);
// }else if (etaconvertita > 65){ 
//     const sconto = prezzobase * 40 / 100;
//     const prezzofinale = prezzobase - sconto;
//     console.log(`Il prezzo del biglietto è di ${prezzofinale} euro`);
// }else{
//     console.log(`Il prezzo del biglietto è di ${prezzobase} euro`);
// }




