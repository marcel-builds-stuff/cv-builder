(function () {
  window.CV_LAYOUTS = window.CV_LAYOUTS || {};

  // Marginalie: Abschnittstitel stehen in einer schmalen linken Randspalte,
  // der Inhalt läuft rechts davon in einer Spalte. Serifenschrift für Name,
  // Rollen und Kurzprofil, sonst serifenlos. Farbe nur als Kupferakzent.
  //
  // Geometrie (A4, 210 mm): Seitenrand links und rechts 17 mm,
  // Randspalte 32 mm, Inhaltsspalte 144 mm. Abschnittstitel haben die Höhe 0
  // und ragen in die Randspalte; dadurch bleiben sie im normalen Fluss und die
  // gemeinsamen Seitenumbruch-Regeln (.cv-sh, .cv-entry, .cv-sk tr ...) greifen.

  window.CV_LAYOUTS["marginalie"] = {
    name: "Marginalie",
    desc: "Ruhig & typografisch – Abschnittstitel in der Randspalte, Serifenschrift, ein Kupferakzent",
    accent: "#B5562E",

    css: `
      .cv-root {
        font-family: 'Source Sans 3', 'Segoe UI', Arial, sans-serif;
        font-size: 9.6px;
        line-height: 1.5;
        color: #2B2A28;
        background: #ffffff;
      }
      .cv-mg {
        padding: 16mm 17mm 12mm 49mm; /* 17 mm Rand + 32 mm Randspalte */
      }

      /* ── Kopf ── */
      .cv-mg-head {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        gap: 18px;
        margin: 0 0 16px -32mm;
      }
      .cv-mg-head-main { flex: 1; min-width: 0; }
      .cv-mg-name {
        font-family: 'Source Serif 4', Georgia, 'Times New Roman', serif;
        font-size: 28px;
        font-weight: 600;
        letter-spacing: -0.3px;
        line-height: 1.1;
        color: #1B1A18;
      }
      .cv-mg-title {
        margin-top: 5px;
        font-size: 11px;
        color: #4A4744;
      }
      .cv-mg-contact {
        margin-top: 8px;
        font-size: 8.8px;
        line-height: 1.6;
        color: #5E5A55;
      }
      .cv-mg-contact-item { white-space: nowrap; }
      .cv-mg-contact a { color: inherit; text-decoration: none; }
      .cv-mg-sep { padding: 0 6px; color: #B9B2A9; }
      .cv-mg-rule {
        width: 28px;
        height: 2px;
        margin-top: 11px;
        background: #B5562E;
      }
      .cv-mg-photo {
        width: 76px;
        height: 76px;
        flex-shrink: 0;
        border-radius: 50%;
        object-fit: cover;
        display: block;
      }

      /* ── Abschnittstitel in der Randspalte ── */
      /* Die Haarlinie ist der obere Rand des Titels; der rechte Innenabstand
         verlängert sie über die Inhaltsspalte (28 + 148 = 176 mm), während der
         Text auf die 28 mm der Randspalte begrenzt bleibt. Keine Positionierung:
         Chrome würde positionierte Elemente erst am Seitenende ins PDF schreiben. */
      .cv-sh {
        width: 28mm;
        height: 0;
        margin: 15px 0 -2.75px -32mm;
        padding: 10px 148mm 0 0;
        border-top: 0.75px solid #DDD7CF;
        box-sizing: content-box;
        font-size: 7.4px;
        font-weight: 700;
        line-height: 1.4;
        letter-spacing: 1.2px;
        text-transform: uppercase;
        color: #B5562E;
      }
      .cv-sh-line {
        height: 0;
        margin: 0;
        border: 0;
        background: none;
      }

      /* ── Kurzprofil ── */
      .cv-mg-profile {
        font-family: 'Source Serif 4', Georgia, 'Times New Roman', serif;
        font-size: 10.2px;
        line-height: 1.55;
        color: #2B2A28;
      }

      /* ── Einträge: Daten rechtsbündig auf der Titelzeile ──
         Raster statt Positionierung (siehe Abschnittstitel): display: contents
         macht Titel, Rolle und Aufgaben zu Rasterzellen, das Datum steht rechts. */
      .cv-entry, .cv-edu {
        display: grid;
        grid-template-columns: minmax(0, 1fr) auto;
        column-gap: 12px;
        margin-bottom: 10px;
      }
      .cv-entry-right, .cv-edu-right { display: contents; }
      .cv-entry-right > *, .cv-edu-right > * { grid-column: 1 / -1; }
      .cv-entry-main, .cv-edu-main { grid-column: 1; grid-row: 1; }
      .cv-entry-left, .cv-edu-left { grid-column: 2; grid-row: 1; align-self: start; }
      .cv-cg-head { display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; }
      .cv-cg-left { order: 2; }
      .cv-entry-left, .cv-edu-left, .cv-cg-left {
        font-size: 8.4px;
        line-height: 14px;
        color: #7A746D;
        font-variant-numeric: tabular-nums;
        white-space: nowrap;
      }
      .cv-entry-main, .cv-edu-main, .cv-cg-name {
        font-size: 10.5px;
        font-weight: 700;
        line-height: 14px;
        word-spacing: 0.1em;
        color: #1B1A18;
      }
      .cv-entry-sub, .cv-edu-sub {
        margin-top: 1px;
        font-family: 'Source Serif 4', Georgia, 'Times New Roman', serif;
        font-style: italic;
        font-size: 10px;
        color: #4A4744;
      }
      .cv-entry-ul, .cv-sub-ul {
        margin-top: 4px;
        padding-left: 12px;
        list-style-type: '–';
      }
      .cv-entry-ul li, .cv-sub-ul li {
        padding-left: 5px;
        margin-bottom: 2px;
        line-height: 1.45;
      }
      .cv-entry-ul li::marker, .cv-sub-ul li::marker { color: #B5562E; }

      /* ── Gruppierung nach Firmen ── */
      .cv-cg { margin-bottom: 11px; }
      .cv-cg-left { color: #5E5A55; font-weight: 600; }
      .cv-cg-positions { margin-top: 3px; }
      .cv-sub { padding: 1px 0; }
      .cv-sub + .cv-sub { margin-top: 6px; }
      .cv-sub-head {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        gap: 12px;
      }
      .cv-sub-role {
        font-family: 'Source Serif 4', Georgia, 'Times New Roman', serif;
        font-style: italic;
        font-size: 10px;
        color: #2B2A28;
      }
      .cv-sub-period {
        font-size: 8.4px;
        color: #7A746D;
        font-variant-numeric: tabular-nums;
        white-space: nowrap;
      }

      /* ── Kenntnisse ── */
      .cv-sk { width: 100%; border-collapse: collapse; }
      .cv-sk td { padding: 0 0 6px; vertical-align: top; }
      .cv-sk .skl {
        width: 26mm;
        padding-right: 10px;
        font-weight: 600;
        color: #1B1A18;
      }
      .cv-sk-item { margin-bottom: 2px; }
      .cv-sk-item:last-child { margin-bottom: 0; }
      .cv-sk-key { font-weight: 600; color: #1B1A18; }
      .cv-sk-badge { color: #7A746D; }

      /* ── Unterschrift ── */
      .cv-sig-block { margin-top: 18px; }
      .cv-sig-location { font-size: 9px; color: #5E5A55; margin-bottom: 4px; }
      .cv-sig-img { max-height: 38px; max-width: 160px; }

      .cv-pushed-top { border-top: none !important; padding-top: 0 !important; }

      /* Seitenzahl passend zur Schrift des Layouts */
      .cv-page-num {
        font-family: 'Source Sans 3', 'Segoe UI', Arial, sans-serif;
        font-size: 8px;
        letter-spacing: 0.4px;
        color: #9A938B;
        right: 17mm;
      }
    `,

    render: function (data, grouping, h) {
      var t = function (key, fallback) { return h.t ? h.t(key) : fallback; };
      var out = '<div class="cv-mg">';

      function displayName(value) {
        var raw = (value || '').trim();
        if (raw.indexOf(',') < 0) return raw;
        var parts = raw.split(',');
        var family = parts.shift().trim();
        var given = parts.join(',').trim();
        return (given + ' ' + family).trim();
      }
      function section(srLabel, label) {
        return '<h2 class="cv-sh"><span class="sr-only">' + srLabel + ' / </span>' + h.esc(label) + '</h2>' +
               '<div class="cv-sh-line" aria-hidden="true"></div>';
      }

      var p = data.personal || {};
      var fullName = p.name ? displayName(p.name) : t('cv_title', 'LEBENSLAUF');

      // ── Kopf: Name, Rolle, Kontaktzeile, Kupferlinie, optional Foto ──
      out += '<header class="cv-mg-head"><div class="cv-mg-head-main">';
      out += '<h1 class="cv-mg-name">' + h.esc(fullName) + '</h1>';
      if (p.title && p.title.trim()) out += '<div class="cv-mg-title">' + h.esc(p.title.trim()) + '</div>';

      var contact = [];
      if (p.address && p.address.trim()) contact.push(h.esc(p.address.replace(/\r?\n/g, ', ')));
      if (p.phone && p.phone.trim()) contact.push(h.esc(p.phone.trim()));
      if (p.email && p.email.trim()) {
        contact.push('<a href="' + h.escAttr('mailto:' + p.email.trim()) + '">' + h.esc(p.email.trim()) + '</a>');
      }
      if (p.linkedin && p.linkedin.trim()) {
        var lk = p.linkedin.trim();
        var href = /^https?:\/\//i.test(lk) ? lk : ('https://' + lk);
        contact.push('<a href="' + h.escAttr(href) + '" target="_blank" rel="noopener">' +
                     h.esc(lk.replace(/^https?:\/\/(www\.)?/i, '').replace(/\/$/, '')) + '</a>');
      }
      if (p.birthdate && p.birthdate.trim()) contact.push(h.esc(p.birthdate.trim()));
      if (contact.length) {
        out += '<div class="cv-mg-contact">' + contact.map(function (c) {
          return '<span class="cv-mg-contact-item">' + c + '</span>';
        }).join('<span class="cv-mg-sep" aria-hidden="true">·</span>') + '</div>';
      }
      out += '<div class="cv-mg-rule" aria-hidden="true"></div>';
      out += '</div>';
      if (data.photo) {
        out += '<img class="cv-mg-photo cv-photo" src="' + h.escAttr(data.photo) + '" alt="" aria-hidden="true">';
      }
      out += '</header>';

      // ── Kurzprofil ──
      if (p.highlight && p.highlight.trim()) {
        out += section('Summary', t('short_profile', 'Kurzprofil'));
        out += '<p class="cv-mg-profile">' + h.esc(p.highlight.trim()) + '</p>';
      }

      // ── Berufserfahrung ──
      out += section('Work Experience', t('experience', 'Berufserfahrung')).replace('class="cv-sh"', 'class="cv-sh cv-sh-splittable"');
      out += h.renderExperience(data, grouping, h.lang);

      // ── Ausbildung ──
      if (data.education && data.education.length) {
        out += section('Education', t('education', 'Ausbildung'));
        for (var e = 0; e < data.education.length; e++) {
          var edu = data.education[e];
          var eduPeriod = h.formatPeriod ? h.formatPeriod(edu.period, h.lang) : edu.period;
          out += '<article class="cv-edu"><div class="cv-edu-left">' + h.esc(eduPeriod) + '</div>' +
                 '<div class="cv-edu-right"><h3 class="cv-edu-main">' + h.esc(edu.institution) + '</h3>' +
                 '<div class="cv-edu-sub">' + h.esc(edu.degree) + '</div></div></article>';
        }
      }

      // ── Kenntnisse ──
      var rows = [
        { l: t('languages', 'Sprachen'), v: data.skills.languages },
        { l: t('skills', 'Kenntnisse'), v: data.skills.technical },
        { l: t('other', 'Sonstiges'), v: data.skills.other }
      ].filter(function (r) { return r.v && r.v.trim(); });
      if (rows.length) {
        out += section('Skills', t('skills', 'Kenntnisse'));
        out += '<table class="cv-sk" role="presentation"><tbody>';
        for (var s = 0; s < rows.length; s++) {
          var val = h.formatSkills ? h.formatSkills(rows[s].v, h.lang) : h.esc(rows[s].v);
          out += "<tr><td class='skl'>" + h.esc(rows[s].l) + "<span class='sr-only'>: </span></td>" +
                 "<td class='skv'>" + val + '</td></tr>';
        }
        out += '</tbody></table>';
      }

      // ── Zertifikate, Projekte, Ehrenamt ──
      out += h.renderOptionalSections(data, h.lang);

      // ── Unterschrift ──
      out += h.renderSignature(data, h.lang);

      out += '</div>';
      return out;
    }
  };
})();
