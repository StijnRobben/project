# **project welvaart**
<br>
Stijn Robben<br>
10559558
<br>
### (korte) Beschrijving visualisatie
In mijn visualisatie test ik of de beweringen die de organisatie "the school of life" maken, kloppen. Ik onderzoek of rijkere landen daadwerkelijk een grotere militare zekerheid hebben, minder corruptie en betere telecommunicatieve middelen bezitten. Dit doe ik door de waarden van deze eigenschappen uiteen te zetten tegen het GDP per capita van een land in een scatterplot. Tevens kunnen landen met een gelijkwaardig GDP met elkaar vergeleken worden in een barchart. Zie afbeelding voor de opmaak van de visualisatie: 
![](doc/finalimage.JPG)<br>

### Technische design
De visualisatie bestaat uit een interactieve wereldkaart, een barchart en een scatterplot. De scatterplot en barschart komen tevoorschijn en geven onderandere de data weer van het land waar de gebruikt in de wereldkaart op heeft geklikt. <br>
wereldkaart:<br>
Wanneer er op een land in de wereldkaart wordt geklikt, wordt er met de landcode en de landnaam gezocht binnen de datasets van de scatterplot en de barchart naar de data van dit land. Van het maken van de scatterplot is een functie gemaakt die wordt aangeroepen wanneer er op een land geklikt wordt. Deze functie krijgt ook een aantal argumenten mee die bepalen met welke dataset (eigenschap) de scatterplot en barcharts gemaakt worden. Wanneer deze eenmaal gemaakt zijn kan de gebruiker met 3 knoppen switchen tussen verschillende eigenschappen. Bij het klikken op deze knoppen worden weer de functies van de 2 visualisaties aangeroepen, waarbij afhankelijk van de eigenschap bepaalde argumenten worden meegegeven. <br>
##### Scatterplot:
Binnen de scatterplot zijn er een aantal specificaties die alleen in bepaalde gevallen op worden geroepen. Bij de datasets van corruptie en telecommunicatie kan de y-as geschaald worden van 0 tot 100, maar bij de dataset van militaire zekerheid moet dit logaritmisch. Met behulp van de argumenten die worden meegegeven bij het aanroepen van een functie wordt door middel van een if-statement gekeken of dit het geval is of niet. Ook moet de cirkel van de scatterplot die hoort bij het land waarop geklikt is gehighlight worden. Dit wordt gedaan bij het maken van de circkels. Wanneer de circel wordt gemaakt met de data die hoort bij de landcode van het geklikte land, krijgt deze een speciale class mee. In de css-file wordt de cirkel met deze class rood gekleurd. Ook is het belangrijk om duidelijk te maken wanneer een geklikt land geen data bezit. Dit wordt gedaan aan de hand van een if-statment die checkt of de data van het geklikte land "null" is. Hiernaast is er nog een tooltip met data van specifieke landen toegevoegd. Tot slot wordt er nog een trendline gemaakt en toegevoegd. <br>
##### Barchart:
De barchart wordt op dezelfde manier opgeroepen van voorheen beschreven. Hierbij wordt de index van het geklikte land bepaald en door middel van een for-loop worden de 5 landen met een lager GDP per capita en de 5 landen met een hoger GDP per capita in een array gezet, en worden met deze tijdelijke dataset de bars gemaakt. Het geklikte land verschijnt in het midden. Hierbij zijn de problemen met de assen, zoals beschreven bij de scatterplot, hetzelfde opgelost. Hiernaast is er nog een tooltip met data van specifieke landen toegevoegd. <br>
##### Knoppen: 
Bij het klikken op de knoppen worden zoals eerder gezegd de functies aangeroepen met specieke argumenten. De random-knop is een dropdown menu waarbij een extra argument wordt mee gegeven. Met dit extra argument wordt d.m.v. een if-statement een functie actief die een aantal random integeres genereerd. Met deze integers worden gebruikt als indexen en alle data met de index van de random-gegenereerde integers worden in een dataset gestopt en hiermee wordt dan een nieuwe barchart gemaakt. <br>
### Problemen tijdens het proces
Tijdens deze maand zijn er veel problemen ophoog gekomen die van te voren niet voorzien waren. Onder andere:
* De data staat nog in z'n geheel in de RichProperties code.
* De y-assen moesten verschillen tussen de verschillende datasets.
* De data moest opvolgorde van GDP geordend zijn voor het maken van een trendlijn (scatterplot).
* De trendline (scatterplot) stopte niet bij het eind van de y-as en x-as, dus liep te ver door.
* De legenda gaf veel problemen met zich mee en wilde niet de juiste waarden bij de juiste kleuren laten zien, dus deze moet gehardcode worden in de hmtl
* In het DESIGN.md document is te zien dat in m'n uiteindelijke versie een grotere kaart staat, hier heb ik voor gekozen zodat er wel op de kleinere landen geklikt kon worden. De kleinere kaart van DESIGN.md had gewoon niet genoeg plek voor alle landen. 
* Soms was de data niet compleet. Sommige landen werden niet gekleurd, dit kwam doordat de landcodes of de landnamen van datamaps niet overeen kwamen met de landcodes en landnamen van de world databank. 
* In de eerste week werd al duidelijk dat bootstrap voor een juiste opmaak Jquery nodig heeft. Het lukte echter niet om met JQeury de landcodes van het geklikte land door te geven aan de functies die de barchart en de scatterplot maakten. Zo kon er uiteraard niet met de data van dat land een grafiek gemaakt worden. Uiteindelijk heb ik er dan ook voor gekozen om bootstrap niet te gebruiken en zelf te zorgen voor de opmaak van mijn visualisatie. 
* Ook bleek halverwege dat het GDP van een land niet per se staat voor de welvarendheid van een land. Na uitgebreid onderzoek op internet bleek het GDP per capita de beste aanduiding voor de welvarendheid van een land. 
* Na de switch naar GDP per capita ontstond een ander probleem, namelijk welke waarden een bepaalde kleuring moesten krijgen. Dit was uiteindelijk opgelost door steeds een verdubbeldende marge te nemen. 
* Toen uiteindelijk het GDP per capita goed geimplementeerd was en de data op orde, bleek de scatterplot voor weinig verduidelijking te zorgen aangezien de stippen allemaal zeer geclusterd waren op een paar outliers na. De trendlijn zorgde wel voor enige duidelijkheid maar het was niet optimaal. Dit probleem was snel verholpen door gebruik te maken van een logaritmische schaal. 
* Ook was er een probleem bij de barchart. De bedoeling is om een barchart te maken met 11 bars. In het midden staat de bar van het geklikte land, de 5 bars links van dit land zijn van de landen die aflopend een steeds iets kleinere GDP per capita hebben. Rechts staan 5 bars van de landen die oplopend steeds iets meer GDP per capita hebben. Dit was snel gemaakt door gebruik te maken van de index van de gelkikte landen (de data was namelijk toch al op volgorde van klein GDP per capita naar groot). Er was echter een probleem bij de uiterste landen. Wanneer er geklikt werd op een van de 5 landen met het laagste of hoogste GDP per capita, kwamen er vaak foutmeldingen. Ik kwam erachter dat dit te maken had met de verschillende grootten van de datasets. Met een simpel if-statement die checkt met welke dataset het te maken heeft, werd er rekening gehouden met de uiterste waarden van deze dataset. 
* Het ogenschijnlijk grootste verschil tussen de uiteindelijke versie van de visualisatie en die uit het DESIGN.md document is dat de 2 dropdown menu's veranderd zijn naar 3 knoppen en een extra feature (de random knop)











