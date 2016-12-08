# Fragen CAS-FEE - Prüfungsvorbereitung

## [24] 23.11.2016 - Isomorphic Frameworks

### Welche Punkte sollten für SEO erfüllt sein. Nenne 5 Beispiele.
von Dimitri Friedli - Montag, 5. Dezember 2016, 20:20

1. Semantisches HTML
2. Optimierungen für Mobile
3. Barrierefreier Inhalt
4. Schnelle Ladezeit
5. Authentischer Content

### Um die Accessibility einer Website zu verbessern müssen die Entwickler ..
von Dimitri Friedli - Montag, 5. Dezember 2016, 20:17

a) eine Website mit validem HTML Entwickeln. Das reicht dem Screenreader.
b) die Website mit validem HTML durch ARIA Attribute erweitern.
c) nicht machen. Die heutigen Screenreader können Inhalte selbständig richtig interpretieren.

### Weshalb ist es aus Accessibility-Sicht wichtig, zu jedem HTML-Formularfeld auch ein -Tag zu implementieren?
von Patrick Bonetti - Mittwoch, 30. November 2016, 21:28

User mit Screenreader navigieren in der Regel mit Hilfe der Tabulator-Taste durch eine Website und springen damit bei Formularen von Feld zu Feld. Ohne `<label>` zu einem Feld ist es für den Benutzer eines Screenreaders schwierig bis unmöglich herauszufinden, was er in einem Formularfeld eingeben muss (z.B. Textfeld) bzw. welche Optionen er hat (z.B. Checkbox). Wird ein `<label>` zu einem Feld gesetzt, liest der Screenreader dessen Inhalt vor, wenn man zu einem Formularfeld navigiert.

### SEO Relevanz
von Raphael Hirscher - Mittwoch, 30. November 2016, 18:42

Nenne mindestens vier HTML-Elemente, die relevant für die Suchmaschinenoptimierung sind.

1. `<title></title>`
2. `<meta name="description"></meta>`
3. `<nav></nav>`
4. `<h1></h1>` (Pro in sich geschlossener Inhaltsblock erlaubt -> http://accessiblehtmlheadings.com )
5. `<section></section>`
6. `<article></article>`

### WCAG - Seitenstruktur
von Michael Hüppi - Mittwoch, 30. November 2016, 05:07

Wie kannst du gemäss WCAG die Seitenstruktur verbessern? (3 Bsp.)

- versteckte `<hX>` Elemente, um Bereiche auszuzeichnen
- semantisch korrekte Markup-Elemente in Kombination mit ARIA-Rollen (z.B. `<main role="main">...</main>`)
- Skiplinks, um dem User zu ermöglichen, Bereiche wie die Navigation zu überspringen

### SEO: Nenne vier Best practices bzgl. Crawling/Indexierung von dynamischen Inhalten
von Michel Rimbeaux - Sonntag, 27. November 2016, 11:01

- server-side oder hybrid rendering (Isomorpher / Universal-Ansatz)
- alternativ: Test mit [Google Search Console](http://www.google.com/webmasters/toolsl) “Fetch as Google tool”, um zu überprüfen, ob die Inhalte erfolgreich dargestellt werden für den google search crawler
- unabhängig zugängliche URLs
- XML Sitemap

### Was ist (WAI)-ARIA und welches Ziel hat es?
von Michel Rimbeaux - Samstag, 26. November 2016, 14:44

**W**eb **A**ccessibility **I**nitiative: **A**ccessible **R**ich **I**nternet **A**pplications

- W3C Recommendation: http://www.w3.org/TR/wai-aria/
- Ziel: Inhalte (insbesondere dynamische) zugänglich machen, welche standardmässig nicht zugänglich sind

### Accessability für eine Tabelle
von Daniel Kellenberger - Mittwoch, 23. November 2016, 17:34

Welche Elemente sind Mindestanforderungen um eine Tabelle barrierefrei zu gestalten?

- Tabellenbeschreibung als `<caption>`
- Tabellenheader in einem `<thead>` Gruppe
- Spalten oder Zeilen Titel in einem `<th>`
- Beschreibung in welche Richtung die Beschreibung gilt mittels scope="col" bzw. scope="row"
- `<tfooter>` könnte man hier auch noch erwähnen

### Was ist Barrierefreiheit?
von Jonathan Uhlmann - Mittwoch, 23. November 2016, 17:16

Barrierefrei heisst, dass Räumlichkeiten, Medien oder Einrichtungen so angelegt sind, dass sie von jedem Menschen unabhängig von einer eventuell vorhandenen Einschränkung benutzt werden können und dass sie grundsätzlich ohne fremde Hilfe auffindbar, zugänglich und nutzbar sind.