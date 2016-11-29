# Fragen CAS-FEE - Prüfungsvorbereitung

## [6] 08.06.2016 Client Server mit JS: http & node.js

### NodeJS
von Raphael Hirscher - Mittwoch, 23. November 2016, 14:44

Wie viele Threads laufen in einer NodeJS Runtime gleichzeitig?

a) NodeJS ist event-basiert und daher kommt pro Event ein Thread zum Einsatz  
b) NodeJS ist single-threaded und handelt Events asynchron ab.  
c) NodeJS basiert auf dem Reactor Pattern und hat nur einen Thread welcher Events synchron abarbeitet.

korrekte Antwort:
b)

### [X]Nenne 3 Networking Tools
von Thomas Brandenburger - Mittwoch, 28. September 2016, 17:35
- ping
- tracert / traceroute
- nslookup

### Wie gut ist die ES2015 Unterstützung von NodeJS ? Nenne drei ES2015 Features.
von Marc Labud - Donnerstag, 8. September 2016, 20:30

Seit der Node-Version 4.46 wurde begonnen ES2015 zu unterstützen. Mit der aktuellen Version 6.5.0 wird eine Vielzahl von ES2015 Features unterstützt. z. B.
- let, const
- promises
- template literals
- class

Im Detail nachschlagen kann man dies unter http://node.green.

Nicht unterstützt wird die ES2015 Modulsyntax, da mit ES2015 die diskutierte Spezifikation des module-loaders [ES6 Specification Draft Rev 27, Section 15](http://wiki.ecmascript.org/doku.php?id=harmony:specification_drafts#august_24_2014_draft_rev_27) nicht in den Standard übernommen wurde.
Als Workaround wird die ES2015 Modulsyntax von Babel oder typescript in das Modulformat commonJS transpiliert.

### Was ist Node.js?
von Michael Hüppi - Mittwoch, 22. Juni 2016, 13:42

a) Web-Framework ähnlich wie Ruby on Rails, Django oder ASP.NET
b) Eigentlich eine I/O Plattform. Server ist eine Möglichkeit aber z.B. Consolen Anwendungen sind auch möglich.
c) Programmiersprache mit Syntax, die stark an JavaScript angelehnt ist

Lösung: b

### Wie funktioniert der "Etag"-Header?
von Patrick Bonetti - Mittwoch, 15. Juni 2016, 17:19

Ein Etag-Header beinhaltet einen Hash, der den Stand einer Resource auf dem Server repräsentiert. Er dient dem Caching.

Bei der ersten Anfrage einer Resource durch den Client wird vom Server ein "Etag"-Header in der Response mitgeliefert. Der Client merkt sich lokal den Wert dieses Headers und sendet ihn bei der nächsten Anfrage der gleichen Resource im Request-Header wieder als Wert des "If-None-Match"-Headers mit. Der Server vergleicht den Stand der Resource mit dem "If-None-Match"-Wert des Clients und wenn sich dieser inzwischen nicht geändert hat, wird ein HTTP-Statuscode 304 an den Client zurückgegeben; die Resource selbst wird dann nicht nochmals übertragen. Nur wenn der Stand der Resource nicht mehr dem Wert der Clientanfrage entspricht, wird die Resource wieder an den Client gesendet. Damit wird vermieden, dass unnötig Daten mehrfach übertragen werden.

TL;DR zum Thema aus den [Google Developer Docs](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching?hl=de#zwischengespeicherte-antworten-mit-etags-validieren)

Ein Validierungstoken wird vom Server über den ETag-HTTP-Header übertragen. Ein Validierungstoken ermöglicht effiziente Aktualisierungsprüfungen von Ressourcen. Es werden keine Daten übertragen, wenn sich die Ressource nicht geändert hat.

### TCP/IP
von David Heim - Mittwoch, 15. Juni 2016, 13:36

Gib die richtige Antwort an:  
a. Ein TCP-Paket wird in der Nutzlast eines IP-Pakets übermittelt  
b. Ein IP-Paket wird in der Nutzlast eines TCP-Pakets übermittelt

Antwort:  
Korrekt ist Antwort a: TCP liegt im OSI-Modell auf der Schicht 4 (Transport), während IP auf der Schicht 3 (Network) liegt. Die übergeordnete Schicht nutzt die Dienstleistung der untergeordneten Schicht. Somit wird ein TCP-Paket als Nutzlast eines IP-Pakets zum richtigen Host transportiert.

### Was sind Stream in Node.js?
von Matthias Gemperli - Mittwoch, 15. Juni 2016, 08:20
- Core Konzept von Node.js
- Stück für Stück bearbeiten von Daten
- Definiert durch ein Interface
- Basiert auf EventEmitter

### Wie sind die HTTP response status codes klassifiziert? Nenne pro Klasse je 2 Beispiele
von Michel Rimbeaux - Dienstag, 14. Juni 2016, 18:06

* 1xx Informational
  * 100 Continue
  * 101 Switching Protocols
* 2xx Successful
  * 200 OK
  * 204 No Content
* 3xx Redirection
  * 301 Moved Permanently
  * 305 Use Proxy (since HTTP/1.1)
* 4xx Client Error
  * 400 Bad Request
  * 404 Not Found
* 5xx Server Error
  * 500 Internal Server Error
  * 503 Service Unavailable

### Was ist der Unterschied in der Versionsdeklaration in einem npm package.json File von "~1.2.3" und "^1.2.3"
von Stefan Eugster - Dienstag, 14. Juni 2016, 14:05

- **Tilde** sucht die neueste "minor" Version (mittlere Ziffer). "~1.2.3" aktualisert auf die aktuellste Version mit einer "2" in der Mitte (z.B. 1.2.x), nicht aber einer drei (z.B. 1.3.0).
- **Caret** sucht die neueste "major" Version (erste Ziffer). "^1.2.3" aktualisert auf die aktuellste Version mit einer "1" an erster Stelle (z.B. 1.x.x), nicht aber einer "2" (z.B. 2.0.0).

=> Beim Verzicht von "Tilde" und "Caret" wird die angegebene Version heruntergeladen.

### Ein Cookie kann mit HTTPOnly deklariert werden. Was bewirkt diese Deklaration?
von Patrik Dietschweiler - Sonntag, 12. Juni 2016, 11:48

Das Cookie kann nicht mittels Javascript ausgelesen werden. Es wird nur mit dem Request mitgeschickt. Damit kann das Cookie vor Cross-Site-Scripting Attacken geschützt werden.

### [X]Aus welchen Schichten besteht das OSI Modell und wie heissen sie ?
von Philipp Bachmann - Mittwoch, 22. Juni 2016, 16:37

7. Application
6. Presentation
5. Session
4. Transport
3. Network
2. Data Link
1. Physical

### Wofür kann Ping verwendet werden?
von Robert Stucki - Samstag, 11. Juni 2016, 09:58

- Check IP nodes
- Resolve a name
- Check connectivity
- IP Configuration Utility

Richtige Antwort: 3.

### Welche Ausgabe wird mit console.log in app.js erzeugt?
von Anton Kammermeier - Donnerstag, 9. Juni 2016, 15:08

NodeJS:
* app.js  
```javascript
...
var utilModule = require('./utilSample.js');
...
console.log('Ausgabe: ' + utilModule.modUtilOne());
console.log('Ausgabe: ' + utilModule.utilThree());
...
```

* utilSample.js  
```javascript
var utilSample = {
   utilOne : function(){return "utilOne";},
   utilTwo : function(){return "utilTwo";}
}
exports.utilThree = function(){return "utilThree";}
module.exports = {
   modUtilOne : utilSample.utilOne,
   modUtilTwo : utilSample.utilTwo
}
```

Antworten:  
a)  
Ausgabe: utilOne  
Ausgabe: utilThree

b)  
Ausgabe: utilOne  
Ausgabe: undefined

c)  
Ausgabe: TypeError utilModule.modUtilOne is not a function   
Ausgabe: utilThree

d)  
Ausgabe: utilOne  
Ausgabe: TypeError utilModule.utilThree is not a function

Lösung:
d)

Beschreibung:  
Mit "module.exports = .." wird ein Objekt zurückgegeben, welches über "require" zugewiesen wird.
Zusätzliche "exports" - Statements werden dann nicht beachtet, im Beispiel ist "utilThree" nicht bekannt.
Es werden nur die über "module.exports = .." zugewiesenen Funktionen/Properties exportiert.
Wird nicht das Objekt "module.exports = ..", sondern einzelne named properties exportiert, funktioniert es:
```javascript
exports.utilThree = function(){return "utilThree";};
module.exports.modUtilOne = utilSample.utilOne;
module.exports.modUtilTwo = utilSample.utilTwo;
```

Wann was verwendet werden kann bei NodeJS Module Patterns:  
https://darrenderidder.github.io/talks/ModulePatterns/#/

### Was ist der Unterschied zwischen Callbacks und Events ?
von Fabio Cavalera - Donnerstag, 9. Juni 2016, 08:59

- Callbacks sind jeweils 1:1 Verbindungen. Werden verwendet wenn es nur 1 "Interessent" für diese Funktion gibt
- Events sind 1:n Verbindungen. Bei den Events hingegen gibt es mehrere "Interessenten" die diese Funktion nutzen

### Wann sollte eine PUT und wann ein POST verwendet werden?
von Marcel Tinner - Mittwoch, 8. Juni 2016, 20:14

Lösung:  
* **PUT** sollte beim Verändern/Aktualisieren von Datensätzen verwendet werden, kann aber auch für das Erstellen genutzt werden
* **POST** wird nur beim Erstellen neuer Datensätze verwendet.
