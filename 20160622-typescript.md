# Fragen CAS-FEE - Prüfungsvorbereitung

## [7] 22.06.2016 Engineering & Typescript

### Was ist bzw. was definiert Typescript
von Thomas Brandenburger - Mittwoch, 28. September 2016, 14:57

Typescript:
- Ist ein Super Set von JavaScript und wird schlussendlich zu normalen JavaScript kompiliert
- Fügt der Web Entwicklung Typensicherheit hinzu, welches es gerade grösseren Teams eine grosse Hilfe ist
- Ermöglicht es Entwicklern bereits heute Features von zukünftigen Sprachdefinitionen wie ECMAScript 2015 zu verwenden

### Wie können Klassen in TypeScript in anderen Klassen verwendet werden?
von Noel Bellón - Sonntag, 3. Juli 2016, 11:40

Die Klasse welche man in einer anderen Klasse verwenden möchte, muss mit dem **export** Statement deklariert werden damit diese überhaupt importiert werden kann. Bein Import kann dann diese Klasse mit dem **import** Statement und der entsprechenden Pfadangabe in eine andere Klasse importiert werden.

```javascript
// Export:
export class StringValidator {
    // validate some strings
}
// oder:
class StringValidator {
    // validate some strings
}
export { StringValidator };

// Import:
import { StringValidator } from "./StringValidator";

let myValidator = new StringValidator();
```
### Welcher Module Loader wird von TypeScript unterstützt?
von Rafael Bamert - Dienstag, 28. Juni 2016, 16:19

a) CommonJS  
b) RequireJS  
c) SystemJS  
d) ES6  
e) isomorphic

Antwort: alle

Dies kann in der tsconfig.json eingestellt werden oder in der Command Line per Parameter.

### Welches ist kein Dependency Management Tool?
von Robert Stucki - Montag, 27. Juni 2016, 20:04

a. Bower  
b. NPM  
c. Maven  
d. Bootstrap

Richtige Antwort: d

### Was sind Typescript Generics und wozu dienen sie? Implementiere ein Beispiel
von Michel Rimbeaux - Sonntag, 26. Juni 2016, 21:29

Typescripts Generics sind parametrisierte Typen. Die Idee dahinter ist, zusätzliche Variablen für Typen einzuführen. Diese Typ-Variablen repräsentieren zum Zeitpunkt der Implementierung unbekannte Typen. Erst bei der Verwendung der Klassen, Schnittstellen und Methoden werden diese Typ-Variablen durch konkrete Typen ersetzt. Damit kann typsichere und generische Programmierung gewährleistet werden.

Beispiel:

```javascript
// Ohne Generics
function identity(arg: number): number {
    return arg;
}
// Mit Generics
function identity<T>(arg: T): T {
    return arg;
}
```
Anwendung
```javascript
let output = identity<string>("myString");  // type of output will be 'string'
// oder
let output = identity("myString");  // type of output will be 'string'

// Here we use type argument inference, that is, we want the compiler to set the value of T for us automatically based on the type of the argument we pass in
```

### Wie kann in Typescript Strings mit Information von Objekten angereichert werden?
von Patrik Dietschweiler - Freitag, 24. Juni 2016, 09:38

Mit Template Strings (Backtick)

```javascript
let helloWorldText : string = "Hello World";
let html : string = `<div>${helloWorldText}</div>`;
```

### Welche Basistypen gibt es in Typescript ?
von Philipp Bachmann - Freitag, 24. Juni 2016, 09:23

- boolean
- number
- string
- Array
- Tuple
- Enum
- void
- any

### Was ist der Unterschied bei der Deklaration von Variablen mit var, let und constant
von Stefan Eugster - Donnerstag, 23. Juni 2016, 15:42

`var foo = 1;`

Deklaration von Variablen, sollte aufgrund der Scoping Probleme nicht mehr verwendet werden.

`let foo = 1;`

Deklaration von Variablen welche strikte block-scoping regeln befolgen.

`constant foo = 1;`

Deklaration von Variablen wie mit let, welche jedoch nicht verändert werden können.

### Nenne 3 Engineering Prinzipien
von Fabio Cavalera - Donnerstag, 23. Juni 2016, 08:38

- DRY (Don't Repeat Yourself)  
- YAGNI (You Ain't Gonna Need it)  
- KISS (Keep It Simple and Stupid)

### Welche Typen von Decorators gibt es?
von Anton Kammermeier - Donnerstag, 23. Juni 2016, 08:13

Decorators Typen:  
a) Class  
b) Namespace  
c) Method  
d) Property  
e) Accessor  
f) Parameter

Lösung:  
a), c), d), e), f)

Beschreibung:  
[Decorators](http://www.typescriptlang.org/docs/handbook/decorators.html)

### Was ist der Unterschied von einer for...in zu einer for...of Schlaufe?
von Marcel Tinner - Mittwoch, 22. Juni 2016, 17:41

- Bei einer for...in Schlaufe wird über den Key iteriert und funktioniert auch auf Objekte.
- Eine for...of Schlaufe iteriert über die Werte und kann nicht auf ein Objekt angewendet werden.

```javascript
let list = [4, 5, 6];
for (let i in list) {
  console.log(i); // "0", "1", "2"
}
for (let i of list) {
  console.log(i); // "4", "5", "6"
}
```

### Was heisst S. O. L. I. D. ?
von Marc Labud - Sonntag, 13. November 2016, 11:35

* **S**.ingle responsibility principle  
* **O**.pen for extension, closed for modification principle  
* **L**.iskov substitution principle (Design by contract)  
* **I**.nterface segregation principle  
* **D**.ependency inversion principle

=> Das Verständnis für SOLID ist wichtig. Wird aber nicht auswendig erwartet

### Nenne zwei (grosse) Vorteile von TypeScript gegenüber ES5-JavaScript
von Tobias Buechel - Mittwoch, 22. Juni 2016, 17:27

- Static Typing
- ES6/7 Features
