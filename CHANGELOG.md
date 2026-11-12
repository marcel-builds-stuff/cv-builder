# Änderungen

Alle nennenswerten Änderungen am CV Builder, neueste Version zuerst.
Versionsnummern nach dem Schema Hauptversion.Unterversion.Korrektur.

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
