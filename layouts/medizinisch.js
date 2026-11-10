(function () {
  window.CV_LAYOUTS = window.CV_LAYOUTS || {};

  window.CV_LAYOUTS["medizinisch"] = {
    name: "Medizinisch",
    desc: "Clean & vertrauenswürdig – ideal für Arztpraxen, Kliniken und Gesundheitswesen",
    accent: "#0d9488",

    css: `
      .cv-root {
        font-family: 'Roboto', 'Segoe UI', 'Calibri', sans-serif;
        font-size: 9.5px;
        line-height: 1.55;
        color: #222;
      }

      /* ── Header band ── */
      .cv-med-header {
        background: linear-gradient(135deg, #0f766e 0%, #0d9488 40%, #14b8a6 100%);
        padding: 22px 22mm 18px;
        display: flex;
        align-items: flex-start;
        gap: 20px;
        color: #fff;
      }

      .cv-photo {
        width: 100px; height: 130px;
        object-fit: cover;
        border: 3px solid rgba(255,255,255,0.4);
        border-radius: 4px;
        flex-shrink: 0;
      }

      .cv-header-content { flex: 1; padding-top: 4px; }

      .cv-header-name {
        font-size: 24px;
        font-weight: 800;
        letter-spacing: 0.3px;
        margin-bottom: 2px;
      }

      .cv-header-title {
        font-size: 13px;
        font-weight: 400;
        letter-spacing: 1px;
        text-transform: uppercase;
        opacity: 0.9;
        margin-bottom: 12px;
      }

      .cv-header-contact {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        font-size: 9px;
        color: rgba(255,255,255,0.85);
      }
      .cv-header-contact span {
        display: inline-flex;
        align-items: center;
        gap: 4px;
      }
      .cv-header-contact svg { color: rgba(255,255,255,0.7); }

      /* ── Highlight box (Qualifikation) ── */
      .cv-highlight {
        margin: 0 22mm;
        padding: 10px 16px;
        background: #f0fdfa;
        border-left: 3px solid #0d9488;
        font-size: 9.5px;
        line-height: 1.5;
        color: #333;
        margin-top: -1px;
      }
      .cv-highlight-label {
        font-weight: 700;
        color: #0d9488;
        font-size: 9px;
        text-transform: uppercase;
        letter-spacing: 0.8px;
        margin-bottom: 3px;
      }

      /* ── Body ── */
      .cv-body {
        padding: 14px 20mm 12mm;
      }

      /* ── Section headers ── */
      .cv-sh {
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 0.5px;
        text-transform: uppercase;
        color: #0f766e;
        margin-top: 15px;
        margin-bottom: 2px;
      }
      .cv-sh-line {
        height: 2px;
        background: linear-gradient(90deg, #0d9488 0%, #99f6e4 100%);
        margin-bottom: 9px;
      }

      /* ── Experience: position mode ── */
      .cv-entry { margin-bottom: 10px; display: flex; }
      .cv-entry-left {
        width: 70px; min-width: 70px;
        font-size: 9px; color: #666;
        padding-top: 6px; padding-right: 8px;
        line-height: 1.25;
      }
      .cv-entry-right {
        flex: 1;
        border-top: 2px solid #0d9488;
        padding-top: 5px;
      }
      .cv-entry-main { font-weight: 700; font-size: 10.5px; color: #1a1a1a; }
      .cv-entry-sub { color: #0f766e; font-weight: 500; font-size: 10px; margin-top: 1px; }
      .cv-entry-ul { margin: 3px 0 0; padding-left: 14px; }
      .cv-entry-ul li { margin-bottom: 1px; color: #444; }

      /* ── Experience: company mode ── */
      .cv-cg { margin-bottom: 15px; }
      .cv-cg-head { display: flex; }
      .cv-cg-left {
        width: 70px; min-width: 70px;
        font-size: 9.5px; color: #666;
        padding-top: 6px; padding-right: 8px;
        line-height: 1.25;
      }
      .cv-cg-right {
        flex: 1;
        border-top: 2.5px solid #0d9488;
        padding-top: 5px;
      }
      .cv-cg-name { font-weight: 800; font-size: 11px; color: #1a1a1a; }
      .cv-cg-positions {
        margin-left: 70px;
        margin-top: 2px;
      }
      .cv-sub { margin-left: 0; padding: 2.5px 0; }
      .cv-sub:first-child { padding-top: 1px; }
      .cv-sub-head { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 1.5px; }
      .cv-sub-role { font-weight: 600; font-size: 10px; color: #0f766e; font-style: italic; }
      .cv-sub-period { font-size: 8.5px; color: #888; }
      .cv-sub-ul { margin: 2px 0 0; padding-left: 14px; }
      .cv-sub-ul li { margin-bottom: 1px; color: #444; }
      .cv-sub + .cv-sub { border-top: 1px solid #e0e0e0; padding-top: 4px; }
      .cv-pushed-top { border-top: none !important; padding-top: 0 !important; }

      /* ── Education ── */
      .cv-edu { margin-bottom: 6px; display: flex; }
      .cv-edu-left {
        width: 70px; min-width: 70px;
        font-size: 9px; color: #666;
        padding-top: 6px; padding-right: 8px;
        line-height: 1.25;
      }
      .cv-edu-right { flex: 1; border-top: 2px solid #0d9488; padding-top: 5px; }
      .cv-edu-main { font-weight: 700; font-size: 10.5px; color: #1a1a1a; }
      .cv-edu-sub { color: #555; font-size: 10px; }

      /* ── Skills table ── */
      .cv-sk { width: 100%; border-collapse: collapse; }
      .cv-sk td { padding: 3.5px 0; vertical-align: top; border-bottom: 1px solid #eee; }
      .cv-sk .skl { width: 110px; font-weight: 600; color: #0f766e; }
      .cv-sk .skv { padding-left: 16px; }
      .cv-sk-item { margin-bottom: 3.5px; line-height: 1.4; }
      .cv-sk-item:last-child { margin-bottom: 0; }
      .cv-sk-key { font-weight: 700; color: #1a1a1a; }
      .cv-sk-val { color: #333; }
      .cv-sk-badge {
        display: inline;
        font-size: inherit;
        font-weight: inherit;
        color: inherit;
        background: transparent;
        border: none;
        padding: 0;
        margin: 0;
        line-height: inherit;
        white-space: normal;
      }
      .cv-sk-badge-expert,
      .cv-sk-badge-adv,
      .cv-sk-badge-basic {
        color: inherit;
        font-weight: inherit;
        font-style: inherit;
      }

      /* ── Personal table (hidden – contact is in header) ── */
      .cv-pt { display: none; }

      /* ── Signature ── */
      .cv-sig-block { margin-top: 14px; }
      .cv-sig-location { font-size: 9.5px; color: #555; margin-bottom: 4px; }
      .cv-sig-img { max-height: 40px; max-width: 160px; }
    `,

    render: function (data, grouping, h) {
      var out = "";

      // ── Header band with photo, name, title, contact ──
      out += '<div class="cv-med-header">';
      if (data.photo) {
        out += '<img class="cv-photo" src="' + h.escAttr(data.photo) + '" alt="" aria-hidden="true">';
      }
      out += '<div class="cv-header-content">';

      // Name
      out += '<h1 class="cv-header-name">' + h.esc(data.personal.name) + '</h1>';

      // Professional title (from skills.other first line, or fallback)
      if (data.personal.title) {
        out += '<div class="cv-header-title">' + h.esc(data.personal.title) + '</div>';
      }

      // Contact info with accessible ATS-friendly labels
      out += '<div class="cv-header-contact">';
      if (data.personal.birthdate) out += '<span><span aria-hidden="true">' + h.icons.birth + '</span><span class="sr-only">' + (h.t ? h.t('birthdate') : 'Geburtsdaten') + ': </span> ' + h.esc(data.personal.birthdate) + '</span>';
      if (data.personal.address) out += '<span><span aria-hidden="true">' + h.icons.address + '</span><span class="sr-only">' + (h.t ? h.t('address') : 'Adresse') + ': </span> ' + h.esc(data.personal.address.replace(/\n/g, ', ')) + '</span>';
      if (data.personal.phone) out += '<span><span aria-hidden="true">' + h.icons.phone + '</span><span class="sr-only">' + (h.t ? h.t('phone') : 'Telefon') + ': </span> ' + h.esc(data.personal.phone) + '</span>';
      if (data.personal.email) out += '<span><span aria-hidden="true">' + h.icons.email + '</span><span class="sr-only">' + (h.t ? h.t('email') : 'E-Mail') + ': </span> ' + h.esc(data.personal.email) + '</span>';
      if (data.personal.linkedin && data.personal.linkedin.trim()) {
        var rawUrl = data.personal.linkedin.trim();
        var href = /^https?:\/\//i.test(rawUrl) ? rawUrl : ('https://' + rawUrl);
        var display = rawUrl.replace(/^https?:\/\/(www\.)?/i, '');
        out += '<span><span aria-hidden="true">' + (h.icons.linkedin || '🔗') + '</span><span class="sr-only">LinkedIn: </span> <a href="' + h.escAttr(href) + '" target="_blank" rel="noopener" style="color:inherit; text-decoration:underline;">' + h.esc(display) + '</a></span>';
      }
      out += '</div>';
      out += '</div></div>';

      // ── Highlight box (optional – for qualification summary) ──
      if (data.personal.highlight) {
        out += '<div class="cv-highlight">';
        out += '<div class="cv-highlight-label"><span class="sr-only">Summary / </span>' + (h.t ? h.t('qualification_profile') : 'Qualifikationsprofil') + '</div>';
        out += '<p>' + h.esc(data.personal.highlight) + '</p>';
        out += '</div>';
      }

      out += '<div class="cv-body">';

      // Experience
      out += '<h2 class="cv-sh cv-sh-splittable"><span class="sr-only">Work Experience / </span>' + (h.t ? h.t('experience') : 'Berufserfahrung') + '</h2><div class="cv-sh-line" aria-hidden="true"></div>';
      out += h.renderExperience(data, grouping, h.lang);

      // Education
      out += '<h2 class="cv-sh"><span class="sr-only">Education / </span>' + (h.t ? h.t('education') : 'Ausbildung') + '</h2><div class="cv-sh-line" aria-hidden="true"></div>';
      for (var e = 0; e < data.education.length; e++) {
        var edu = data.education[e];
        var eduPeriod = h.formatPeriod ? h.formatPeriod(edu.period, h.lang) : edu.period;
        out += '<article class="cv-edu"><div class="cv-edu-left">' + h.esc(eduPeriod) + '</div>';
        out += '<div class="cv-edu-right"><h3 class="cv-edu-main">' + h.esc(edu.institution) + '</h3>';
        out += '<div class="cv-edu-sub">' + h.esc(edu.degree) + '</div></div></article>';
      }

      // Skills
      var sRows = [
        { l: (h.t ? h.t("languages") : "Sprachen"), v: data.skills.languages },
        { l: (h.t ? h.t("technical_skills") : "Fachkenntnisse"), v: data.skills.technical },
        { l: (h.t ? h.t("other") : "Sonstiges"), v: data.skills.other }
      ];
      var hasAnySkill = sRows.some(function(row) { return row.v && row.v.trim(); });
      if (hasAnySkill) {
        out += '<h2 class="cv-sh"><span class="sr-only">Skills &amp; Competencies / </span>' + (h.t ? h.t('skills') : 'Kenntnisse') + '</h2><div class="cv-sh-line" aria-hidden="true"></div>';
        out += '<table class="cv-sk" role="presentation"><tbody>';
        for (var s = 0; s < sRows.length; s++) {
          if (sRows[s].v && sRows[s].v.trim()) {
            var valFormatted = h.formatSkills ? h.formatSkills(sRows[s].v, h.lang) : h.esc(sRows[s].v);
            out += '<tr><td class="skl">' + h.esc(sRows[s].l) + '<span class="sr-only">: </span></td><td class="skv">' + valFormatted + '</td></tr>';
          }
        }
        out += '</tbody></table>';
      }

      // Optional sections
      out += h.renderOptionalSections(data, h.lang);

      // Signature
      out += h.renderSignature(data, h.lang);

      out += '</div>'; // cv-body
      return out;
    }
  };
})();
