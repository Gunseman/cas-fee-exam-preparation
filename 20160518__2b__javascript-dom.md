# Fragen CAS-FEE - Prüfungsvorbereitung

## [2b] 18.05.2016 JavaScript, DOM-API, jQuery

### Nenne 3 Dom Schnittstellen
von Thomas Brandenburger - Mittwoch, 28. September 2016, 15:15

* Node
* Document
* Element

### Comparisons und Typumwandlung in JavaScript
von Dimitri Friedli - Mittwoch, 25. Mai 2016, 15:41

**F: Was steht in der JavaScript Konsole?**

```javascript
var a = "6";
var b = 2;

function calc(a, b) {
    return a * b;
}

calc(a, b);
```

A: 12

**F: True or False?**
```javascript
"42" == 42
```

A: true

***F: True or False***
```javascript
"42" === 42
```

A: false

### Scheduler
von Daniel Kellenberger - Mittwoch, 25. Mai 2016, 14:58

Zeige wie ein Scheduler aufgesetzt wird, der sich selbst regelmässig aufruft, aber erst nachdem er aufgerufen wurde.

Antwort:
```javascript
(function scheduler(window){
    aktion();
    window.setTimeout(() => scheduler(window), 1000)
}(global));
```

### Weshalb sollte der Event 'doubleclick' nicht verwendet werden?
von Daniel Kellenberger - Mittwoch, 25. Mai 2016, 14:55

Antwort:  
Bei einem 'doubleclick' wird auch der Event 'click' geworfen.

### [X]Browser Rendering Engine
von Matthias Gemperli - Montag, 21. November 2016, 14:06

Wie sieht der grundlegende Ablauf eines Browser Rendering-Moduls aus?

a) HTML > Render Tree > DOM-Tree > HTML Parser > Paint  
b) HTML > HTML Parser > DOM-Tree > Render Tree > Paint  
c) DOM > HTML Parser > HTML-Tree > Render Tree > Paint

Antwort:  
b)

### Event Queue / JS-Thread
von Michael Hüppi - Mittwoch, 25. Mai 2016, 08:41

Welche Aussagen sind falsch?

a) User-Events und System-Events werden alle in die gleiche Event Queue eingetragen.  
b) JavaScript ist im Normalfall Multi-Threaded  
c) Ein Umordnen der Event Queue ist durch bestimmte Manipulationen möglich.  
d) Die Events aus der Queue werden in der Reihenfolge des Eintrags bearbeitet.

Antwort:  
b und c

### Was ist eine Immediately-invoked function expression (IIFE)?
von David Heim - Sonntag, 22. Mai 2016, 17:07

Eine Immediately-invoked function expression (IIFE) ist ein Design Pattern für JavaScript. Dabei wird eine Funktion definiert und sofort aufgerufen. Die Variablen und Funktionen innerhalb der IIFE sind auf den Scope der Funktion beschränkt und verschmutzen den globalen Scope nicht.

Beispiel:
```javascript
(function(logStatement) {
  console.log(logStatement);
})('hello world');
```

### Ist Funktion Chaining auch ohne jQuery möglich? Falls ja, mache bitte ein Beispiel
von Jonathan Uhlmann - Sonntag, 22. Mai 2016, 14:34

Ja, klar! jQuery baut schliesslich auf Javascript auf.

Beispiel
```javascript
Element.prototype.attr = function(key, value) {
	if (typeof value === 'string' || value === true) {
		this.setAttribute(key, value);
	} else if (value === false || value === null) {
		this.removeAttribute(key);
	} else {
		return this.getAttribute(key);
	}
	return this;
};
```

Anwendung:
```javascript
document.documentElement.attr('lang', 'de').attr('data-version', '2')
```

### jQuery Perfomance
von Jonathan Uhlmann - Sonntag, 22. Mai 2016, 14:27

Wie müssen die Selektoren umgeschrieben werden, damit sie eine bessere Performance haben?

```javascript
$('head > meta')
$('body section')
$('html')
$('#element .subelement')
```

Antwort
```javascript
$(document.head).children('meta')
$(document.body).find('section')
$(document.documentElement)
$('#element').find('.subelement') oder noch schneller: $(document.getElementById('element')).find('.subelement')
```

### Auf- und Abrunden mit Javascript
von Jonathan Uhlmann - Sonntag, 22. Mai 2016, 14:10

Wie lautet die Ausgaben in der Konsole? Achtung! Eventuell rechnet ein Browser nicht immer so wie er sollte...

```javascript
var number = 1.005;
 
var ceil = Math.ceil(number);
var floor = Math.floor(number);
var max = Math.max(ceil + floor, ceil - floor);
var min = Math.min(ceil + floor, ceil - floor);
 
console.log(ceil, floor, max, min);

// Hint: ~ is doing -(N+1)
console.log(
  parseInt(number) < parseFloat(number.toFixed(3)),
  (number||0) < number,
  (number|0) < number,
  ~~number < number
);
 
console.log(
  parseInt('1.5rem'),
  parseFloat('1.5rem'),
  Number('1.5rem'),
  parseInt('min: 1.5rem'),
  parseFloat('min: 1.5rem'),
  Number('min: 1.5rem')
)
 
console.log(
  parseFloat(number.toFixed(2)),
  Number(number.toFixed(2)),
  Number(Math.round(number + 'e2') + 'e-2')
);
```

Antwort:
- 2, 1, 3, 1
- true, false, true, true
- 1, 1.5, NaN, NaN, NaN, NaN
- 1, 1, 1.01

### Was ist event bubbling und capturing und wozu kann es nützlich sein?
von Michel Rimbeaux - Montag, 12. September 2016, 18:59

- Event bubbling  
  Es werden alle Event-Handlers ausgeführt, begonnen beim innersten Ziel-Event, anschliessend aufsteigend zu allen Parent-Events bis zum document. Ausnahme: bubbling wurde unterbrochen durch event.stopPropagation().

- Event capturing  
  Es werden alle Event-Handlers ausgeführt, begonnen beim äussersten Parent-Event (document) anschliessend absteigend bis zum Ziel-Event. Ausnahme: capturing wurde unterbrochen durch event.stopPropagation().

Nutzen  
Event bubbling kann beispielsweise zur Event-Delegation genutzt werden: statt jedes Element seinen eigenen Event-Handler aufruft (aufwendig und langsam in der Ausführung), wird die Aufgabe einem höherliegendem Event-Handler delegiert. Dort werden dann alle (gemeinsamen) Aufgaben der darunterliegenden Elemente zentral bearbeitet und kontrolliert.

Bsp: Wenn viele gleichförmige Elemente in Menüs, Link-Listen, Formularen oder Tabellen JavaScript-Interaktivität benötigen müsste man ohne Event-Delegation jedes Element einzeln ansprechen, um dort immer denselben Event-Handler zu registrieren.

http://molily.de/js/event-handling-effizient.html

### Wie kann das Array ähnliche Objekt "arguments", welches auf die übergebenen Parameter einer Funktion verweist, zu einem Array umgewandelt werden?
von Stefan Eugster - Samstag, 21. Mai 2016, 09:40

Das "arguments"-Objekt ist kein Array. Es ist zwar ähnlich wie ein Array, hat aber keine Eigenschaften eines Arrays mit Ausnahme von length. Zum Beispiel ist die pop-Methode nicht vorhanden. Jedoch kann "arguments" mit folgender Anweisung zu einem echten Array umgewandelt werden:

```javascript
var argsArr = Array.prototype.slice.call(arguments);
```

### Was ist mit "Function Chaining" gemeint?
von Philipp Bachmann - Dienstag, 24. Mai 2016, 09:07

Jede Abfrage von jQuery gibt eine Result-­Liste zurück und alle Befehle werden meist auf alle Objekte angewendet. Diese Befehle geben in den meisten Fällen wieder eine Liste von jQuery Objekten zurück. Dies ermöglicht es beliebig viele Befehle aneinander zu reihen.

```javascript
jQuery(function($) {
  var list = $("#item-list");
  list.children().text("Hello World");
  list.find(".done").hide();
});
```
(Bearbeitet von Hans Schenker - Originaleintrag am Donnerstag, 19. Mai 2016, 13:06)

Function Chaining oder Method Chaining (method is eine Funktion definiert in einem Objekt)
ist ein häufig angewandetes Pattern in Javascript.
Method Chaining ist dann möglich wenn eine Methode, definiert im Prototype des Objektes,
am Ende der Methode mit "return this" das Objekt zurückgibt an dem die Methode hängt.
Wenn ich nun eine zweite Methode des zürückgegebenen Objektes aufrufen will,
kann ich das direkt mit ".naechsteMethode()" tun.

### Der mit welcher/n JQuery-Methode(n) definierte Eventhandler wird erst nach dem Laden des geamten Contents (inkl. Bilder) ausgeführt
von Rafael Bamert - Donnerstag, 19. Mai 2016, 11:31

a) $.load(handler)  
b) $.ready(handler)  
c) $.on('ready', handler)  
d) $.on('load', handler)

Antwort: a + d

### Zeilenumbrüche und Leerzeichen im HTML werden als Whitespace Text-Nodes eingefügt und können das Layout stören. Wie kann die Störung verhindert werden ?
von Marc Labud - Donnerstag, 19. Mai 2016, 09:38

- Whitespace kann mittels JavaScript aus dem DOM-Baum entfernt werden.
- Während der Minification kann Whitespace eliminiert werden.
- Die Zeilenumbrüche können mit Kommentaren umschlossen werden.

### Wie können Probleme bei jQuery mit dem $ Zeichen von anderen JS Frameworks verhindert werden?
von Robert Stucki - Mittwoch, 18. Mai 2016, 23:10

Multiple Choice (Mehrere richtige Antworten möglich):

a. NoConflict-Modus  
b. IIFE  
c. Euro Zeichen verwenden  
d. jQuery Parameter Injection  

Richtige Antworten: a, b, d

### Ist es möglich über eine Node List direkt mit forEach zu iterieren?
von Anton Kammermeier - Donnerstag, 9. Juni 2016, 15:14

- ja
- nein

Lösung:
b)

Beschreibung:
Eine Node List ist kein Array, deshalb kann man nicht direkt mit forEach iterieren.
Über eine NodeList kann wie folgt iteriert werden:
- for Loop
- Umwandlung der NodeList in ein Array

siehe: [MDN NodeList API](https://developer.mozilla.org/en-US/docs/Web/API/NodeList)

### Zähle mindestens zwei globale Browser Objekte auf
von Marcel Tinner - Mittwoch, 18. Mai 2016, 19:20

- console
- window
- document
- history
- navigator
