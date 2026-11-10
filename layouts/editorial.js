(function () {
  window.CV_LAYOUTS = window.CV_LAYOUTS || {};

  window.CV_LAYOUTS["editorial"] = {
    name: "Editorial",
    desc: "Architektonisch, minimalistisch & typografisch exzellent – Schweizer Präzisionslayout",
    accent: "#1E3A5F",

    css: `
      .cv-root {
        font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        font-size: 9.5px;
        line-height: 1.48;
        color: #334155;
        background: #ffffff;
        /* Mit Plus Jakarta Sans gehen im Chrome-PDF sonst die Leerzeichen im
           Textstrom verloren ("Testaufgabemitetwas"); Parser lesen dann Wortsalat. */
        word-spacing: 0.1em;
        font-variant-ligatures: none;
        font-feature-settings: "liga" 0, "clig" 0, "dlig" 0, "hlig" 0, "calt" 0;
      }

      /* ── Editorial Masthead (Header) ── */
      .cv-ed-header {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 20px;
        padding-bottom: 12px;
        border-bottom: 2px solid #0F172A;
        margin-bottom: 14px;
      }
      .cv-ed-header-main {
        flex: 1;
        min-width: 0;
      }
      .cv-ed-kicker {
        font-size: 8px;
        font-weight: 700;
        letter-spacing: 1.4px;
        text-transform: uppercase;
        color: #64748B;
        margin-bottom: 4px;
      }
      .cv-ed-name {
        font-size: 26px;
        font-weight: 800;
        letter-spacing: -0.4px;
        word-spacing: 0.12em; /* Leerzeichen im PDF-Textstrom erhalten, siehe .cv-root */
        line-height: 1.1;
        color: #0F172A;
        margin: 0 0 4px 0;
      }
      .cv-ed-title {
        font-size: 11px;
        font-weight: 600;
        color: #1E3A5F;
        letter-spacing: 0.15px;
        line-height: 1.35;
        margin-bottom: 10px;
      }
      .cv-ed-meta {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 6px 14px;
        font-size: 9px;
        color: #475569;
        line-height: 1.3;
      }
      .cv-ed-meta-item {
        display: inline-flex;
        align-items: center;
        gap: 4.5px;
      }
      .cv-ed-meta-item svg {
        color: #1E3A5F;
        flex-shrink: 0;
      }
      .cv-ed-meta-item a {
        color: inherit;
        text-decoration: none;
        border-bottom: 1px dotted #94A3B8;
      }
      .cv-ed-meta-item a:hover {
        color: #1E3A5F;
        border-bottom-color: #1E3A5F;
      }

      /* ── Photo Frame ── */
      .cv-ed-photo-wrap {
        flex-shrink: 0;
      }
      .cv-ed-photo {
        width: 96px;
        height: 128px;
        object-fit: cover;
        border-radius: 2px;
        border: 1px solid #CBD5E1;
        box-shadow: 0 2px 8px rgba(15, 23, 42, 0.06);
        background: #F8FAFC;
        display: block;
      }

      /* ── Body Container ── */
      .cv-body {
        padding: 18px 20mm 12mm 20mm;
      }

      /* ── Summary / Kurzprofil Lead ── */
      .cv-ed-summary {
        margin: 0 0 14px 0;
        padding: 8px 12px;
        background: #F8FAFC;
        border-left: 3px solid #1E3A5F;
        border-radius: 0 3px 3px 0;
        font-size: 9.5px;
        line-height: 1.48;
        color: #334155;
      }

      /* ── Section Headers ── */
      .cv-sh {
        font-size: 11px;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 0.7px;
        color: #0F172A;
        margin-top: 15px;
        margin-bottom: 3px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .cv-sh-line {
        height: 1.5px;
        background: #E2E8F0;
        margin-bottom: 10px;
        position: relative;
      }
      .cv-sh-line::before {
        content: '';
        position: absolute;
        left: 0; top: 0;
        width: 32px; height: 100%;
        background: #1E3A5F;
      }

      /* ── Experience: Position Mode ── */
      .cv-entry {
        margin-bottom: 10px;
        display: flex;
        align-items: flex-start;
      }
      .cv-entry-left {
        width: 70px; min-width: 70px;
        font-size: 8.5px;
        font-weight: 500;
        color: #64748B;
        padding-top: 4px;
        padding-right: 10px;
        line-height: 1.3;
      }
      .cv-entry-right {
        flex: 1;
        border-top: 1.5px solid #0F172A;
        padding-top: 4px;
      }
      .cv-entry-main {
        font-weight: 700;
        font-size: 10.5px;
        color: #0F172A;
      }
      .cv-entry-sub {
        color: #475569;
        font-size: 9px;
        margin-top: 1.5px;
      }
      .cv-entry-ul {
        margin: 3px 0 0;
        padding-left: 14px;
      }
      .cv-entry-ul li {
        margin-bottom: 1.5px;
        color: #334155;
        line-height: 1.45;
      }

      /* ── Experience: Company Mode ── */
      .cv-cg {
        margin-bottom: 14px;
      }
      .cv-cg-head {
        display: flex;
        align-items: baseline;
      }
      .cv-cg-left {
        width: 70px; min-width: 70px;
        font-size: 8.5px;
        font-weight: 600;
        color: #64748B;
        padding-right: 10px;
        line-height: 1.3;
      }
      .cv-cg-right {
        flex: 1;
        border-top: 2px solid #0F172A;
        padding-top: 4px;
      }
      .cv-cg-name {
        font-weight: 800;
        font-size: 11px;
        color: #0F172A;
        letter-spacing: 0.1px;
      }
      .cv-cg-positions {
        margin-left: 70px;
        margin-top: 4px;
      }
      .cv-sub {
        padding: 2.5px 0;
      }
      .cv-sub + .cv-sub {
        margin-top: 6px;
      }
      .cv-pushed-top {
        border-top: none !important;
        padding-top: 0 !important;
      }
      .cv-sub-head {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        margin-bottom: 1.5px;
      }
      .cv-sub-role {
        font-weight: 700;
        font-size: 9.5px;
        color: #1E293B;
      }
      .cv-sub-period {
        font-size: 8.5px;
        font-weight: 500;
        color: #64748B;
      }
      .cv-sub-ul {
        margin: 2px 0 0;
        padding-left: 13px;
      }
      .cv-sub-ul li {
        margin-bottom: 1.5px;
        color: #334155;
        line-height: 1.45;
      }

      /* ── Education ── */
      .cv-edu {
        margin-bottom: 6px;
        display: flex;
        align-items: flex-start;
      }
      .cv-edu-left {
        width: 70px; min-width: 70px;
        font-size: 8.5px;
        font-weight: 500;
        color: #64748B;
        padding-top: 4px;
        padding-right: 10px;
        line-height: 1.3;
      }
      .cv-edu-right {
        flex: 1;
        border-top: 1.5px solid #0F172A;
        padding-top: 4px;
      }
      .cv-edu-main {
        font-weight: 700;
        font-size: 10px;
        color: #0F172A;
      }
      .cv-edu-sub {
        color: #475569;
        font-size: 9px;
      }

      /* ── Skills & Competencies ── */
      .cv-sk {
        width: 100%;
        border-collapse: collapse;
      }
      .cv-sk td {
        padding: 4px 0;
        vertical-align: top;
        border-bottom: 1px solid #F1F5F9;
      }
      .cv-sk .skl {
        width: 105px;
        font-weight: 700;
        font-size: 9.5px;
        color: #0F172A;
        text-transform: uppercase;
        letter-spacing: 0.3px;
      }
      .cv-sk .skv {
        padding-left: 14px;
      }
      .cv-sk-item {
        margin-bottom: 3.5px;
        line-height: 1.45;
        font-size: 9.5px;
      }
      .cv-sk-item:last-child {
        margin-bottom: 0;
      }
      .cv-sk-key {
        font-weight: 700;
        color: #0F172A;
      }
      .cv-sk-val {
        color: #334155;
      }
      .cv-sk-badge {
        display: inline;
        font-size: inherit;
        font-weight: inherit;
        color: inherit;
      }
      .cv-sk-badge-expert,
      .cv-sk-badge-adv,
      .cv-sk-badge-basic {
        color: inherit;
        font-weight: inherit;
        font-style: inherit;
      }

      /* ── Signature ── */
      .cv-sig-block {
        margin-top: 14px;
      }
      .cv-sig-location {
        font-size: 9px;
        color: #475569;
        margin-bottom: 4px;
      }
      .cv-sig-img {
        max-height: 38px;
        max-width: 160px;
      }
    `,

    render: function (data, grouping, h) {
      let out = "";

      out += '<div class="cv-body">';

      // Helper function to format "Nachname, Vorname" to "Vorname Nachname"
      function displayName(value) {
        var raw = (value || '').trim();
        if (raw.indexOf(",") < 0) return raw;
        var parts = raw.split(",");
        var family = parts.shift().trim();
        var given = parts.join(",").trim();
        return (given + " " + family).trim();
      }

      const p = data.personal || {};
      const fullName = p.name ? displayName(p.name) : (h.t ? h.t('cv_title') : 'LEBENSLAUF');
      const roleTitle = (p.title || '').trim();

      // ── Editorial Masthead Header ──
      out += '<header class="cv-ed-header">';
      out += '<div class="cv-ed-header-main">';
      out += '<div class="cv-ed-kicker" aria-hidden="true">' + (h.t ? h.t('cv_title') : 'LEBENSLAUF') + '</div>';
      out += '<h1 class="cv-ed-name">' + h.esc(fullName) + '</h1>';
      if (roleTitle) {
        out += '<div class="cv-ed-title">' + h.esc(roleTitle) + '</div>';
      }

      // Metadata contact row
      var contactItems = [];
      if (p.address && p.address.trim()) {
        var addrClean = p.address.replace(/\r?\n/g, ', ');
        contactItems.push({ icon: 'address', text: addrClean });
      }
      if (p.phone && p.phone.trim()) {
        contactItems.push({ icon: 'phone', text: p.phone });
      }
      if (p.email && p.email.trim()) {
        contactItems.push({ icon: 'email', text: p.email, isLink: 'mailto:' + p.email.trim() });
      }
      if (p.linkedin && p.linkedin.trim()) {
        var lk = p.linkedin.trim();
        var href = /^https?:\/\//i.test(lk) ? lk : ('https://' + lk);
        var label = lk.replace(/^https?:\/\/(www\.)?/i, '');
        contactItems.push({ icon: 'linkedin', text: label, isLink: href });
      }
      if (p.birthdate && p.birthdate.trim()) {
        contactItems.push({ icon: 'birth', text: p.birthdate });
      }

      if (contactItems.length > 0) {
        out += '<div class="cv-ed-meta">';
        for (var ci = 0; ci < contactItems.length; ci++) {
          var item = contactItems[ci];
          out += '<span class="cv-ed-meta-item">';
          if (h.icons && h.icons[item.icon]) {
            out += h.icons[item.icon];
          }
          if (item.isLink) {
            out += '<a href="' + h.escAttr(item.isLink) + '" target="_blank" rel="noopener">' + h.esc(item.text) + '</a>';
          } else {
            out += h.esc(item.text);
          }
          out += '</span>';
        }
        out += '</div>';
      }
      out += '</div>'; // .cv-ed-header-main

      // Photo (Right side of header)
      if (data.photo) {
        out += '<div class="cv-ed-photo-wrap">';
        out += '<img class="cv-ed-photo" src="' + h.escAttr(data.photo) + '" alt="" aria-hidden="true">';
        out += '</div>';
      }

      out += '</header>';

      // ── Summary / Highlight (if present) ──
      if (p.highlight && p.highlight.trim()) {
        out += '<div class="cv-ed-summary">' + h.esc(p.highlight) + '</div>';
      }

      // ── Experience ──
      out += '<h2 class="cv-sh cv-sh-splittable"><span class="sr-only">Work Experience / </span>' + (h.t ? h.t('experience_upper') : 'BERUFSERFAHRUNG') + '</h2><div class="cv-sh-line" aria-hidden="true"></div>';
      out += h.renderExperience(data, grouping, h.lang);

      // ── Education ──
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

      // ── Skills & Competencies ──
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

      // ── Optional sections (Certificates, Projects, Volunteer) ──
      out += h.renderOptionalSections(data, h.lang);

      // ── Signature ──
      out += h.renderSignature(data, h.lang);

      out += '</div>'; // .cv-body
      return out;
    }
  };
})();
