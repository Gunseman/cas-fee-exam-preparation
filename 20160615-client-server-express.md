# Fragen CAS-FEE - Prüfungsvorbereitung

## [6] 15.06.2016 Client Server JS: REST & Express

### NodeJS ist ...
von Dimitri Friedli - Montag, 5. Dezember 2016, 20:09

a) multithreaded Javascript welches auf dem Server ausgeführt wird und sich somit speziell für rechenintensive Operationen eignet.
b) JavaScript welches asynchron in der V8 Engine in einem Thread läuft.
c) absolut nicht geeignet für die Entwicklung von RESTful Services da HTTP request nur schwer gehandelt werden können und es wenige Packages und Community support für diese Aufgabe gibt.

A: b)

### REST: HEAD
von Raphael Hirscher - Mittwoch, 16. November 2016, 13:59

Welchem Http-Verb kommt HEAD gleich und was sind die Unterschiede?

Antwort:  
GET. Beim HEAD wird vom Server jedoch kein response body mitgeliefert.

### JSON Web Token
von Peter Bartholet - Mittwoch, 2. November 2016, 20:31

In welcher Form kann ein JSON Web Token übermittelt werden?

1. Im HTTP-Header. (Auth-Header)
2. Im Body eines HTTP-Post.
3. Cookie (sehr oft)

Antwort: Alle drei Antworten sind möglich/richtig.

Note: Nicht möglicher in der URL. Siehe: http://stackoverflow.com/questions/32722952/is-it-safe-to-put-a-jwt-into-the-url-as-a-query-parameter-of-a-get-request

### Für was wird die Http Methode "options" verwendet
von Thomas Brandenburger - Mittwoch, 28. September 2016, 15:07

Die Methode Options ermöglicht dem Client herauszufinden, was man mit einer Ressource anstellen kann. Die Response auf einen OPTIONS- Request enthält alle verfügbaren und erlaubten Methoden. Z.b kann eine Antwort in einem Header so aussehen:

Allow: GET, HEAD

So kann der Client davon ausgehen, dass der Server auf GET und Head Requests reagiert.

### Welche Ausgaben in der Konsole und im Browser werden hier über Express Middleware erzeugt?
von Anton Kammermeier - Samstag, 25. Juni 2016, 23:04

```javascript
...
var router = express.Router();
router.use(
    function(req, res, next) {
        console.log("-first log entry");
});
router.use(
    function(req, res, next) {
        console.log("-second log entry");
        next();
    });
router.get('/', function(req, res) {
    res.send('-homepage');
});
...
```

Antworten:

a)
- console:
  - first log entry
  - second log entry
- Browser:
 - homepage

b)
- console:
  - first log entry
- Browser:
  - <no respond>

c)
- console:
  - first log entry
- Browser:
  - homepage

d)
- console:
  - second log entry
- Browser:
  - homepage

Lösung:  
b)

Innerhalb der Funktion beim ersten "router.use()" fehlt die Weiterleitung mit der next() - Funktion. Es wird nur der "first log entry" erzeugt, alle weiteren Routen werden nicht ausgeführt!

Siehe [Route handlers](http://expressjs.com/en/guide/routing.html)

### Nenne zwei Möglichkeiten zur Versionierung einer REST-API.
von Patrick Bonetti - Mittwoch, 22. Juni 2016, 17:46

- Versionsnummer wird als Media-Type im Accept-Header übergeben. Beispiel:  
Accept: application/vnd.company.conference.track-v2+json

- Versionsnummer wird als Qualifier dem Media-Type im Accept-Header angehängt. Beispiel:  
Accept: application/vnd.company.conference.track+json;v=2

- Version wird in der URI übergeben. Beispiel:  
GET /api/v2/conference/tracks/6

### Aus welchen drei Komponenten besteht das MVC-Pattern und für was sind sie zuständig?
von Matthias Gemperli - Mittwoch, 22. Juni 2016, 16:59

Model: Daten und Datenaufbereitung
View: Darstellung der Daten aus dem Model
Controller: Verknüpfung View mit Daten

### Was sind die drei Parameter einer Custom-Middleware?
von Michael Hüppi - Mittwoch, 22. Juni 2016, 13:27

- request
- response
- next

### Was bedeutet CORS (Cross-Origin Resource Sharing) im Zusammenhang mit REST
von Stefan Eugster - Sonntag, 19. Juni 2016, 16:12

Cross-Origin Resource Sharing (CORS) ist ein Mechanismus, der Webbrowsern oder auch anderen Webclients Cross-Origin-Requests (Anfrage einer Ressource von einer anderen Domain) ermöglicht. Zugriffe dieser Art sind normalerweise durch die Same-Origin-Policy (SOP) untersagt.

Ob ein Cross-Origin-Request möglich ist oder nicht, kann der Webserver mittels HTTP Header dem Client übermitteln.

CORS wird vor allem bei öffentlichen REST-APIs benötigt.

Beispiel HTTP Header, welcher die HTTP Methode GET für die Domain http://foo.example freigibt:
```
Access-Control-Allow-Origin: http://foo.example
Access-Control-Allow-Methods: GET
```

### Für was steht HATEOAS ? Was sind Vor- und Nachteile?
von Philipp Bachmann - Sonntag, 19. Juni 2016, 13:50

HATEOAS steht für "Hypermedia as the Engine of Application State".

- Prozessgedanke in der Ressource
- Media-Typen beschreiben die Ressource
- Aktionen werden ausgeführt beim folgen von Links
- Jede Antwort beinhaltet den "ApplicationState"
- Selbstbeschreibende API’s erzeugen Flexibilität
- Clients können die API «erforschen» ohne Dokumentation und Anleitung

Vorteile:
- Inline Dokumentation
- Explorable API
- Einfachere Clients, die URI ist sicher korrekt und aktuell.

Nachteile:
- aufwändig auf der Server-Seite

### REST versus SOAP. Was sind die Unterschiede?
von Michel Rimbeaux - Montag, 12. September 2016, 18:50

- SOAP fordert eine grössere Bindung an die Clients --> bei einer Veränderung des Servers muss der Client angepasst werden
- REST ist freundlicher für Netzwerkkomponenten und Administratoren (Firewall-Rulesauf URI oder HTTP-Methoden)
- SOAP hat einen grossen Overhead
- REST lässt sich durch seine Statuslosigkeit sehr einfach skalieren, SOAP ist nicht zustandslos
- SOAP ist ein Standard, REST nicht --> beliebige Repräsentationen
- REST erfüllt ROA, SOAP nicht
- REST ist auf  HTTP beschränkt (einfacher), SOAP nicht (http, jms, etc)

### Welche Möglichkeiten gibt es die Daten auf dem Server zu speichern?
von Robert Stucki - Samstag, 18. Juni 2016, 10:42

- In Memory: Array
- JSON
- NoSQL-Datenbanken
- Sql-Datenbanken

### Aus welchen 3 Teilen besteht das MVC-Pattern und was ist ihre Aufgabe?
von Fabio Cavalera - Donnerstag, 16. Juni 2016, 07:33

- Model: Zuständig für Daten und Datenaufbereitung
- View: Zuständig für die Darstellung der Daten
- Controller: Verknüpft die View mit den Daten

### Unterschied POST / PUT
von David Heim - Mittwoch, 15. Juni 2016, 19:05

Was ist der Unterschied zwischen POST und PUT?

- PUT ist idempotent: wird derselbe Call mehrfach ausgeführt, verändert sich nichts. POST ist nicht idempotent.
- Beim PUT gibt der Client die URI der Ressource mit. Wenn die Ressource noch nicht existiert, wird sie unter dieser URI angelegt, ansonsten wird die überschrieben. Beim POST wird eine Ressource angelegt und die URI durch den Server generiert und in der Antwort an den Client zurückgegeben.

### Was ist eine Middleware?
von Marcel Tinner - Mittwoch, 15. Juni 2016, 18:09

Eine Art Pipeline bei welcher man sich dazwischen einhängen kann.

### Welche Datentypen gibt es in JSON?
von Tobias Buechel - Mittwoch, 15. Juni 2016, 18:00

Boolean
Number
String
Array
Object
Null (könnte als Object betrachtet werden)

### Was gibt es für Standardmethoden bei ROA? Welche werden effektiv benutzt?
von Jonathan Uhlmann - Mittwoch, 15. Juni 2016, 19:06

- GET
- POST
- PUT
- DELETE
- HEAD
- OPTIONS

Benutzt werden effektiv:
- GET
- POST
- PUT
- DELETE
