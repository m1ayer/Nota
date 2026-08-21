---
title: Vektor
---
Ein Vektor ist eine geordnete Folge von Zahlen; jede Zahl ist dabei eine Koordinate im "Raum" entlang der entsprechenden Achse (der OX-, OY- oder OZ-Achse).\
Kann sowohl zur Beschreibung der Position im Raum als auch von Geschwindigkeit, Beschleunigung, Kräften und vielem mehr verwendet werden.

> [!faq] Why care?
> In der Formulierung $F = 10 space "N"$ ist uns die Größe der Kraft bekannt, ihre Richtung im Raum jedoch nicht; die vektorielle Formulierung löst dieses Problem, da ein Vektor sowohl durch seine [[#Betrag|Größe]] (Betrag/Norm, Pfeillänge) als auch seine Richtung (das Verhältnis seiner [[#Glossar|Komponenten]]) definiert ist.

![Vektor Definition](assets/vid/VektorDefinition.mp4)

> [!info] Der Vektor als Position im Raum
> Wenn Sie sich schon mal in Minecraft anhand der Koordinaten orientiert haben, indem Sie `f3` gedrückt haben – die drei Werte $(x,y,z)$ stellen die Position des Spielers im Raum dar, wobei ein bestimmter Koordinatenursprung dem Vektor $(0,0,0)$ entspricht. Der Vektor $(-138.5, 73, -258)$ bezeichnet somit eine Position, die vom Koordinatenursprung aus gesehen -138,5 Blöcke entlang der OX-Achse, 73 Blöcke entlang der OY-Achse und -258 Blöcke entlang der OZ-Achse entfernt ist. Grob gesagt: Wenn die OY-Achse in Minecraft die Vertikalachse (Höhe) ist, kann die OX-Achse nach Norden/Süden und die OZ-Achse nach Westen/Osten zeigen (oder umgekehrt).
> <img src="assets/img/minecraft.png">

## Notation
Man schreibt ein Vektor v mit einem Pfeil oben $arrow(v)$ oder als fetter Buchstabe $upright(bold(v))$ (der Buchstabe kann natürlich beliebig sein, nicht nur v; es kann sich um den Kraftvektor $arrow(F)$, den Beschleunigungsvektor $arrow(a)$, den Positionsvektor im Raum $arrow(r)$ usw. handeln).

## Operationen

### Addition
![Vektoraddition](assets/vid/VektorAddition.mp4)

### Multiplikation
![Vektormultiplikation mit einem Skalar](assets/vid/VektorScalMul.mp4)

### Betrag
Betrachten wir den Vektor $(x,y)$ in der zweidimensionalen Ebene.\
Unter dem Betrag bzw. Norm eines Vektors versteht man dessen Länge, d. h. die Länge des Pfeils bzw. der Linie, die den Ursprung $(0,0)$ mit dem Punkt $(x,y)$ verbindet.\
Der Betrag des Vektors wird mit dem einfachen Buchstaben $v$ oder mit senkrechten Strichen an beiden Seiten der Pfeilschreibweise des Vektors $|arrow(v)|$ notiert.\
Da die Koordinatenachsen senkrecht zueinander stehen, handelt es sich um ein rechtwinkliges Dreieck; die Länge des Vektors $(x,y)$ berechnet sich nach dem Satz des Pythagoras als $sqrt(x^2 + y^2)$.\
<img width=300 alt="2d Vektor Betrag" src="assets/img/2dVektorNorm.png">

Das gleiche [gilt auch](https://de.wikipedia.org/wiki/Euklidische_Norm#Reelle_Vektoren_endlicher_Dimension) für 3d Vektoren: $arrow(v) = (x,y,z) => |arrow(v)| = sqrt(x^2 + y^2 + z^2)$.

## Glossar
- **Vektorkomponente** – eine der Zahlen eines Vektors: Für den Vektor (3,4,0) ist die Zahl 3 die X Komponente (entlang der OX-Achse), 4 die Y Komponente und 0 die Z Komponente
- **Skalar** – eine reelle Zahl; verwandt mit dem Wort „skalieren“, da die Multiplikation eines Vektors mit einem Skalar diesen lediglich skaliert, ohne seine Richtung zu ändern – im geometrischen Sinne durch Verlängerung des Vektors (wenn der Skalar > 1 ist), Verkürzung des Vektors (wenn der Skalar < 1 ist) oder durch Skalierung und Drehung in die entgegengesetzte Richtung (wenn der Skalar negativ ist) 
