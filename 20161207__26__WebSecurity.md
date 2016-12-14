# Fragen CAS-FEE - Prüfungsvorbereitung

## [26] 07.12.2016 - Web Security

### Welche Rollen gibt es in OAuth?
von Peter Bartholet - Montag, 12. Dezember 2016, 08:41

Resource Owner

- Er kann Zugriff auf geschützte Ressourcen erlauben.
- Eine Person (User) oder eine Maschine.

Resource Server

- Server auf dem die geschützten Ressourcen liegen.
- Gewährt den Zugriff mittels Access Token.

Client

- Anwendung die ausgeführt wird und auf geschützte Ressourcen zugreift.
- Dieser Client kann irgendwo ausgeführt werden, wie auf einem Server, mobilen Gerät, PC etc.

Authorization Server

- Authentisiert den Ressource Owner.
- Stellt die Access Tokens aus für die Anwendungen, die der Ressource Owner erlaubt hat.

### Passwortverschlüsselung: Wie können Hash-Passwörter sicherer gemacht werden?
von Peter Bartholet - Montag, 12. Dezember 2016, 08:06

Gehashte Passwörter reichen heute nicht mehr. Sie können mit Wörterbuchangriffen (mit Hilfe von Rainbow-Tabellen) gehackt werden. Man verwendet zusätzlich Salt. Dies ist eine zufällig gewählte Zeichenfolge, die vor der Veschlüsselung dem Passwort angehängt werden. Dies vermeidet zwar das Knacken von Passwörter nicht, erschwert es aber erheblich. Weil der Wert aus Passwort und Salt nicht mit Werten in den erwähnten Tabellen verglichen werden kann.

### XSS: Was ist Cross-Site Scripting und wie lässt es sich verhindern?
von Michel Rimbeaux - Samstag, 10. Dezember 2016, 20:59

Mit Cross-Site Scripting (XSS) wird das Ausnutzen einer Computersicherheitslücke in Webanwendungen bezeichnet, indem ein Angreifer Webseiten mit clientseitigen Skripten infiziert, die von anderen Nutzern aufgerufen werden.

Mögliche Lösungen zur Verhinderung von XSS:

1.) Ouput in HTML-Entitäten konvertieren:
   ```
    \< --\> \&lt;
    \> --\> \&gt;
    " --\> \&quot;
    ' --\> \&apos;
```
2.) Blacklisting
3.) Whitelisting

### SOP: Welche der folgenden URLs erfüllen die Same Origin Policy?
von Michel Rimbeaux - Samstag, 10. Dezember 2016, 19:31

Ein in der Datei http://www.example.com/dir/page.html eingebettetes Skript versucht, auf ein Element in den folgenden Seiten zuzugreifen:

| angesprochene URL | Ergebnis | Grund |
|-------------------|----------|-------|
| http://www.example.com/dir/page2.html	| ✔ Ja |	selbes Protokoll und Host |
| http://www.example.com/dir2/other.html |	✔ Ja |	selbes Protokoll und Host |
| http://www.example.com:81/dir/other.html |	✘ Nein |	selbes Protokoll und Host, aber anderer Port |
| https://www.example.com/dir/other.html |	✘ Nein |	anderes Protokoll |
| http://en.example.com/dir/other.html |	✘ Nein |	anderer Host |
| http://example.com/dir/other.html	| ✘ Nein |	anderer Host (genaue Übereinstimmung benötigt) |
| http://v2.www.example.com/dir/other.html |	✘ Nein	| anderer Host (genaue Übereinstimmung benötigt) |
|  http://www.example.com:80/dir/other.html	| N/A |	Port eindeutig. Hängt von der Implementierung des Browsers ab. |

### Session Attacks: Wie kann man sich eines anderen Benutzers Session ausgeben?
von Michel Rimbeaux - Samstag, 10. Dezember 2016, 19:13

Cookie Editor
Intercepting proxy (e.g. Burp, ZAP, ...)

###  Was ist die Defintion von "Strong authentication"?
von Michel Rimbeaux - Samstag, 10. Dezember 2016, 22:03

Definition of Strong authentication:
Combination of at least 2 Factors of Authentication (3 variants)

Factors of Authentication (3 variants)
To KNOW something: Password, PIN
To OWN something: Smartcard, SecurId, Safeword, Vasco, OTP
To BE something: Fingerprint, Iris, Voice, Face

### Welches sind die 10 kritischsten Web Application Security Risiken? Nenne min. 4 davon
von Michel Rimbeaux - Samstag, 10. Dezember 2016, 17:53

- A1 Injection
- A2 Broken Authentication and Session Management
- A3 Cross-Site Scripting (XSS)
- A4 Insecure Direct Object References
- A5 Security Misconfiguration
- A6 Sensitive Data Exposure
- A7 Missing Function Level Access Control
- A8 Cross-Site Request Forgery (CSRF)
- A9 Using Components with Known Vulnerabilities
- A10 Unvalidated Redirects and Forwards.

https://www.owasp.org/index.php/Category:OWASP_Top_Ten_Project

### Durch welceh drei Parameter definiert sich die Same Origin Policy
von Tobias Buechel - Mittwoch, 7. Dezember 2016, 20:31

Protokoll + Host + Port

### Weshalb sollte vermieden werden Sessions in der URL zu haben?
von Daniel Kellenberger - Mittwoch, 7. Dezember 2016, 19:50

- ist in den logs lesbar

könnte in bookmarks gespeichert bleiben und von jemandem anderen übernommen werden.
besser wäre:

session id im cookie zu behalten

### Was sind Rainbow-Tables?
von Tobias Buechel - Mittwoch, 7. Dezember 2016, 18:24

Vorberechnete Tabellen um Klartext-Passwörter aus Hashes zu finden.

### Wie kan man sich bei einem System das nicht gegen SQL Injection geschützt ist einloggen ohne das Passwort zu kennen?
von Patrik Dietschweiler - Mittwoch, 7. Dezember 2016, 17:59

Password: 'or'1'='1