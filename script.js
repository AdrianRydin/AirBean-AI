

// CHATGPT

// Funktion som simulerar ett tärningskast (slumpar ett tal mellan 1 och 6)
function kastaTarning() {
    return Math.floor(Math.random() * 6) + 1;
}

// Huvudfunktionen för spelet
function spelaTarningspel() {
    let kastantal = 0;
    let nuvarandeMål = 1;
    let stegeSlutförd = false;

    console.log("Spelet har startat! Målet är att få en stege (1, 2, 3, 4, 5, 6).");

    // Fortsätt kasta tills stegen (1, 2, 3, 4, 5, 6) är klar
    while (!stegeSlutförd) {
        // Kasta tärningen
        let kastResultat = kastaTarning();
        kastantal++;

        // Logga ut resultatet av varje kast
        console.log("Kast " + kastantal + ": Tärningen visar " + kastResultat);

        // Kontrollera om rätt tal har kastats
        if (kastResultat === nuvarandeMål) {
            console.log("Rätt tal! Stegen nu: " + nuvarandeMål);
            nuvarandeMål++;
        } else {
            console.log("Fel tal. Försök igen.");
        }

        // Kontrollera om hela stegen (1, 2, 3, 4, 5, 6) är klar
        if (nuvarandeMål > 6) {
            stegeSlutförd = true;
            console.log("Stegen slutfördes! Spelet är klart.");
        }
    }

    // Skriv ut resultatet
    console.log("Spelet är klart! Totalt antal kast: " + kastantal);
}

// Starta spelet
spelaTarningspel();





// AIZO


// // Funktion för att simulera ett tärningskast



// function kastaTarning() {
//     return Math.floor(Math.random() * 6) + 1;
// }

// // Variabler för att hålla reda på steget och antalet kast
// let steg = 1;
// let antalKast = 0;

// // Så länge vi inte har nått steg 7 (eftersom vi börjar från 1 till 6)
// while (steg <= 6) {
//     let resultat = kastaTarning();
//     antalKast++;

//     console.log(`Kast ${antalKast}: Tärningen visar ${resultat}`);

//     // Kontrollera om resultatet är det vi behöver för det aktuella steget
//     if (resultat === steg) {
//         console.log(`Steg ${steg} uppnått! 🎉`);
//         steg++;
//     }
// }

// console.log(`Antal kast totalt: ${antalKast}`);