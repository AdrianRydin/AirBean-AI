## AI seminarium frågor

# 01

Den största skillnaden är strukturen av svaret.
ChatGPT gav ett välstrukturerat svar på stegen samt en sammanfattning av alla steg, den förklarade även vad alla steg innebär.
Aizo gav ett välstrukturerar svar men ställde massor frågor istället för att ge svar på vad alla steg är.

# 02

ChatGPT gav en mer utförlig pseudokod jämfört med Aizo. 
Aizo gav mindre information och ville att man skulle tänka själv.

Pseudokoden under är från ChatGPT.

```

START

    # Initialisering
    kastantal = 0
    nuvarandeMål = 1
    stegeSlutförd = False
    
    # Fortsätt kasta tills hela stegen (1, 2, 3, 4, 5, 6) är klar
    WHILE stegeSlutförd är False
    
        # Kasta tärningen
        kastResultat = kastaTärning()  # Generera ett slumptal mellan 1 och 6
        
        # Öka antalet kast
        kastantal = kastantal + 1
        
        # Kontrollera om rätt tal har kastats
        IF kastResultat == nuvarandeMål THEN
            # Om rätt tal kastades, öka målet till nästa tal i stegen
            nuvarandeMål = nuvarandeMål + 1
        END IF
        
        # Kontrollera om hela stegen är klar (1, 2, 3, 4, 5, 6)
        IF nuvarandeMål > 6 THEN
            stegeSlutförd = True
        END IF
    
    END WHILE
    
    # Skriv ut antalet kast som behövdes för att skapa stegen
    Skriv ut "Stegen slutfördes på " + kastantal + " kast."
    
END

```

# 03

ChatGPT gav en mer detaljerad kod av spelet, samt skrev ut mer information i konsollen, och gav en förklaring på vad koden gjorde.
Aizo gav en mer simpel version av spelet med mycket mindre förklaring på vad alla funktioner gjorde.

Båda versionerna av spelet fungerar.


# 04

När det blir många sidor i projektet så är det svårt att ta med all information i frågan till AI.
AI är bra för att lösa specifika frågor, när man ställer större frågor kan mycket information missas.
När projektet ökar i storlek så blir det svårare att få ett bra svar att ChatGPT eller Aizo.

# 05

Både Aizo och ChatGPT gav en väldigt likadan förklaring på kodstycket, med en detaljerad förklaring samt en sammanfattning.
Aizo och ChatGPT gav en förklaring på alla steg i kodstycket.
Den förklarade alla steg på ett likadant sätt, samt använde likadana ordval.

# 06

De sista två gångerna vi frågade ChatGPT att skriva om koden så gav den samma kod fast med en till kommentar.

ChatGPT lade inte till .promise vid användarnamn eller password, utan lade till .promise på en annan rad istället.
Vår gissning på varför ChatGPT lägger till promise är för att den försöker fixa kod som redan fungerar, samt att ChatGPT har information från några år sedan, så den är inte helt uppdaterad.

# 07

Innan vi anpassade ChatGPT så förklarade den objektivt vad pattern recognition och abstraction är och gav exempel på livs situationer som kan förklaras med de begreppen.
Efter vi anpassade så använde sig ChatGPT sig av exempel inom Front end utveckling och använde mer klartext och lite mindre strukturering.
Den gav även ett kod exempel efter vi anpassade ChatGPT.

# 08

Den största skillnaden är hur detaljerat den svarar. När anpassningen var kvar så skapade den ett python script som löste uppgiften och gav lite förklaringar på vad den gjorde
När vi tog bort anpassningen så förklarade den mycket mer vad allt gjorde samt hur allt fungerade, den använde sig även av Python.
Annars så använde ChatGPT sig av mer komplexa ord efter anpassningen togs bort jämfört med när vi hade anpassningen på.

# 09

Det är okej att fråga AI om man vill ha någonting förklarat, det kan vara hur en funktion fungerar eller ett koncept man har svårt att förstå.
AI är ett bra sätt att lära sig hur vissa funktioner fungerar på ett djupare sätt.

Det är dock inte okej att använda sig av AI för att lösa funktioner utan att skriva någon kod själv, i det fallet så lär man sig ingenting.

# 10

1. Man får kodexempel som använder sig av funktioner som vi inte har lärt oss än, och då är det enkelt att bara klistra in det istället för att lära sig det först.

2. Man får mindre erfarenhet av att skriva koden, ju mer man skriver kod, ju mer lär man sig om det. 

3. Man lär sig inte hur man felsöker kod själv, detta leder till mindre förståelse för hur koden fungerar.

# 11

GitHub CoPilot ger exempel på kod som är enkelt att klistra in i kontextet för projektet.
Även om man klistrar in funktioner som man redan vet hur det fungerar, så leder det till mindre kod som man skriver.
Det är även en risk att man tappar kunnigheten att lösa ett problem själv, och man vänder sig till AI för att lösa dem.

# 12

Att få text som kan användas för paragrafer på hemsidan, då slipper man använda ipsum lorem eller att skriva ut text själv.
Att fråga CoPilot att förklara olika funktioner och concept.

# 13

Det bästa med CoPilot är att den hjälper med att skriva kod, men det är både bra och dåligt.
Det är bra för att det går fortare, men det är dåligt för att man lär sig mindre om hur koden fungerar.
Samt att den hjälper skriva ut fyllningstext i paragrafer.

# 14

Vi anser att AI kommer förmodligen ta en stor del av framtidens jobb inom IT. Men AI hade exempelvis inte kunnat skriva kod, om det inte funnits utvecklare som i sin tur skrivit koden.
AI är under ständig utveckling, och här behövs fortfarande vi människor. Samt att det oftast blir bättre kvalité på kod som kommer från utvecklare, än från AI.

# 15

Återigen, skriver vi inte koden själva, så lär vi oss inte att faktiskt koda. Samt att AI kan göra fel. Lär vi oss inte från grunden, så får vi svårt att både kunna felsöka och koda på egen hand.

# 16

1. Claude.ai

    https://claude.ai/login?returnTo=%2F%3F

    Denna AI är anpassad för bland annat utvecklare. Den är specialiserad på bland annat kod, design och grafik. Claude.ai är ett bra verktyg för att även kunna jämföra med andra AI, exempelvis ChatGPT, för att får fram bra och relevanta svar.

2. Amazon CodeWhisperer

    Denna AI är ett verktyg som du kan applicera i realtid medans du skriver din kod. Den ger automatiskt förslag på kod baserat på din befintliga kod och kommentarer, och bidrar med exempel som du kan använda dig av. Det blir som att koda tillsammans med AI i realtid.

3. Tabnine

    https://www.tabnine.com/

    Denna AI kan du använda dig av direkt i VS Code. Du kan där ställa frågor om kod och funktioner, och den generar både förklaringar och kod, som du direkt kan klistra in i ditt workspace. Den kan även hjälpa till att felsöka och fixa buggar.

# 17

De förslag som vi angett i fråga #16 känner vi skulle kunna vara relevanta längre fram i yrkeslivet, när vi lärt oss mer och blivit mer trygga med kod. Nu i nybörjar-fasen, känner vi att ChatGPT är den AI som generarar bra kod-förslag och förklaringar. Då ChatGPT inte är specialiserad på exempelvis utveckling, så får vi mer generella förslag på att bra grundnivå.
När vi i framtiden jobbar med kod, och dagligen kanske ska skriva tusentals rader kod, då känns framförallt Claude.ai som ett bra verktyg att använda sig av. De andra två exemplen är också relevanta längre fram, då de hjälper till att generera färdig kod, men då gäller det att vi som utvecklare faktiskt förstår den kod som AI ger.