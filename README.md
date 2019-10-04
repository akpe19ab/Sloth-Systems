# Sloth.Food.Systems
# Opgavebeskrivelse til projekt: 

You’ll have to hand in a list of requirements, a description and a class diagram of your idea to a system that you wish to build. 

The description should in text clearly state what you wish to build and the requirements should be done in use cases (vi skal ikke lave use-cases). Furthermore, you should analyze which program structures you would need in order to build the system.

---------------------------------------------------------------------------------------------------------------------------

* Beskrivelse af administrative system (analyse)
* Liste med krav til systemet (punktform)
* UML/Klasse diagram over system (design)

---------------------------------------------------------------------------------------------------------------------------

# 1. Beskrivelse af idé:

Vi ønsker at udvikle et administrativt system, der gør det muligt for en kunde at bestille mad fra et menukort online; enten til levering eller til afhentning så kunden evt. slipper for at stå i kø og bestille via disken. Systemet indeholder flere forskellige typer af produkter, herunder: Mad, drikkevarer, tilbehør og levering. Her skal systemet give brugeren mulighed for at kunne tilvælge og fravælge ovennævnte produkttyper samt ændre mængden af disse hvis ønsket.

Systemet skal kunne genkende de forskellige produkter ud fra en given unik produktkode og derved kunne genkende prisen for hvert enkelte produkt. Systemet skal herefter kunne udregne en totalpris for enhver vilkårlig sammensætning af produkttyper og antal. Denne totalpris samles i en ordre. (Derudover har vi overvejelser omhandlende, at implementere en mulig rabatudløsning, hvis en af råvarene i et produkt ellere flere, nærmer sig udløbsdatoen så man kan bekæmpe madspild. Her vil der tages en procentuel rabat af produktet.)

Ordreoversigten skal give brugeren overblik over hvilke produkter, der er tilvalgt, totalpris og antal af hvert valgt produkt. Systemet vil give brugeren muligheden for at kunne fjerne produkter og ændre i antallet af valgte produkter. Systemet skal derfor ved ændringer i disse parametre udregne en ny totalpris for ordren og fremvise dette i ordreoversigten. Systemet skal derudover også kunne give brugeren mulighed for at kunne udfylde evt. kommentarer til ordren via et kommentarfelt.

Når brugeren har godkendt sin ordreoversigt, vil brugeren udfylde en oprettelsesformular, som dækker over: navn, email og tlf.nr. Disse oplysninger vil blive gemt i systemet, og kan bruges til at lave en ordrebekræftelse.

Efter oprettelse i systemet, vil brugeren blive ført videre til betalingssiden, hvor der skal angives betalingsoplysninger, herunder: kortnummer, udløbsdato på kort, CVC.nr. og kortholders navn. Her vil brugeren have mulighed for at godkende transaktionen og vil derefter modtage en ordrebekræftelse på ordren. Her vil stå alle valgte produkter, totalpris samt relevante brugeroplysninger.

---------------------------------------------------------------------------------------------------------------------------

# 2. Kravspecifikationer til system:

1. Forside med menu-kort over produkter:
  * Brugeren skal kunne tilføje og fravælge produkter i sin kurv.
  * Brugeren skal kunne ændre antal af produkter i sin kurv.
  * Brugeren skal kunne vælge leveringsform: pick-up eller levering.
  * Hvis brugeren ønsker levering; skal brugeren tilføje leveringsadresse og der vil tilføjes et leveringsgebyr til ordren.


2. Ny side med ordreoversigt (Status:basket):
  * Overblik over valgte produkter.
  * Overblik over pris på produkter (og evt. leveringsgebyr)
  * Skal kunne fjerne produkter.
  * Skal kunne ændre antal af ønskede produkter.
  * Skal kunne tilføje kort kommentar til ordre.


3. Pop-up med brugerinformation:
  * Brugeren skal indtaste hhv. navn, email og telefonnummer.


4. Betalingsside:
  * Brugeren skal kunne indtaste kortnummer, udløbsdato på kort, CVC samt kortholderens navn.


5. Ordren:
  * Brugeren vil modtage en besked om bekræftelse på ordre, hvor der vil blive informeret om valgte produkter, samlet pris, leveringsmetode og navn.

---------------------------------------------------------------------------------------------------------------------------

# 3. UML/Klasse-diagram over administrative system (Sammenhængen i systemet?):

![UML klasse diagram](/UML_new.png)
