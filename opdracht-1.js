// Opdracht 1: Array methoden ---------------


// Opdracht 1A: Gebruik een array-methode om een array te maken met alle tv-type namen. Log de uitkomst in de console.
// Stap 1: Maak een variable aan genaamd typeName waar de output in opgevangen wordt
// Stap 2: Schrijf een .map() methode waarin op type wordt gefilterd
// Stap 3: Vergeet de return niet
// Stap 4: Log de uitkomst in de console

const typeNumber = inventory.map((tv) => {
    return tv.type;
    }
)
console.log(typeNumber);

// Opdracht 1b: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn. Log de uitkomst in de console.
// Stap 1: Maak een variabel aan genaamd soldOut om output in op te vangen.
// Stap 2: schrijf een .filter methode
// Stap 3: Vergeet de return niet
// Stap 4: Log uitkomst in de console

const soldOut = inventory.filter((tv) => {
    if (tv.originalStock - tv.sold === 0)
        return [];
    }
)
console.log(soldOut);

// Opdracht 1c: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken. Log de uitkomst in de console.
// Stap 1: Maak een variabel aan genaamd tvWithAmbi om output in op te vangen.
// Stap 2: schrijf een .filter methode
// Stap 3: Vergeet de return niet
// Stap 4: Log uitkomst in de console

const tvWithAmbi = inventory.filter((tv) => {
    if (tv.options.ambiLight)
        return [];
    }
)
console.log(tvWithAmbi);

// Opdracht 1d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert. Log de uitkomst in de console.
// Stap 1: Schrijf een .sort methode op basis van prijs van laag naar hoog
// Stap 2: return hem
// Stap 3: log
// Stap 4:

function sortTvs(tvs) {
    tvs.sort((a, b) => a.price - b.price);
}

// Lange versie
// function sortTvs(tvs) {
//   return tvs.sort((a, b) => {
//     if (a.price - b.price > 0) {
//       return 1;
//     }
//
//     if (a.price - b.price < 0) {
//       return -1;
//     }
//
//     return 0;
//   });
// }