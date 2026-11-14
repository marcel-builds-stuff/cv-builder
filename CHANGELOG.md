# Änderungen

Alle nennenswerten Änderungen am CV Builder, neueste Version zuerst.
Versionsnummern nach dem Schema Hauptversion.Unterversion.Korrektur.

## v1.2.0

### Neu

- **Anschreiben:** mit eigenem Briefkopf im Stil des gewählten Layouts, dazu
  Empfänger, Betreff, Text, Grußformel, Unterschrift und Anlagen. Aufbau nach
  DIN 5008 Form B mit Rücksendezeile; die Anschrift steht an der Stelle für
  Fensterumschläge. Umschalter „Lebenslauf | Anschreiben | Beides“ über der
  Vorschau; „Beides“ legt Anschreiben und Lebenslauf in eine PDF. Details in
  der [README](README.md#anschreiben).
- **Lückenprüfung im ATS-Check:** meldet Zeiten von mehr als 3 Monaten ohne
  Eintrag im Werdegang.
- **Abgleich mit einer Stellenanzeige:** neuer Reiter im ATS-Check. Zeigt,
  welche Begriffe einer eingefügten Anzeige im Lebenslauf vorkommen, welche nur
  im Anschreiben stehen und welche fehlen. Läuft ohne KI und ohne Netzwerk.
- **Anschreiben-Check:** neuer Reiter im ATS-Check. Faustregeln zu Länge,
  Floskeln, Konjunktiv, Satzanfängen, Satzlänge und Eigenschaftswörtern. Mit
  eingefügter Stellenanzeige prüft er auch, was die Anzeige verlangt:
  Stellentitel und Kennziffer im Betreff, Gehaltsvorstellung, Eintrittstermin,
  persönliche Anrede und Unterlagen. Fehlende Angaben zu Gehalt und Eintritt
  lassen sich als Mustersatz mit Platzhalter einfügen; nicht ausgefüllte
  Platzhalter meldet auch die Vorschau. Details in der
  [README](README.md#anschreiben-prüfen).
- **Festes Datum:** Unter „Persönliche Daten“ lässt sich ein Datum für
  Anschreiben, Unterschrift und PDF-Dateinamen festlegen; ohne Angabe gilt das
  heutige. Liegt es mehr als 7 Tage zurück, gibt es einen Hinweis.
- **Einträge ausblenden:** Stationen, Ausbildung, Zertifikate, Projekte und
  Ehrenamt lassen sich im Lebenslauf ausblenden, ohne sie zu löschen. Details
  in der [README](README.md#einträge-ausblenden).
- **Erinnerung an die Datei-Sicherung:** Gibt es Änderungen und liegt die
  letzte Sicherung als JSON-Datei mindestens 7 Tage zurück, erscheint oben ein
  Hinweis, der per Klick speichert.

### Geändert

- Das Layout wird über ein Auswahlmenü mit Kurzbeschreibung gewählt statt über
  eine Reihe von Knöpfen. Die Leiste über der Vorschau braucht dadurch weniger
  Platz.
- Das ATS-Fenster ist breiter: 1050 statt 820 Pixel.

### Behoben

- Medizinisch: Der Berufstitel stand im PDF-Text am Ende der ersten Seite statt
  unter dem Namen. Für Bewerbermanagementsysteme gehörte er damit nicht mehr
  zum Namen.

## v1.1.0

### Neu

- **Beschäftigungsdauer:** wird automatisch aus den Zeiträumen berechnet, zum
  Beispiel „2 Jahre, 4 Monate“. Anzeige bei Firma und Position, nur bei einem
  von beiden oder gar nicht; einstellbar unter „Design & Dokumentensprache“.
  Rechenregeln in der [README](README.md#beschäftigungsdauer).

### Behoben

- Beim ersten Wechsel zu Editorial, Marginalie oder Medizinisch entstanden
  Lücken in der Vorschau. Die Seitenumbrüche werden jetzt neu berechnet,
  sobald die Schrift des Layouts geladen ist.

## v1.0.0

Erste Veröffentlichung.

- Editor mit Live-Vorschau als A4-Seiten
- Vier Layouts: Klassisch, Editorial, Medizinisch, Marginalie
- Bewerbungsfoto und Unterschrift, Gruppierung nach Positionen oder Firmen
- ATS-Check, Ausgabe auf Deutsch oder Englisch
- Läuft lokal im Browser, ohne Server und ohne Netzwerkanfragen
