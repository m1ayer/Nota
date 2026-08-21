## Allgemeine Form
$$
s(t) = a/2 t^2 + v_0 t + s_0
$$
ist eine quadratische Gleichung, wobei:
- $s_0$ - Ausgangsstrecke
- $v_0$ - konstante Geschwindigkeit
- $a$ - **konstante** (!) Beschleunigung
- $s(t)$ - Strecke, die in der Zeit $t$ zurückgelegt wird


<!-- <meta name=viewport content="width=device-width,initial-scale=1">   -->
<!-- <meta charset="utf-8"/> -->
<!-- <script src="https://www.geogebra.org/apps/deployggb.js"></script> -->
<!-- <div id="ggb-element"></div> -->
<!-- <script> -->
<!--     var params = { -->
<!--             "material_id": "k8fnjd4n", -->
<!--             "appName": "graphing",  -->
<!--             "width": 630,  -->
<!--             "height": 400,  -->
<!--             "showToolBar": false,  -->
<!--             "showAlgebraInput": false,  -->
<!--             "showMenuBar": false, -->
<!--             "showFullscreenButton": true, -->
<!--             }; -->
<!--     var ggbApplet = new GGBApplet(params, true); -->
<!--     window.addEventListener("load", function() {  -->
<!--         ggbApplet.inject('ggb-element'); -->
<!--     }); -->
<!-- </script> -->
___

## Aufgaben

> [!question] Ein Auto beschleunigt sich in 8 Sekunden von 0 $"km"/"h"$ bis 100 $"km"/"h"$
> 1. Welche Beschleunigung hat das Auto?
> 2. Um welche Strecke hat sich das Auto beim Beschleunigungsvorgang fortbewegt?

Gegeben:
- $v_0$ (Anfangsgeschwindigkeit) = 0 $"km"/"h"$
- $v_1$ = 100 $"km"/"h"$
- $t_0$ = 0 $"s"$
- $t_1$ = 8 $"s"$
- $s_0$ = 0 $"m"$

Gefragt:
- $a(t_1)$ = ?
- $s(t_1)$ = ?

Die Beschleunigung gibt an, wie schnell sich die Geschwindigkeit ändert.\
Die Geschwindigkeit ist in $"km"/"h"$ angegeben, die Zeit ist jedoch [[kmh-zu-ms|in Sekunden]].
$$
a &= (Delta v)/(Delta t)\
&= (100 "km"/"h" - 0 "km"/"h") / (8 "s" - 0 "s")\
&= ((100 / 3.6) "m"/"s") / (8 "s")\
&= 3.47 overline(2) space "m"/"s"^2
$$

Wird bei der gleichmäßig beschleunigten Bewegung nach einer Strecke gefragt, nutzt man die [[#allgemeine Form]] (eckige Klammern dienen lediglich der übersichtlichen Trennung der Terme):
$$
s(t) &= [a/2 dot t^2] + [v_0 dot t] + [s_0]\
s(8 "s") &= [(3.47 overline(2) space "m"/"s"^2)/2 dot (8 "s")^2] + [0 "m"/"s" dot 8 "s"] + [0 "m"]\
&= (3.47 overline(2) space "m"/cancel("s"^2))/2 dot 64 cancel("s"^2)\
&= 111.overline(1) space "m"
$$

<!-- ## freier Fall -->
<!---->
<!-- Die Fallbeschleunigung wird als eine Konstante angenommen, denn sie nimmt mit jedem Kilometer um lediglich 0.03% ab. -->
<!-- Somit kann man den freien Fall (ohne Luftwiderstand und andere Kräfte) als eine [[#Allgemeine Form|quadratische Gleichung]] betrachten. -->
<!-- Dabei: -->
<!-- - unabhängige Variable $x$ - die Zeit $t$ -->
<!-- - konstanter Term $c$ - die Höhe $s_0$ -->
<!-- - linearer Term $b$ - die Geschwindigkeit $v_0$ -->
<!-- - quadratischer Term $a$ (Leitungskoeffizient) - die Hälfte der Beschleunigung -->

___

## Herleitung
$$
v(t) &= integral a(t) space d t = a t + C_1\
v(0) &= v_0 = a dot 0 + C_1 = C_1\
s(t) &= integral.double a(t) space d t = integral v(t) space d t = a/2 t^2 + v_0 t + C_2\
s(0) &= s_0 = a/2 dot 0^2 + v_0 dot 0 + C_2 => C_2 = s_0
$$

