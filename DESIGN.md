#**Design document**
Stijn Robben
<br>
10559558
<br>
<br>
In dit document wordt een meer technische blik geworpen op de welvaart-visualisatie voordat er daadwerkgelijk gecodeerd wordt. De visualisatie wordt in delen opgedeeld en van elk deel van de visualisatie wordt apart besproken hoe deze geimplementeerd gaat worden. 
<br>
<br>
Opmaak van de top-page sectie: 
<br>
![](doc/Toppage_text.JPG)
<br>
In dit simpele deel van de visualisatie opmaak zal te titel te zien zijn met daaronder een korte beschrijven van de visualisatie en uitleg over de motivatie voor het maken van de visualisaties. Grote kans dat deze text nog gaande weg zal worden aangepast. 
<br>
<br>
Opmaak van de visualisatie zelf:
<br>
![](doc/Visualisation_sketch2.JPG)
<br>
Dit is het deel van de visualisatie waar het uiteindelijk om zal draaien. Dit stuk bestaat uit 3 delen die in de afbeelding aangegeven zijn met A,B en C. 
<br>
###### Uitleg visualisatie A
<br>
Dit is de interactieve wereldkaart. Deze zal dusdanig interactief zijn dat de gebruiker op de landen van de wereldkaart kan klikken en vervolgens de visualisaties van B en C kan zien van dat land. In visualisatie A zijn de landen gekleurd aan de hand van hun GDP-waarde, zo kan de gebruiker zich makkelijk orienteren welke landen eventueel interessant zouden zijn om te onderzoeken. Voor deze visualisatie zal gebruik worden gemaakt van een standaard kaart zoals eerder is gebruikt in de dataprocessing opdrachten (http://datamaps.github.com/scripts/datamaps-all.js). Belangrijk bij dit deel is dat bij zo'n "on click event" de andere visualisaties data weergeven van juist dit specifieke land. Er zal dus een code moeten worden meegegeven aan visualisatie B en C die aangeeft om welke data het gaat, hiervoor zal de landcode van elk land worden gebruikt. 
<br>
###### Uitleg visualisatie B