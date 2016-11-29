# Fragen CAS-FEE - Prüfungsvorbereitung

## [21] 02.11.2016 - Site Optimization / Performance

### Sprites
von Raphael Hirscher - Mittwoch, 23. November 2016, 15:22

Eine Webseite benötigt viele kleine Icons z.B. Länderflaggen. Welches Vorgehen empfiehlt sich hier, damit die Performance der Seite optimiert werden kann?

Antwort:

Sprites. Es wird ein grosses Bild mit sämtlichen Icons erstellt. Anschliessend wird via CSS das Bild entsprechend platziert, so dass das jeweilige Icon angezeigt wird.
Dadurch viele Requests eingespart, da nur ein Bild mit den Sprites geladen werden muss.

### Was ist lazy loading?
von Patrik Dietschweiler - Mittwoch, 16. November 2016, 18:47

Lazy Loading, wörtlich „faules Laden“ wird dazu verwendet um Content erst dann zu laden, wenn wirklich angezeigt werden muss. So werden z.B. Bilder erst geladen, wenn sie im sichtbaren Bereich des Browser-Fensters (viewport) sind.

### Was sind die Vorteile eines CDN's?
von Matthias Gemperli - Mittwoch, 16. November 2016, 18:38

- Performance
- Verfügbarkeit
- Informationsgewinnung (Web Analyse Möglichkeit)

### Wie kann man die Performance einer Website messen?
von Matthias Gemperli - Mittwoch, 16. November 2016, 18:32

Es gibt verschiedene Anbieter, die Lösungen dazu anbieten:

- Google PageSpeed Insights
- Webpagetest.org

### Nenne drei Möglichkeiten die Performance einer Seite zu verbessern
von Noel Bellón - Sonntag, 13. November 2016, 10:15

- Bilder optimieren: richtiges Bildformat, nur so gross wie  nötig
- Anzahl Downloads vermindern -> JS und CSS Dateien zu jeweils einer oder wenigen Dateien "konkatenieren"
- Für Icons anstatt Bilder Icon-Fonts verwenden
- CSS und JS Dateien minifizieren
- CSS und JS Dateien "Gzippen"
- JS Bibliotheken aus CDN's beziehen

### Spielt es eine Rolle wo/zu welchem Zeitpunkt man CSS und JS Dateien auf der Seite einbindet?
von Noel Bellón - Sonntag, 13. November 2016, 10:09

Ja, es spielt eine Rolle.

CSS Dateien sollten im Header eingebunden werden, da der Browser erst rendern kann, wenn er alle CSS Dateien geladen hat.

JS Dateien sollten am Ende vor dem Body-Tag eingebunden werden, weil der Browser auch ohne JS Files mit rendern beginnen kann. Werden die JS Files ebenfalls im Header geladen, verzögert sich das Rendern bis der Browser alle nötigen JS Files geladen hat.

### Was ist mit „Critical CSS“ im Zusammenhang mit Performance-Optimierung einer Website gemeint?
von Patrick Bonetti - Mittwoch, 9. November 2016, 18:28

„Kritisches CSS“ sind Styles, die das Rendering der Seite blockieren - dies ist in der Regel der „above-the-fold content". Für diesen initial sichtbaren Teil einer Website werden die benötigten CSS-Styles direkt inline in die HTML-Seite eingebunden. Die weiteren auf der Seite benötigten Styles werden später asynchron nachgeladen. Damit kann der Browser früher mit dem Rendering der Seite beginnen und sie baut sich für den User sichtbar schneller auf.

### Gegeben ein Bild mit grossen farbigen Flächen mit 4-8 Farben
von Daniel Kellenberger - Mittwoch, 2. November 2016, 18:41

Gegeben ein Bild mit grossen farbigen Flächen mit 4-8 Farben. Welches Format verwendest du?

Antwort:
- SVG wenn die Benutzergruppe aktuelle Browser verwendet
- PNG mit optimierter Palette

### Welcher Image Type steht für Animationen zur Verfügung?
von Tobias Buechel - Mittwoch, 2. November 2016, 20:36

- GIF
- SVG ermöglicht auch Animationen: https://css-tricks.com/animating-svg-css/

### Worauf sollte bei der Webentwicklung bezüglich Performance / Ressourcen besonders geschaut werden?
von Marcel Tinner - Mittwoch, 2. November 2016, 17:53

Fotos sind teilweise sehr gross und verursachen daher besonders schnell eine Performanceeinbusse.

Daher möglichst wenig Fotos verwenden und falls Fotos verwendet werden dann nur das Format JPEG.
