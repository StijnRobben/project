# Progress
Stijn Robben
<br>
10559558
### dag 1
30-05-16:Idee bedacht, proposal gemaakt en schetsen gemaakt. Morgen beginnen met daily step up, gevolgd door het uitdenken van idee en hopen al de eerste code te schrijven.
<br>
### day 2
31-05-16: Idee meer uitgewerkt en design document gemaakt. Morgen beginnen met het verzamelen van de daadwerkelijke data en het formatteren hiervan.
<br>
### day 3
 01-06-16: Goede feedback gekregen van het stand-up groepje. Ze hebben me aangeraden om toch wel gewoon JQuery te gebruiken bij de wereldkaart. Hun ervaringen met deze notatievorm waren positief dus heb deze switch in het process gemaakt. Verder vandaag het designdocument met deze gedachtegang aangepast en begonnen aan het prototype. Tot nu toe is de interactieve kaart af, met behulp van JQUERY. Morgen zorgen dat ook de barchart en scatterplot in het prototype komen zodat het vrijdag gepresenteerd kan worden. 
<br>
### day 4
Begonnen aan Prototype. Dit ging vrij voorspoedig aangezien de scatterplot en barcharts en hun interactiviteit alleen maar te zien hoeven zijn, nog niet functioneel. Morgen vragen uitdenken die ik wil stellen en veel ideeën opdoen van de andere presentaties.
<br>
### dag 5
Vandaag presentatie gehad. Groepsgenootjes waren positief. Niet veel bruikbare feedback gekregen wat betreft de data indeling. Helaas dit weekend weinig tijd om eraan te werken. Maandag verder met coderen. 
<br>
### dag 6
Vandaag de wereldkaart ingekleurd met aan de hand van de GDP data en de muis-hover-event geimplementeerd. Groot probleem vandaag waren de onclick mouse events. Ik weet nog steeds niet hoe dit moet. Er lijkt een probleem met het gebruik van JQuery ervan, aangezien het wel lukt in andere syntax. Maar in de andere syntax kan bootstrap weer niet gebruikt worden. Ik weet dus niet goed wat ik moet doen. Vanavond Sascha een mail sturen en hopen op snel antwoord. Verder vandaag nog bezig geweest met data verzamelen en heb nu een globaal idee hoe ik deze wil indelen. Alleen er nog niet helemaal zeker over. Morgen hopelijk helemaal klaar met de data en meer duidelijkheid over de onclick mouse event.
<br> 
### dag 7
Veel gewerkt aan de verschillende datasets. Tot nu toe alle data van de Military Security en Telecommunications in een goede structuur gekregen voor de scatterplots. Het is nog niet gelukt om de land-codes door te sturen aan de hand van de click-functie. Ik blijf vast steken met de bootstrap struggle. Hopelijk morgen antwoord van Annabel krijgen, zij heeft ongeveer hetzelfde gedaan. Morgen ook weer verder met de dataset van Corruptie en hopelijk eindelijk te horen krijgen hoe het moet met het doorsturen van de data.
<br>
### dag 8
Nog meer de data aangepast en stukken verder gekomen met de onclick acties van de landen. Inmiddels geeft het de landcodes door waarmee er in de datasets gezocht kan worden. Wel heb ik helaas moeten besluiten om dit niet te doen met bootstrap aangezien dit problemen gaf. Ook een beetje begonnen aan de scatterplot.
<br>
### dag 9
Het in volledig gelukt om door de data te zoeken met behulp van de landcodes. De scatterplot wordt inmiddels aangemaakt bij een klik op een land. Het is echter nog wel moeilijk te zien of er een correlatie is dus er wordt gewerkt aan een trendline. Voor de barchart zit ik inmiddels vast. Ook heb ik vandaag gekozen om de kleureninvulling van de landen aan te passen. Eerst was het rood en nu blauw, dit omdat blauw een neutralere kleur is. 
<br>
### dag 10
Trendline gemaakt om makkelijker een correlatie te zien in de scatterplot. Ook wordt de stip gehighlight wanneer er geklikt wordt op een land. Vandaag feedback gekregen dat er ook beter een on hover functie boven de stippen kan verschijnen. Op deze manier wordt de scatterplot meer onafhankelijker van de worldmap. De barchart is nog steeds een probleem. 
<br>
### dag 11
Gepresenteerd in the Hour of Code. Veel goede feedback gekregen. Met name dat in de scatterplot de x-as het beste in een logartimische schaal kan zijn. Op deze manier is er minder sprake van outliers. Ook kreeg ik gevatte feedback over het inladen van de data en het aanroepen van de functies. Vandaag vooral verder met de barchart aangezien deze nog verre van klaar is. Dit is inmiddels een stress puntje aan het worden aangezien er nog steeds geen vooruitgang is. Wel veel vooruitgang geboekt met de scatterplot. 
<br>
### dag 12
Vandaag veel opgeschoten. Het is gelukt om via de index het geklikte land weer te geven in de barchart en door middel van een formule kunnen ook de 5 landen die een lager GDP hebben dan het geklikte land, en de 5 landen met een hoger GDP weergegeven worden in de barchart. Ook ben ik al aan de slag gegaan met het meegeven van verschillende argumenten aan de functies. Data loopt wel dusdanig uiteen dat het lastig gaat worden om beide visualisaties door middel van 1 functie te maken. Ook moet ik meer aan de slag met m'n data, nameljk het GDP per hoofd in plaats van het markt GDP. Dit bleek een betere maatstaaf voor welvarende landen. 
<br>
### dag 13
Grotendeels bezig geweest met het werkend krijgen van de verschillende buttons. Een groot struikel punt waren de verschillende groten van de datasets. Het was belangrijk om te zorgen dat de yas soms logaritmische en soms linear gemaakt werden. Ook moest de y as alleen op de grootste waarde van de mini dataset van de barchart gemaakt worden. Omdat anders soms de verschillen tussen landen te groot zijn. Vanavond nog even de data voor de corruptie op orde krijgen en morgen nog even snel voor de presentatie zorgen dat ook die knop werkt. Dan dit weekend me ontfermen over de knoppen die de barchart verwisselen. 
<br>
### dag 14
Hard aan de slag gegaan met de legenda. Deze helaas in de html moeten schrijven omdat het niet lukte om hier een juiste functie voor te maken. Voordeel is dat de legende er nu wel piekfijn uitziet en makkelijk te interpreteren is. Deze is inmiddels af. Straks presenteren
<br>
### dag 15
Lang gezeten aan de trendline bug. Deze bleef te veel doorstijgen en dalen waardoor hij buiten de assen kwam. Dit is inmiddel beter. Ook alle landen die geen extra data gaven aangepast en morgen verder met de checklist van bugs. Waarschijnlijk zal ik me het eerst ontfermen over de nieuwe button die ik wil meegeven. De random button voegt tot dusver niet veel toe. 
<br>
### dag 16
Vandaag veel voor elkaar gekregen. Ik heb ervoor gezorgd dat grote getallen goed in de tooltip passen. Ook ontstaan er nu titels boven de barcharts, namelijk die van het geklikte land en de eigenschap die er in de grafieken weergegeven wordt. Tevens een titel toegevoegd aan de legenda. Ook zijn de knoppen nu mooier en aangepast. Er is echter nu wel weer een probleem met het positioneren van het 2 grafieken. Morgen of vanavond proberen om dit te fixen. Ook komt er nu een tekst te staan met "Sorry, no data available of this country" wanneer er geen data van een land is. Eerst was dit een irritante pop-up. Er zijn nog genoeg dingen die ik moet doen. De random knop moet bijvoorbeeld veel beter en er moet nog wat verklarende tekst als introductie. Tot slot nog veel bezig geweest met wat design van m'n visualisatie. Morgen zorgen dat m'n data niet meer hardcoded hoeft te staan in m'n map-script. Ook moeten de tooltips nog een beetje anders bij verschillende datasets. En het belangrijkste is dat ik morgen en overmorgen nog alles goed gepositioneerd krijg in het document. Vanavond beginnen aan het verslag. 
<br>
### dag 17
Een dropdown menu gemaakt van de knop, waarmee je de verschillende eigenschappen kan selecteren. Ook veel gespeeld met het positioneren van de visualisaties en de titels. Daarnaast is de inleidende tekst nu ook veel duidelijker en is er een korte "gebruiksaanwijzing" die het gemakkelijker maakt voor de gebruiker om m'n visualisatie te gebruiken. Ook staan er nu bronnen onder aan de pagina en is het "geen data berichtje" nu een stuk vriendelijker. Tot slot heb ik een functie toegevoegd die ervoor zorgt dat wanneer de gebruiker op een land klikt, de pagina direct naar de scatterplot en de barchart springt. De trendline is nu ook beter, schaalt beter naar de verschillende y-assen. Ook al grotendeels begonnen aan verslag. Morgen nog een paar kleine dingen doen en het verslag afmaken. 
<br>
### dag 18
De laatste bugs eruit gehaald en nog een paar kleine dingen gedaan aan de opmaak. Het verslag was gisteren al voor de helft af. Straks thuis alle problemen noteren waar ik in het proces tegenaan ben gelopen en verwerken in het verslag.
<br>
### dag 19
Klaar met verslag en ingeleverd. Voornamelijk code opgeschoond. Verder geen grote inhoudelijke veranderingen meer. Deze hebben voornamelijk in de eerste 2 weken plaatsgevonden. 





