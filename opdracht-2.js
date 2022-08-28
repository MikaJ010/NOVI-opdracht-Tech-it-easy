// Opdracht 2a: Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.

// Stap 1: Declareer een variable met de naam soldTvs als counter
// Stap 2: Schrijf een for loop die langs alle tv's gaat
// Stap 3: zorg dat de waarde van van sold elke keer wordt opgeteld bij soldTvs
// Stap 4: Log in de console

let soldTvs = 0

for (let i = 0; i <inventory.length ; i++) {
    soldTvs = soldTvs + inventory[i].sold;
}

console.log(soldTvs);

// Opdracht 2b: Zorg ervoor dat dit aantal in het groen wordt weergegeven op de pagina.

// Stap 1: Maak in het HTML document een P met daarin de text: verkocht aantal tv's: En in de paragraph een span met de ID: soldtvsnow.
// Stap 2: Maak een variable waarin je de referentie naar soldtvsnow op slaat. Gbruik hiervoor document.getelemntbyid
// Stap 3: Maak aanpassingen in de text van het gekozen element met .textcontent
// Stap 4: Gebruik de ID om in css de kleur aan te passen naar groen.

const tvssold = document.getElementById('soldtvsnow');
tvssold.textContent = soldTvs;

// Opdracht 2c: Hoeveel tv's heeft Tech It Easy ingekocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.

// Stap 1: Declareer een variable met de naam purchasedTvs als counter
// Stap 2: Herhaal stap 2 en 3 van opdracht 2A met de nieuw gedeclareerde variable: purchasedTvs
// Stap 3: Log in de console


let purchasedTvs = 0

for (let i = 0; i <inventory.length ; i++) {
    purchasedTvs = purchasedTvs + inventory[i].originalStock;
}

console.log(purchasedTvs);

// Opdracht 2d: Zorg ervoor dat dit aantal in het blauw wordt weergegeven op de pagina.

// Stap 1: Maak in het HTML document een P met daarin de text: Ingekocht aantal tv's: En in de paragraph een span met de ID: purchasedtvsnow.
// Stap 2: Maak een variable waarin je de referentie naar purchasedtvsnow op slaat. Gebruik hiervoor document.getelemntbyid
// Stap 3: Maak aanpassingen in de text van het gekozen element met .textcontent
// Stap 4: Gebruik de ID om in css de kleur aan te passen naar blauw.

const tvsPurchased = document.getElementById('purchasedtvsnow');
tvsPurchased.textContent = purchasedTvs;

// Opdracht 2e: Geef in het rood weer hoeveel tv's er nog verkocht moeten worden.

// Stap 1: Maak een variable aan met de naam toSell waarin je het aantal verkochte tvs aftrekt van het aantal ingekochte tvs.
// Stap 2: Gebruik deze variable om de volgende stappen te zetten zoals in bovenstaande opdrachten.

let toSell = purchasedTvs - soldTvs;

const tvsToSell = document.getElementById('tosellnow');
tvsToSell.textContent = toSell;