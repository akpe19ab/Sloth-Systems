# Sloth-Systems
Kravspecifikation: 
Beskrivelse (analyse)
Liste med krav (design, punktform)
Klasse diagram (design)

#1. Beskrivelse af idé (Analyse = hvad vil vi lave?):#

Vi ønsker at udvikle et administrativt system der indeholder flere forskellige typer af produkter, herunder: mad, drikkevare, tilbehør og levering. Her skal systemet give brugeren mulighed for, at kunne tilvælge og fravælge ovennævnte produkttyper samt ændre mængden af disse hvis ønsket.

Systemet skal kunne genkende de forskellige produkter, ud fra en given unik produktkode og derved kunne genkende prisen for hvert enkelte produkt. Systemet skal herefter kunne udregne en totalpris for enhver vilkårlig sammensætning af produkttyper og antal. Denne totalpris samles i en ordre i bestillingskurven.  NOTE:(Mulig idé: rabatter ud fra råvare der er ved at udløbe)

Bestillingskurven skal give brugeren overblik over hvilke produkter der er tilvalgt, totalpris samt antal af hvert valgte produkt. Systemet skal give brugeren muligheden for at kunne fjerne produkter, ændre i antallet af valgte produkter. Systemet skal derfor ved ændringer i disse parametre udregne en ny totalpris for ordren og fremvise dette i bestillingskurven. Systemet skal derudover også kunne give brugeren mulighed for, at kunne udfylde evt. kommentare til ordren via et kommentarfelt.

Når brugeren har godkendt sin bestillingskurv, vil brugeren udfylde en oprettelsesformular,  som dækker over: navn, email og tlf.nr. Disse oplysninger vil blive gemt i systemet, til senere brug i ordrebekræftelsen.

Efter oprettelse i systemet, vil brugeren blive ført videre til betalingssiden, hvor der skal angives betalingsoplysninger, herunder: kortnummer, udløbsdato på kort, CVC.nr. og kortholders navn. Her vil brugeren have mulighed for at godkende transaktionen og vil derefter modtage en ordrebekræftelse på ordren. Her vil stå alle valgte produkter, totalpris samt brugeroplysninger.


2. Kravspecifikationer til system:

Forside med menu-kort over produkter:
Brugeren skal kunne tilføje og fravælge produkter i sin kurv.
Brugeren skal kunne ændre antal af produkter i sin kurv.
Brugeren skal kunne vælge leveringsform: pick-up eller levering.
Hvis brugeren ønsker levering; skal brugeren tilføje leveringsadresse og der vil tilføjes et leveringsgebyr til ordren.

Ny side med kurv:
Overblik over valgte produkter.
Overblik over pris på produkter (og evt. leveringsgebyr)
Skal kunne fjerne produkter.
Skal kunne ændre antal af ønskede produkter.
Skal kunne tilføje kort kommentar til ordre.

Pop-up med brugerinformation:
 Brugeren skal indtaste hhv. navn, email og telefonnummer.

Betalingsside:
Brugeren skal kunne indtaste kortnummer, udløbsdato på kort, CVC samt kortholderens navn.

Ordrebekræftelse:
Brugeren vil modtage en besked om bekræftelse på ordre, hvor der vil blive informeret om valgte produkter, samlet pris, leveringsmetode og navn.


3. UML/Klasse-diagram over administrative system (Sammenhængen i systemet?):

