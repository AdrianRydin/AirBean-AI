# AirBean-AI
Gruppuppgift inom "Introduktion till programmering och datalogiskt tänkande"

Gruppmedlemmar:
Adrian
Obada
Amanda

Länk till FigJam:
https://www.figma.com/board/dL9VwMqN4zIIsCyGdNm2YV/Airbean?node-id=0-1&t=lvN4OQS5liaj91qL-1



Vi skapade 3 större avdelningar av tjänsten Airbean, Produktkatalog, Kundhantering och Beställning.



## Decomposition

# Produktkatalog:

Vi bestämde att det bara finns 1 stor avdelning som kan göras, detta är Produktinformation.
Sedan delade vi upp den i 3 olika delar, Pris Namn och Beskrivning av kaffet.
Samt att vi delade upp Beskrivning av kaffet till två delar, Ursprung och Vision.

# Kundhantering

Vi delade upp kundhantering i 3 stycken undersektioner, Gäst, Inloggning och Reggistrering.
Vi valde att göra en egen undersektiion för gäster tack vare att hanteringen av data samt leveransinformation är annorlunda jämt emot om man är inloggad.
Inloggning sektionen är uppdelad i 5 undersektioner, Glömt lösenord, Order historik, Konto uppgifter, Validering och Lösenordhantering.

Vi bestämde att ha glömt lösenord som en egen del tack vare att den har en annorlunda funktion jämfört med det andra i Inloggning.
Sedan gjorde vi en undersektion till Glömt lösenord som är "Skicka e-post länk till lösenord återställning".

Sedan har vi order historik. Vi bestämde att order historiken behövs sparas hos medlemskonto.
Order historik har en undersektion som är "Beställningsstatus" där man kan se vilken leverans som blev levererad samt vilka ordrar som inte blev leverarade.
Efter det har vi Konto uppgifter, där adress, telefonnummer osv sparas på kontot.
Sedan har vi Validering av login. Där det kollas om man skrev in fel tecken.
Till sist har vi Lösenordshantering, vilket kollar med databasen om man skrev in rätt lösenord eller inte.

Den sista undersektionen av Kundhantering är Registrering, vilket är uppdelat i 3 stycken undersektioner, Spara inlogg som ny medlem, Validering och Lösenordhantering.

Spara inlogg sm ny medlem skickar inloggningsuppgifterna till databasen som sparar uppgifterna.
Validering kollar om alla uppgifter är giltiga.
Lösenordshantering ser till att lösenordet sparas i databasen korrekt.

# Beställning

Beställning är uppdelat i 3 stycken huvudsakliga sektioner, Varukorg, Kassa och Leverans

Varukorg är uppdelad i 2 stycken underrubriker, Hantering av varor och Prisberäkning.
Hantering av varor har två funktioner, ta bort varor från varukorgen, och att lägga till saker i varukorgen.
Prisberäkning räknar ut priset på produkterna och lägger till moms.

Den största sektionen i Beställning är Kassa, vilket är uppdelad i 3 stycken underrubriker, Rabattkod, Betalningsalternativ och Prisberäkning.
Rabattkod ger kunden en chans att välja ett presentkort eller om det finns en kampanj som pågår.
Betalningsalternativ ger kunden val på hur de vill betala, Klarna, Swiish, kort eller presentkort.
Prisberäkning räknar ut det totala priset på beställningen, den har hänsyn till Rabattkod, Moms, Produktpris och Leveranspris.

Sen sista sektionen av Beställning är Leverans, vilket är uppdelad i 2 underrubriker, Leveranstid och Leveransstatus.
Tack vare att uppgiften tillger att vi inte ska ta hänsyn till leveransen av beställningen, så behövs bara 2 funktioner, hur långt det tar tills beställningen är framme, samt om den är levererad eller inte.



## Pattern-recognition

Då vi började dela upp projektet i flera delar och strukturerade upp dessa delar, så hittade vi flera återkommande mönster och likheter som är centrala för att skapa en smidig upplevelse för kunderna. Vi har identifierat olika mönster för att göra processen smidig och logisk, så att Airbeans kunder lätt kan förstå hur appen fungerar.
 
Under Kundhantering så har vi bland annat validering av konto. Både när det kommer till att registrera konto och även inloggning. Detta för att se till att det är riktiga konton och personer som använder sig utav Airbean. Att logga in blir en återkommande mönster för användarna. Syftet med valideringen är också för att kunderna ska kunna lita på appen och att den känns säker.

Beställning är också en återkommande del. Det är något som användarna gör varje gång de använder sig av Airbean. Även när det kommer till att läsa på om produkter och lägga till dessa i sin varukorg. Detta flöde är konsekvent, och det gör att kunderna enkelt kan lära sig hur sidan fungerar.
Betalningsprocessen blir också ett återkommande mönster. Användarna väljer hur de vil betala och kan välja olika betalningsalternativ varje gång de genomför en beställning. 

Då processen att välja kaffe och genomföra beställningen fungerar likadant och har ett återkommande mönster, gör detta att kunderna känner igen sig och uupplevelsen blir så enkel som möjligt. Ju smidigare det är, destor större chans är det att kunderna återkommer och väljer att handla igen. Det ska vara enkelt att navigera sig i appen, oavsett om man är ny medlem, eller beställt förut. Tack vare ett konsekvent flöde och upprepande mönster, blir Airbean mer enkel, tilltalande och användarvänlig för deras kunder.



## Abstraction

Vi valde att göra ett relativt enkelt diagram för att förklara processen. Vi valde att istället för att gå in väldigt djupt och komplext i varje funktion så valde vi att generalisera det.

Vi bestämde att bara ta med de relevanta funktionerna som behövs kodas.
Airbean är en väldigt enkel tjänst, och vi bestämde att det är ingen anledning att göra den mer komplex.
Ju enklare tjänsten är, ju enklare är det för kunden att lära sig tjänsten och snabbt göra en beställning.



## Algorithm design

Vi valde att det första man ser när man går in på tjänsten är inloggningsidan, där man antingen kan välja att logga in, registrera sig eller fortsätta som gäst.
Efter inloggningsidan kommer man till Produktöversikt, där man kan välja en produkt, läsa om vad det är, och antingen gå tillbaka till Produktöversikt eller lägga till varan i kundvagnen.
Efter man har lagt till en produkt i kundvagnen så kan man välja om man vill köpa mer eller inte, om man vill köpa mer, kommer man tillbaka till produktöversikten, och om man inte vill köpa mer så fortsätter man till varukorgen.
I kundvagnen kan man välja om man vill lägga till eller ta bort varorna man har lagt till.
Efter det kommer man till kassan, om man är inloggad som medlem så kommer man automatiskt till betalningalternativen, annars så får man välja om man vill registrerar sig eller om man vill fortsätta som gäst.
Om man fortsätter som gäst så får man skriva in sin leveransinformation och därefter kommer man till betalningsalternativ.
Efter man har valt hur man vill betala så får man en betalningsbekräftelse.