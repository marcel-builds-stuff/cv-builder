(function () {
  window.CV_LAYOUTS = window.CV_LAYOUTS || {};

  window.CV_LAYOUTS["klassisch"] = {
    name: "Klassisch",
    desc: "Professionell & konservativ – ideal für Konzerne und Banken",
    accent: "#0077b6",

    css: `
      .cv-root {
        font-family: 'Segoe UI', 'Calibri', 'Helvetica Neue', sans-serif;
        font-size: 10px;
        line-height: 1.48;
        color: #222;
      }

      /* ── Top accent bar ── */
      .cv-deco-top {
        height: 14px;
        background: linear-gradient(135deg, #003d5c 0%, #0077b6 55%, #00a8e8 100%);
      }

      /* ── Geometric triangles ── */
      .cv-deco-geo {
        position: absolute;
        top: 14px; left: 0;
        width: 80px; height: 100px;
        overflow: hidden; z-index: 2;
      }
      .cv-deco-geo::before {
        content: '';
        position: absolute;
        top: 0; left: 0;
        border-bottom: 80px solid transparent;
      }
      .cv-deco-geo::after {
        content: '';
        position: absolute;
        top: 0; left: 0;
        border-left: 48px solid #0077b6;
        border-bottom: 100px solid transparent;
      }

      /* ── Photo ── */
      .cv-photo {
        position: absolute;
        top: 108px; left: 11mm;
        width: 112px; height: 148px;
        object-fit: cover;
        border: 2px solid #e0e4e8;
        border-radius: 3px;
        z-index: 3;
        background: #f5f5f5;
        box-sizing: border-box;
      }

      /* ── Body ── */
      .cv-body {
        padding: 16px 20mm 12mm 20mm;
        position: relative; z-index: 1;
      }
      .cv-body.has-photo {
        padding-top: 16px;
      }

      /* ── Title & Subtitle ── */
      .cv-title {
        font-size: 22px;
        font-weight: 800;
        color: #1a1a1a;
        letter-spacing: 0.2px;
        line-height: 1.15;
        margin-bottom: 3px;
      }
      .cv-subtitle {
        font-size: 10.5px;
        font-weight: 600;
        color: #0077b6;
        letter-spacing: 0.1px;
        line-height: 1.3;
        margin-bottom: 7px;
      }
      .cv-body.has-photo .cv-title,
      .cv-body.has-photo .cv-subtitle {
        margin-left: 105px;
      }

      /* ── Section headers ── */
      .cv-sh {
        font-size: 12px;
        font-weight: 800;
        letter-spacing: 0.3px;
        color: #1a1a1a;
        margin-top: 15px;
        margin-bottom: 2px;
      }
      .cv-sh-personal {
        margin-top: 13px;
      }
      .cv-sh-line {
        height: 2px;
        background: #0077b6;
        margin-bottom: 9px;
      }

      /* ── Personal table ── */
      .cv-pt { width: 100%; border-collapse: collapse; }
      .cv-body.has-photo .cv-pt-wrap { margin-left: 105px; min-height: 148px; }
      .cv-body.has-photo .cv-sh-personal { margin-left: 105px; }
      .cv-body.has-photo .cv-sh-line-personal { margin-left: 105px; }
      .cv-pt td { padding: 2.5px 0; vertical-align: top; border-bottom: 1px solid #eee; }
      .cv-pt .pi { width: 22px; color: #0077b6; }
      .cv-pt .pl { width: 110px; color: #0077b6; font-weight: 500; }
      .cv-pt .pv { padding-left: 12px; white-space: pre-line; }

      .cv-highlight-block {
        clear: both;
      }

      /* ── Experience: position mode ── */
      .cv-entry { margin-bottom: 10px; display: flex; }
      .cv-entry-left {
        width: 70px; min-width: 70px;
        font-size: 9px; color: #555;
        padding-top: 6px; padding-right: 8px;
        line-height: 1.25;
      }
      .cv-entry-right {
        flex: 1;
        border-top: 2px solid #0077b6;
        padding-top: 5px;
      }
      .cv-entry-main { font-weight: 700; font-size: 10px; color: #1a1a1a; }
      .cv-entry-sub { color: #333; font-size: 9.5px; margin-top: 1.5px; }
      .cv-entry-ul { margin: 3px 0 0; padding-left: 14px; }
      .cv-entry-ul li { margin-bottom: 1px; color: #333; }

      /* ── Experience: company mode ── */
      .cv-cg { margin-bottom: 15px; }
      .cv-cg-head { display: flex; }
      .cv-cg-left {
        width: 70px; min-width: 70px;
        font-size: 9px; color: #555;
        padding-top: 6px; padding-right: 8px;
        line-height: 1.25;
      }
      .cv-cg-right {
        flex: 1;
        border-top: 2.5px solid #0077b6;
        padding-top: 4px;
      }
      .cv-cg-name { font-weight: 800; font-size: 11.5px; color: #1a1a1a; }
      .cv-cg-positions {
        margin-left: 70px;
        margin-top: 2px;
      }
      .cv-sub { margin-left: 0; padding: 2.5px 0; }
      .cv-sub:first-child { padding-top: 1px; }
      .cv-sub-head { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 1.5px; }
      .cv-sub-role { font-weight: 600; font-size: 10px; color: #444; font-style: italic;}
      .cv-sub-period { font-size: 8.5px; color: #777; }
      /* Beschäftigungsdauer im Firmenkopf: läuft in den freien linken Rand, der Kopf wird nicht höher */
      .cv-cg-left .cv-duration { height: 0; margin-top: 0; overflow: visible; }
      .cv-sub-ul { margin: 2px 0 0; padding-left: 14px; }
      .cv-sub-ul li { margin-bottom: 1px; color: #333; line-height: 1.42; }
      .cv-sub + .cv-sub { border-top: 1px solid #e0e0e0; padding-top: 4px; }
      .cv-pushed-top { border-top: none !important; padding-top: 0 !important; }

      /* ── Education ── */
      .cv-edu { margin-bottom: 6px; display: flex; }
      .cv-edu-left {
        width: 70px; min-width: 70px;
        font-size: 9px; color: #555;
        padding-top: 6px; padding-right: 8px;
        line-height: 1.25;
      }
      .cv-edu-right { flex: 1; border-top: 2px solid #0077b6; padding-top: 4px; }
      .cv-edu-main { font-weight: 700; font-size: 10px; color: #1a1a1a; }
      .cv-edu-sub { color: #444; font-size: 9.5px; }

      /* ── Skills table ── */
      .cv-sk { width: 100%; border-collapse: collapse; }
      .cv-sk td { padding: 3.5px 0; vertical-align: top; border-bottom: 1px solid #eee; }
      .cv-sk .skl { width: 105px; font-weight: 600; color: #444; }
      .cv-sk .skv { padding-left: 14px; }
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

      /* ── Signature ── */
      .cv-sig-block { margin-top: 14px; }
      .cv-sig-location { font-size: 9.5px; color: #444; margin-bottom: 4px; }
      .cv-sig-img { max-height: 40px; max-width: 160px; }
    `,

    render: function (data, grouping, h) {
      let out = "";

      // Decorations
      out += '<div class="cv-deco-top" aria-hidden="true"></div>';
      out += '<div class="cv-deco-geo" aria-hidden="true"></div>';

      // Photo
      if (data.photo) {
        out += '<img class="cv-photo" src="' + h.escAttr(data.photo) + '" alt="" aria-hidden="true">';
      }

      const hasPhoto = !!data.photo;
      out += '<div class="cv-body' + (hasPhoto ? " has-photo" : "") + '">';

      function displayName(value) {
        var raw = (value || '').trim();
        if (raw.indexOf(",") < 0) return raw;
        var parts = raw.split(",");
        var family = parts.shift().trim();
        var given = parts.join(",").trim();
        return (given + " " + family).trim();
      }

      var headerName = (data.personal && data.personal.name && data.personal.name.trim())
        ? displayName(data.personal.name)
        : (h.t ? h.t('cv_title') : 'LEBENSLAUF');
      var headerTitle = (data.personal && data.personal.title) ? data.personal.title.trim() : '';

      // Title & Subtitle (Name & Professional Title)
      out += '<h1 class="cv-title">' + h.esc(headerName) + '</h1>';
      if (headerTitle) {
        out += '<div class="cv-subtitle">' + h.esc(headerTitle) + '</div>';
      }

      // Personal
      var pRows = [
        { i: "name", l: (h.t ? h.t("name") : "Name"), v: data.personal.name },
        { i: "birth", l: (h.t ? h.t("birthdate") : "Geburtsdaten"), v: data.personal.birthdate },
        { i: "address", l: (h.t ? h.t("address") : "Adresse"), v: data.personal.address },
        { i: "phone", l: (h.t ? h.t("phone") : "Telefon"), v: data.personal.phone },
        { i: "email", l: (h.t ? h.t("email") : "E-Mail"), v: data.personal.email },
        { i: "linkedin", l: "LinkedIn", v: data.personal.linkedin, isLink: true },
      ];
      var hasAnyPersonal = pRows.some(function(row) { return row.v && row.v.trim(); });
      if (hasAnyPersonal) {
        out +=
          '<h2 class="cv-sh' +
          (hasPhoto ? " cv-sh-personal" : "") +
          '"><span class="sr-only">Contact &amp; Personal Details / </span>' + (h.t ? h.t('personal_details') : 'PERSÖNLICHE DATEN') + '</h2>';
        out +=
          '<div class="cv-sh-line' +
          (hasPhoto ? " cv-sh-line-personal" : "") +
          '" aria-hidden="true"></div>';
        out +=
          '<div class="' + (hasPhoto ? "cv-pt-wrap" : "") + '">';
        out += '<table class="cv-pt" role="presentation"><tbody>';
        for (var r = 0; r < pRows.length; r++) {
          if (pRows[r].v && pRows[r].v.trim()) {
            var valHtml = h.esc(pRows[r].v);
            if (pRows[r].isLink) {
              var rawUrl = pRows[r].v.trim();
              var href = /^https?:\/\//i.test(rawUrl) ? rawUrl : ('https://' + rawUrl);
              var display = rawUrl.replace(/^https?:\/\/(www\.)?/i, '');
              valHtml = '<a href="' + h.escAttr(href) + '" target="_blank" rel="noopener" style="color:inherit; text-decoration:none; border-bottom:1px dotted #888;">' + h.esc(display) + '</a>';
            }
            out +=
              "<tr><td class='pi' aria-hidden='true'>" +
              h.icons[pRows[r].i] +
              "</td><td class='pl'>" +
              h.esc(pRows[r].l) +
              "<span class='sr-only'>: </span></td><td class='pv'>" +
              valHtml +
              "</td></tr>";
          }
        }
        out += "</tbody></table></div>";
      }

      // Summary / Highlight (if present)
      if (data.personal && data.personal.highlight && data.personal.highlight.trim()) {
        out += '<div class="cv-highlight-block"><h2 class="cv-sh"><span class="sr-only">Summary / </span>' + (h.t ? h.t('short_profile') : 'Kurzprofil') + '</h2><div class="cv-sh-line" aria-hidden="true"></div><p style="font-size:9.5px; color:#333; line-height:1.42; margin:3px 0 8px;">' + h.esc(data.personal.highlight) + '</p></div>';
      }

      // Experience
      out += '<h2 class="cv-sh cv-sh-splittable"><span class="sr-only">Work Experience / </span>' + (h.t ? h.t('experience_upper') : 'BERUFSERFAHRUNG') + '</h2><div class="cv-sh-line" aria-hidden="true"></div>';
      out += h.renderExperience(data, grouping, h.lang);

      // Education
      out += '<h2 class="cv-sh"><span class="sr-only">Education / </span>' + (h.t ? h.t('education_upper') : 'AUSBILDUNG') + '</h2><div class="cv-sh-line" aria-hidden="true"></div>';
      for (var e = 0; e < data.education.length; e++) {
        var edu = data.education[e];
        var eduPeriod = h.formatPeriod ? h.formatPeriod(edu.period, h.lang) : edu.period;
        out +=
          '<article class="cv-edu"><div class="cv-edu-left">' +
          h.esc(eduPeriod) +
          '</div><div class="cv-edu-right"><h3 class="cv-edu-main">' +
          h.esc(edu.institution) +
          '</h3><div class="cv-edu-sub">' +
          h.esc(edu.degree) +
          "</div></div></article>";
      }

      // Skills
      var sRows = [
        { l: (h.t ? h.t("languages") : "Sprachen"), v: data.skills.languages },
        { l: (h.t ? h.t("skills") : "Kenntnisse"), v: data.skills.technical },
        { l: (h.t ? h.t("other") : "Sonstiges"), v: data.skills.other },
      ];
      var hasAnySkill = sRows.some(function(row) { return row.v && row.v.trim(); });
      if (hasAnySkill) {
        out +=
          '<h2 class="cv-sh"><span class="sr-only">Skills &amp; Competencies / </span>' + (h.t ? h.t('skills_interests_upper') : 'KENNTNISSE & INTERESSEN') + '</h2><div class="cv-sh-line" aria-hidden="true"></div>';
        out += '<table class="cv-sk" role="presentation"><tbody>';
        for (var s = 0; s < sRows.length; s++) {
          if (sRows[s].v && sRows[s].v.trim()) {
            var valFormatted = h.formatSkills ? h.formatSkills(sRows[s].v, h.lang) : h.esc(sRows[s].v);
            out +=
              "<tr><td class='skl'>" +
              h.esc(sRows[s].l) +
              "<span class='sr-only'>: </span></td><td class='skv'>" +
              valFormatted +
              "</td></tr>";
          }
        }
        out += "</tbody></table>";
      }

      // Optional sections (only rendered if data exists)
      out += h.renderOptionalSections(data, h.lang);

      // Signature
      out += h.renderSignature(data, h.lang);

      out += "</div>"; // cv-body
      return out;
    },
  };
})();
