$$
s(t) = a/2 t^2 + v_0 t + s_0
$$
Wobei:
- $s_0$ - Ausgangsstrecke
- $v_0$ - konstante Geschwindigkeit
- $a$ - **konstante** (!) Beschleunigung
- $s(t)$ - Strecke, die in der Zeit $t$ zurückgelegt wird

<meta name=viewport content="width=device-width,initial-scale=1">  
<meta charset="utf-8"/>
<script src="https://www.geogebra.org/apps/deployggb.js"></script>
<div id="ggb-element"></div>
<script>
    var params = {
            "material_id": "k8fnjd4n",
            "appName": "graphing", 
            "width": 630, 
            "height": 400, 
            "showToolBar": false, 
            "showAlgebraInput": false, 
            "showMenuBar": false,
            "showFullscreenButton": true,
            };
    var ggbApplet = new GGBApplet(params, true);
    window.addEventListener("load", function() { 
        ggbApplet.inject('ggb-element');
    });
</script>

## freier Fall

Die Fallbeschleunigung wird als eine Konstante angenommen; sie nimmt mit jedem Kilometer um lediglich 0.03% ab.
Somit kann man den freien Fall als quadratische Gleichung in Form $a x^2 + b x + c$ betrachten.\
Dabei:
- unabhängige Variable $x$ - die Zeit $t$
- konstanter Term $c$ - die Höhe $s_0$
- linearer Term $b$ - die Geschwindigkeit $v_0$
- quadratischer Term $a$ (Leitungskoeffizient) - [[#Herleitung|die Hälfte]] der Beschleunigung

## Herleitung
Weil die Beschleunigung die zweite Ableitung der Position ist:
- 1. Integration - die Geschwindigkeitsfunktion
- 2. Integration - die Poistionsfuntion

$$
v(t) &= integral a(t) space d t = a t + C_1\
v(0) &= v_0 = a dot 0 + C_1 = C_1\
s(t) &= integral.double a(t) space d t = integral v(t) space d t = a/2 t^2 + v_0 t + C_2\
s(0) &= s_0 = a/2 dot 0^2 + v_0 dot 0 + C_2 => C_2 = s_0
$$
