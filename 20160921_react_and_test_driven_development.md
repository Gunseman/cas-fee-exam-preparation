# Fragen CAS-FEE - Prüfungsvorbereitung

## [17] 21.09.2016 - React and test driven development

### Was ist ein Virtual DOM
von Thomas Brandenburger - Mittwoch, 23. November 2016, 17:07

Virtual DOM ist eine Abstraktion des realen DOM. Es beinhaltet alle benötigten Details um das DOM zu erstellen, aber weil es nicht all die vielen Informationen die ein DOM braucht, kann es schneller erstellt und geändert werden. Bei Änderungen wird die alte Version und die neue Version verglichen und so wird nur der Teil der geändert wurde neu hinzugefügt, anstatt das das ganze DOM erneut gerendert wird.

### Was ist der unterschied zwischen einer simplen "Component" und einer "stateful Component"?
von Thilo Holzer - Mittwoch, 16. November 2016, 17:35

Die "stateful Component" kann einen (internen/isolierten) Datenspeicher bereithalten, welchen die simple Component nicht hat.

Daten werden üblicherweise über "props" (Attribut) übergeben.

### Wähle die korrekte Antwort
von David Heim - Sonntag, 2. Oktober 2016, 16:38

a. Bei React müssen HTML- und JavaScript-Code strikt getrennt werden

b. Bei React wird HTML- und JavaScript-Code üblicherweise kombiniert geschrieben

Richtige Antwort: b.

Es ist die Philosophie von React, dass HTML- und JavaScript-Code eng zusammen geschrieben werden. Komponenten werden in JavaScript definiert, enthalten aber meistens aber auch HTML-Code. Das JSX-Format erleichtert das Einfügen von HTML-Elementen im Javascript-File.

### Was ist JSX und deren Aufgabe ?
von Philipp Bachmann - Freitag, 23. September 2016, 21:34

React bringt mit JSX eine JS-Spracherweiterung, um das Schreiben von HTML Elementen zu erleichtern. Damit lässt sich HTML-Code direkt in den JS Code schreiben

Beispiel:
```javascript
const hi = <h1>Hi there</h1>:
```

### React-Componenten verwenden die methoden createClass(), render() . Welche Aufgabe haben diese Methoden ?
von Marc Labud - Donnerstag, 22. September 2016, 12:18

**createClass()**:

Mit `React.createClass()` wird die React-Component erzeugt.

Code-Beispiel:
```javascript
const MyComponent = React.createClass({
  render: function() {
    return <div className={this.props.className}/>;
  }
});
```

Mit ES6 kann auch die React-Component auch mit
```javascript
class MyComponent extends React.Component {
  render() {
    return <div className={this.props.className}/>;
  }
}
```
angelegt werden.

**render()**:

render() erzeugt ein einzelnes Kind Element einer virtuellen Abbildung eines nativen Dom-Elements. Im realen DOM werden nur die Unterschiede zum virtuellen DOM aktualisiert. Dies ist die Ursache für die hohe Geschwindigkeit des Renderns von React.
