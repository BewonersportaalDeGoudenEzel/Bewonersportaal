// Schoonmaakschema Huize Polanen — aangeleverd door de bewonerscommissie (bron: werkschema
// KosmanGunter schoonmaakbedrijf, opdrachtgever Sint Agnes Woningstichting).
// Elke taak heeft een lijst weeknummers (1-52) waarin die dat jaar wordt uitgevoerd.
// Werkzaamheden vinden plaats op dinsdag en donderdag.
var SCHOONMAAK_SCHEMA = [
  { locatie: "Tegelvloer beganegrond entree", taak: "Zuigen en moppen", weken: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52] },
  { locatie: "Toiletgroep beganegrond", taak: "Geheel schoonmaken", weken: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52] },
  { locatie: "Recreatiezaal", taak: "dweilen/ stofzuigen", weken: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52] },
  { locatie: "Recreatiezaal", taak: "Tafels en stoelen schoonmaken", weken: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52] },
  { locatie: "Recreatiezaal", taak: "Bar, spoelbak en kastjes schoonmaken", weken: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52] },
  { locatie: "Recreatiezaal", taak: "Randen en richels stofvrij houden", weken: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52] },
  { locatie: "Lifthal beganegrond tegelvloer", taak: "Zuigen en moppen", weken: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52] },
  { locatie: "Brievenbussen/Postboxen", taak: "Binnenzijde afnemen", weken: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26] },
  { locatie: "Bellenpaneel", taak: "Buitenzijde nat reinigen", weken: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52] },
  { locatie: "Brievenbussen/Postboxen", taak: "Buiten nat reinigen", weken: [2,4,6,8,10,12,14,16,18,20,22,24,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52] },
  { locatie: "Entree deur", taak: "Binnen en buitenzijde wassen", weken: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52] },
  { locatie: "Glas centrale ingang tussenpui", taak: "Weerszijden wassen", weken: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52] },
  { locatie: "Gangen etages", taak: "Dweilen / Stofzuigen", weken: [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,51] },
  { locatie: "Gangen etages randen,richels en sep.glas", taak: "Stofvrijhouden, waar nodig wassen", weken: [2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52] },
  { locatie: "Boosterruimte", taak: "Vloeren vegen, wanden en plafonds ragen", weken: [2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52] },
  { locatie: "Trappenhuis en etages", taak: "traptreden en bordessen vegen en moppen", weken: [1,5,9,13,17,21,25,27,29,31,33,35,37,39,41,43,45,47,49,51] },
  { locatie: "Liftcabine , vloer, paneel en wanden", taak: "Geheel schoonmaken", weken: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52] },
  { locatie: "Liftdeuren etages 1 t/m 10", taak: "Afnemen/ vlekverwijderen", weken: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52] },
  { locatie: "Vloer noodtrappenhuis", taak: "vegen en vlekverwijderen", weken: [6,14,23,32,40,49] },
  { locatie: "Fietsenstalling", taak: "vegen en vlekverwijderen", weken: [6,14,23,32,40,49] },
  { locatie: "Glas centrale ingang", taak: "Binnen en buitenzijde wassen", weken: [7,15,24,33,41,50] },
  { locatie: "Glas recreatiezaal", taak: "Binnen en buitenzijde wassen", weken: [7,24,33,50] },
  { locatie: "Kozijnen noodtrappenhuis", taak: "Binnen en buitenzijde wassen", weken: [11,21,37,47] },
  { locatie: "Kozijnen opslag bewonerscommissie", taak: "Binnen en buitenzijde wassen", weken: [7,24,33,50] },
  { locatie: "Ramen Fietsenstalling,Boosterruimte", taak: "Binnen en buitenzijde wassen", weken: [7,24,33,50] },
  { locatie: "Bibliotheek", taak: "Ramen binnen en buitenzijde wassen", weken: [11,21,37,47] },
  { locatie: "Ramen dakopbouw", taak: "Binnen en buitenzijde wassen", weken: [26] },
  { locatie: "Gangen,trappenhuizen en logeerkamers", taak: "Ramen binnen en buitenzijde wassen", weken: [11,21,37,47] },
];
