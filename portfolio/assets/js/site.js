/* ==========================================================================
   site.js — renders every page from the SITE object in data.js.
   You normally do not need to edit this file.
   ========================================================================== */

(function () {
  "use strict";

  /* ------------------------------------------------------------- ICONS */

  const ICONS = {
    mail:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="4.5" width="19" height="15" rx="2"/><path d="m3 6 9 6.5L21 6"/></svg>',
    pin:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z"/><circle cx="12" cy="10" r="2.6"/></svg>',
    file:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z"/><path d="M14 3v5h5"/></svg>',
    globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.6 2.7 2.6 15.3 0 18M12 3c-2.6 2.7-2.6 15.3 0 18"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5m6-7-7 7 7 7"/></svg>',
    sun:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2v2.4M12 19.6V22M2 12h2.4M19.6 12H22M4.9 4.9l1.7 1.7M17.4 17.4l1.7 1.7M19.1 4.9l-1.7 1.7M6.6 17.4l-1.7 1.7"/></svg>',
    moon:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z"/></svg>',
    menu:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg>',

    github:   '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.73.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.21.68.8.56C20.71 21.38 24 17.08 24 12 24 5.73 18.77.5 12 .5Z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13Zm1.78 13.02H3.56V9h3.56v11.45Z"/></svg>',
    x:        '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.65l-5.22-6.82-5.96 6.82H1.68l7.73-8.84L1.25 2.25h6.82l4.71 6.23 5.46-6.23Zm-1.16 17.52h1.83L7.08 4.13H5.11l11.97 15.64Z"/></svg>',
    scholar:  '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.5 1 8.6l11 6.1 9-5v6.8h2V8.6L12 2.5Z"/><path d="M5 13.7v3.6L12 21l7-3.7v-3.6L12 17.4 5 13.7Z"/></svg>',
    orcid:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="12" cy="12" r="9.2"/><path d="M8.6 9.4v7.2" stroke-linecap="round"/><circle cx="8.6" cy="7.1" r="0.9" fill="currentColor" stroke="none"/><path d="M12.4 16.6V9.4h2.3a3.6 3.6 0 0 1 0 7.2h-2.3Z" stroke-linejoin="round"/></svg>',
    kaggle:   '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.83 21.6h-3.4l-4.2-5.36-1.18 1.12v4.24H7.2V2.4h2.85v11.5l5.2-5.36h3.5l-5.4 5.35 5.48 7.71Z"/></svg>',
    quora:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="11" cy="11" r="8.2"/><path d="M13.4 15.6c.9 1.6 2 2.4 3.6 2.4" stroke-linecap="round"/></svg>',
    copy:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg>',
    check:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m4 12.5 5.5 5.5L20 7"/></svg>',
    building: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="M5 21V6.5a1 1 0 0 1 .6-.92l6-2.5a1 1 0 0 1 1.4.92V21"/><path d="M13 21V9.5l5 2.1a1 1 0 0 1 .6.92V21"/><path d="M8.5 9v0M8.5 13v0M8.5 17v0"/></svg>'
  };

  const icon = (name) => ICONS[name] || ICONS.globe;

  /* The address is stored split in data.js and joined here, so neither the HTML
     nor data.js ever contains a matchable "name@host" string. */
  function emailAddress(l) {
    const user = (l && l.user) || SITE.emailUser || "";
    const host = (l && l.domain) || SITE.emailDomain || "";
    return user + String.fromCharCode(64) + host;
  }

  /* Lets you write [[email]] anywhere in your prose and get a live link. */
  function expandTokens(html) {
    const a = emailAddress();
    return String(html).replace(/\[\[email\]\]/g, '<a href="mailto:' + a + '">' + a + "</a>");
  }

  /* ------------------------------------------------------------ HELPERS */

  const $  = (sel, root) => (root || document).querySelector(sel);
  const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

  /** "2025-09" -> "Sep 2025".  Passes anything else straight through. */
  function fmtMonth(value) {
    if (!value) return "";
    const m = /^(\d{4})-(\d{2})$/.exec(value.trim());
    if (!m) return value;
    return MONTHS[parseInt(m[2], 10) - 1] + " " + m[1];
  }

  /** Length of a role, e.g. "1 yr 4 mos". Returns "" if dates aren't parseable. */
  function duration(start, end) {
    const a = /^(\d{4})-(\d{2})$/.exec((start || "").trim());
    if (!a) return "";
    const from = new Date(+a[1], +a[2] - 1);
    let to;
    const b = /^(\d{4})-(\d{2})$/.exec((end || "").trim());
    if (b) to = new Date(+b[1], +b[2] - 1);
    else if (/present|current|now/i.test(end || "")) to = new Date();
    else return "";
    let months = (to.getFullYear() - from.getFullYear()) * 12 + (to.getMonth() - from.getMonth()) + 1;
    if (months < 1) return "";
    const y = Math.floor(months / 12), mo = months % 12;
    const parts = [];
    if (y)  parts.push(y + (y === 1 ? " yr" : " yrs"));
    if (mo) parts.push(mo + (mo === 1 ? " mo" : " mos"));
    return parts.join(" ");
  }

  /** Bold the site owner inside an author list. */
  function authorLine(authors) {
    if (!Array.isArray(authors)) return "";
    const mine = [SITE.name, SITE.shortName].filter(Boolean).map((s) => s.toLowerCase());
    return authors
      .map((a) => (mine.indexOf(String(a).toLowerCase()) > -1 ? "<strong>" + a + "</strong>" : a))
      .join(", ");
  }

  function linkRow(links) {
    if (!links || !links.length) return "";
    return '<div class="linkrow">' + links.map((l) =>
      '<a href="' + l.url + '" target="_blank" rel="noopener">' + l.label + '</a>'
    ).join("") + "</div>";
  }

  function chips(items) {
    if (!items || !items.length) return "";
    return '<div class="chips">' + items.map((t) => '<span class="tag">' + t + "</span>").join("") + "</div>";
  }

  function sectionHead(title, count) {
    return '<div class="section-head"><h2>' + title + "</h2>" +
      (count != null ? '<span class="count">' + count + "</span>" : "") + "</div>";
  }

  /* -------------------------------------------------------------- THEME */

  const THEME_KEY = "portfolio-theme";

  function applyTheme(mode) {
    document.documentElement.setAttribute("data-theme", mode);
    const btn = $("#theme-toggle");
    if (btn) {
      btn.innerHTML = icon(mode === "dark" ? "sun" : "moon");
      btn.setAttribute("aria-label", mode === "dark" ? "Switch to light theme" : "Switch to dark theme");
    }
  }

  function initTheme() {
    let saved = null;
    try { saved = localStorage.getItem(THEME_KEY); } catch (e) { /* private mode */ }
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    applyTheme(saved || (prefersDark ? "dark" : "light"));

    const btn = $("#theme-toggle");
    if (!btn) return;
    btn.addEventListener("click", function () {
      const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(next);
      try { localStorage.setItem(THEME_KEY, next); } catch (e) { /* ignore */ }
    });
  }

  /* ------------------------------------------------------------- CHROME */

  function currentFile() {
    const path = window.location.pathname.split("/").pop();
    return path === "" ? "index.html" : path;
  }

  function renderMasthead() {
    const here = currentFile();
    const items = SITE.nav.map(function (item) {
      const active = !item.external && item.href === here;
      return '<a href="' + item.href + '"' +
        (item.external ? ' target="_blank" rel="noopener"' : "") +
        (active ? ' aria-current="page"' : "") + ">" + item.label + "</a>";
    }).join("");

    const host = $("#masthead");
    if (!host) return;
    host.className = "masthead";
    host.innerHTML =
      '<div class="masthead__inner">' +
        '<a class="brand" href="index.html">' + SITE.name + "</a>" +
        '<nav class="nav" id="nav" aria-label="Main">' + items + "</nav>" +
        '<button class="icon-btn" id="theme-toggle" type="button" aria-label="Toggle theme"></button>' +
        '<button class="icon-btn nav-toggle" id="nav-toggle" type="button" aria-expanded="false" aria-controls="nav" aria-label="Open menu">' + icon("menu") + "</button>" +
      "</div>";

    const toggle = $("#nav-toggle"), nav = $("#nav");
    toggle.addEventListener("click", function () {
      const open = nav.getAttribute("data-open") === "true";
      nav.setAttribute("data-open", String(!open));
      toggle.setAttribute("aria-expanded", String(!open));
      toggle.innerHTML = icon(open ? "menu" : "close");
    });
  }

  function renderSidebar() {
    const host = $("#rail");
    if (!host) return;

    const social = SITE.links.map(function (l) {
      if (l.type === "email") {
        const a = emailAddress(l);
        return '<li class="social__row">' +
          '<a href="mailto:' + a + '">' + icon("mail") + "<span>" + a + "</span></a>" +
          '<button class="copy-mail" type="button" data-mail="' + a + '" ' +
            'aria-label="Copy ' + a + '" title="Copy address">' + icon("copy") + "</button>" +
        "</li>";
      }
      return "<li><a href=" + JSON.stringify(l.url) +
        (l.url.indexOf("mailto:") === 0 ? "" : ' target="_blank" rel="noopener"') + ">" +
        icon(l.icon) + "<span>" + l.label + "</span></a></li>";
    }).join("");

    host.className = "rail";
    host.innerHTML =
      '<div class="card">' +
        '<img class="card__photo" src="' + SITE.avatar + '" alt="' + SITE.name + '" width="118" height="118">' +
        '<div class="card__ident">' +
          '<h2 class="card__name">' + SITE.name + "</h2>" +
          (SITE.pronouns ? '<p class="card__pronouns">' + SITE.pronouns + "</p>" : "") +
          '<p class="card__role">' + SITE.role + "</p>" +
        "</div>" +
        '<div class="card__meta">' + icon("pin") + "<span>" + SITE.location + "</span></div>" +
        (SITE.affiliation
          ? '<div class="card__meta card__meta--tight">' + icon("building") +
            "<span>" + SITE.affiliation + "</span></div>"
          : "") +
        '<ul class="social">' + social + "</ul>" +
        (SITE.cv ? '<a class="card__cv" href="' + SITE.cv + '" target="_blank" rel="noopener">' +
          icon("file") + "<span>Download CV</span></a>" : "") +
      "</div>";

    Array.prototype.forEach.call(document.querySelectorAll(".copy-mail"), bindCopy);
  }

  function bindCopy(btn) {
    btn.addEventListener("click", function () {
      const a = btn.getAttribute("data-mail");
      const ok = function () {
        btn.innerHTML = icon("check");
        btn.classList.add("is-done");
        btn.title = "Copied";
        setTimeout(function () {
          btn.innerHTML = icon("copy");
          btn.classList.remove("is-done");
          btn.title = "Copy address";
        }, 1800);
      };
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(a).then(ok, fallbackCopy);
      } else {
        fallbackCopy();
      }
      function fallbackCopy() {
        // older browsers, and any page served over plain http
        const box = document.createElement("textarea");
        box.value = a;
        box.setAttribute("readonly", "");
        box.style.position = "fixed";
        box.style.opacity = "0";
        document.body.appendChild(box);
        box.select();
        try { document.execCommand("copy"); ok(); } catch (e) { /* nothing else to try */ }
        document.body.removeChild(box);
      }
    });
  }

  function renderFooter() {
    const host = $("#foot");
    if (!host) return;
    const year = new Date().getFullYear();
    host.className = "foot";
    host.innerHTML =
      '<div class="foot__inner">' +
        "<span>&copy; " + year + " " + SITE.name + ".</span>" +
        (SITE.footer && SITE.footer.repo
          ? '<a href="' + SITE.footer.repo + '" target="_blank" rel="noopener">Source</a>' : "") +
        '<span class="spacer"></span>' +
        (SITE.lastUpdated ? "<span>Last updated " + SITE.lastUpdated + "</span>" : "") +
      "</div>";
  }

  function setMeta() {
    const page = document.body.getAttribute("data-page");
    const titles = {
      home: "", portfolio: "Experience", publications: "Publications",
      teaching: "Teaching", detail: ""
    };
    const t = titles[page];
    if (page !== "detail") document.title = (t ? t + " · " : "") + SITE.name;

    let desc = document.querySelector('meta[name="description"]');
    if (!desc) {
      desc = document.createElement("meta");
      desc.setAttribute("name", "description");
      document.head.appendChild(desc);
    }
    desc.setAttribute("content", SITE.metaDescription || "");
  }

  /* ------------------------------------------------------------- PAGES */

  function prose(paragraphs) {
    if (!paragraphs) return "";
    const list = Array.isArray(paragraphs) ? paragraphs : [paragraphs];
    if (!list.length) return "";
    return '<div class="prose">' + list.map((p) => "<p>" + expandTokens(p) + "</p>").join("") + "</div>";
  }

  /* Bulleted list where each item opens with a bold term. */
  function leadList(items) {
    if (!items || !items.length) return "";
    return '<ul class="leadlist">' + items.map(function (b) {
      if (typeof b === "string") return "<li>" + expandTokens(b) + "</li>";
      return "<li>" +
        (b.lead ? "<strong>" + b.lead + "</strong>" + (b.text ? '<span class="sep"> &mdash; </span>' : "") : "") +
        (b.text ? expandTokens(b.text) : "") +
      "</li>";
    }).join("") + "</ul>";
  }

  function renderHome(main) {
    const h = SITE.home;
    let html = "";

    html +=
      '<header class="hero">' +
        (h.eyebrow ? '<p class="hero__eyebrow">' + h.eyebrow + "</p>" : "") +
        "<h1>" + SITE.name + "</h1>" +
        (h.headline ? '<p class="hero__sub">' + h.headline + "</p>" : "") +
      "</header>";

    // Each entry is a titled section: prose, then an optional bullet list,
    // then optional closing prose, then optionally one structured block.
    (h.sections || []).forEach(function (sec) {
      html += '<section class="hsection">' +
        (sec.title ? sectionHead(sec.title) : "") +
        prose(sec.body) +
        (sec.chips ? '<div class="hsection__chips">' + chips(sec.chips) + "</div>" : "") +
        leadList(sec.bullets) +
        prose(sec.outro) +
        (sec.block ? blockHtml(sec.block) : "") +
      "</section>";
    });

    main.innerHTML = html;
  }

  function pubItem(p) {
    // A detail page is worth linking to only if there is something extra on it.
    const detailable = !!(p.abstract || p.bibtex);
    const primary = (p.links && p.links.length) ? p.links[0].url : null;
    let titleHtml;
    if (detailable) {
      titleHtml = '<a href="detail.html?type=publication&id=' + encodeURIComponent(p.id) + '">' + p.title + "</a>";
    } else if (primary) {
      titleHtml = '<a href="' + primary + '" target="_blank" rel="noopener">' + p.title + "</a>";
    } else {
      titleHtml = p.title;   // no link anywhere yet — plain text beats a dead anchor
    }

    return '<article class="pub" data-type="' + (p.type || "") + '">' +
      '<div class="pub__key">' + (p.key || "") + "</div>" +
      "<div>" +
        '<h3 class="pub__title">' + titleHtml +
          (p.award ? '<span class="pub__award">' + p.award + "</span>" : "") +
        "</h3>" +
        '<p class="pub__authors">' + authorLine(p.authors) + "</p>" +
        '<p class="pub__venue">' + p.venue + ", " + p.year + "</p>" +
        linkRow(p.links) +
      "</div>" +
    "</article>";
  }

  function renderPublications(main) {
    const pubs = SITE.publications.slice().sort((a, b) => b.year - a.year);
    const types = [];
    pubs.forEach((p) => { if (p.type && types.indexOf(p.type) === -1) types.push(p.type); });

    let html =
      '<header class="hero">' +
        '<p class="hero__eyebrow">' + pubs.length + " entries</p>" +
        "<h1>Publications</h1>" +
        '<p class="hero__sub">Peer-reviewed work, newest first.</p>' +
      "</header>";

    if (types.length > 1) {
      html += '<div class="filters" id="filters">' +
        '<button class="filter" type="button" data-filter="all" aria-pressed="true">All</button>' +
        types.map((t) => '<button class="filter" type="button" data-filter="' + t + '" aria-pressed="false">' + t + "</button>").join("") +
        "</div>";
    }

    // group by year
    const years = [];
    pubs.forEach((p) => { if (years.indexOf(p.year) === -1) years.push(p.year); });

    html += '<div id="publist">' + years.map(function (y) {
      const group = pubs.filter((p) => p.year === y);
      return '<section class="year-group">' +
        '<div class="year-group__label">' + y + "</div>" +
        group.map(pubItem).join("") +
      "</section>";
    }).join("") + "</div>";

    main.innerHTML = html;

    const bar = $("#filters");
    if (!bar) return;
    bar.addEventListener("click", function (e) {
      const btn = e.target.closest(".filter");
      if (!btn) return;
      const want = btn.getAttribute("data-filter");
      Array.prototype.forEach.call(bar.querySelectorAll(".filter"), (b) =>
        b.setAttribute("aria-pressed", String(b === btn)));

      Array.prototype.forEach.call(document.querySelectorAll(".pub"), function (card) {
        const show = want === "all" || card.getAttribute("data-type") === want;
        card.style.display = show ? "" : "none";
      });
      // hide year headings that have nothing left visible
      Array.prototype.forEach.call(document.querySelectorAll(".year-group"), function (g) {
        const any = Array.prototype.some.call(g.querySelectorAll(".pub"), (c) => c.style.display !== "none");
        g.style.display = any ? "" : "none";
      });
    });
  }

  /* A dated card. Used by experience, education, projects and service. */
  function roleCard(o) {
    const heading = o.href
      ? '<a href="' + o.href + '">' + o.title + "</a>"
      : o.title;
    return '<article class="role">' +
      '<div class="role__when">' + (o.when || "") +
        (o.dur ? '<span class="role__dur">' + o.dur + "</span>" : "") +
        (o.now ? '<span class="now">current</span>' : "") +
      "</div>" +
      "<div>" +
        '<div class="role__head">' +
          (o.logo ? '<img class="role__logo" src="' + o.logo + '" alt="" loading="lazy">' : "") +
          "<div>" +
            "<h3>" + heading + "</h3>" +
            (o.org ? '<p class="role__org">' + o.org + "</p>" : "") +
            (o.place ? '<p class="role__place">' + o.place + "</p>" : "") +
          "</div>" +
        "</div>" +
        (o.summary ? '<p class="role__summary">' + o.summary + "</p>" : "") +
        (o.details && o.details.length
          ? '<ul class="role__details">' + o.details.map((d) => "<li>" + d + "</li>").join("") + "</ul>"
          : "") +
        chips(o.tech) +
        linkRow(o.links) +
      "</div>" +
    "</article>";
  }

  function fromExperience(r) {
    const now = /present|current|now/i.test(r.end || "");
    return roleCard({
      when: fmtMonth(r.start) + " &ndash; " + (now ? "Present" : fmtMonth(r.end)),
      dur: duration(r.start, r.end),
      now: now,
      title: r.title, org: r.org, place: r.place,
      summary: r.summary, details: r.details, tech: r.tech, logo: r.logo,
      links: r.links
    });
  }

  function educationCards() {
    const list = SITE.education || [];
    if (!list.length) return "";
    return list.map(function (e) {
      return roleCard({
        // an entry with no start date shows just its end label, e.g. "Ongoing"
        when: e.start ? fmtMonth(e.start) + " &ndash; " + fmtMonth(e.end) : fmtMonth(e.end),
        title: e.degree, org: e.org, place: e.place,
        summary: e.summary, details: e.details, logo: e.logo
      });
    }).join("");
  }
  function renderEducation() {
    const b = educationCards();
    return b ? sectionHead("Education") + b : "";
  }

  function awardsList() {
    const list = SITE.awards || [];
    if (!list.length) return "";
    return '<ul class="news">' + list.map((a) =>
        "<li><time>" + (a.when || "") + "</time><p>" + a.text +
        (a.org ? ' <span style="color:var(--muted)">&mdash; ' + a.org + "</span>" : "") +
        "</p></li>"
      ).join("") + "</ul>";
  }
  function renderAwards() {
    const b = awardsList();
    return b ? sectionHead("Honours and awards") + b : "";
  }

  function newsList() {
    const list = (SITE.home && SITE.home.news) || [];
    if (!list.length) return "";
    return '<ul class="news">' + list.map((n) =>
      "<li><time>" + n.date + "</time><p>" + expandTokens(n.text) + "</p></li>"
    ).join("") + "</ul>";
  }

  function featuredPubs() {
    const n = (SITE.home && SITE.home.featuredCount) || 0;
    if (!n || !SITE.publications.length) return "";
    return SITE.publications.slice(0, n).map(pubItem).join("") +
      '<p class="seeall"><a href="publications.html">See all ' +
      SITE.publications.length + " publications &rarr;</a></p>";
  }

  /* Lets a home-page section pull in one of the structured blocks. */
  function blockHtml(name) {
    switch (name) {
      case "education":    return educationCards();
      case "awards":       return awardsList();
      case "news":         return newsList();
      case "publications": return featuredPubs();
      case "projects":     return projectCards();
      case "service":      return serviceCards();
      case "skills":       return skillRows();
      default:             return "";
    }
  }

  function projectCards() {
    const list = SITE.projects || [];
    if (!list.length) return "";
    return list.map((p) =>
      roleCard({ when: p.when, title: p.name, summary: p.summary,
                 details: p.details, tech: p.tech, links: p.links })
    ).join("");
  }
  function renderProjects() {
    const b = projectCards();
    return b ? sectionHead("Projects") + b : "";
  }

  function serviceCards() {
    const list = SITE.service || [];
    if (!list.length) return "";
    return list.map((v) =>
      roleCard({ when: v.when, title: v.title, org: v.org,
                 summary: v.summary, details: v.details, links: v.links })
    ).join("");
  }
  function renderService() {
    const b = serviceCards();
    return b ? sectionHead("Service and leadership") + b : "";
  }

  function skillRows() {
    const groups = SITE.skills || [];
    if (!groups.length) return "";
    return groups.map((g) =>
      '<div class="skillrow"><div class="skillrow__label">' + g.label + "</div>" +
      "<div>" + chips(g.items) + "</div></div>"
    ).join("");
  }
  function renderSkills() {
    const b = skillRows();
    return b ? sectionHead("Tools and skills") + b : "";
  }

  function renderPortfolio(main) {
    const roles = SITE.experience || [];

    let html =
      '<header class="hero">' +
        '<p class="hero__eyebrow">' + roles.length + " positions</p>" +
        "<h1>Experience</h1>" +
        '<p class="hero__sub">Research and engineering roles, newest first.</p>' +
      "</header>";

    html += '<div class="timeline">' + roles.map(fromExperience).join("") + "</div>";
    html += renderProjects();
    html += renderService();
    html += renderSkills();

    main.innerHTML = html;
  }

  function renderTeaching(main) {
    const list = SITE.teaching || [];

    let html =
      '<header class="hero">' +
        '<p class="hero__eyebrow">' + list.length + " entries</p>" +
        "<h1>Teaching</h1>" +
        '<p class="hero__sub">Courses assisted, taught, and organised.</p>' +
      "</header>";

    if (!list.length) {
      main.innerHTML = html + '<div class="empty">No teaching entries yet.</div>';
      return;
    }

    html += list.map((c) =>
      '<article class="course">' +
        '<div class="course__code"><b>' + (c.code || "&mdash;") + "</b>" + (c.term || "") + "</div>" +
        "<div>" +
          "<h3>" + c.title + "</h3>" +
          '<p class="course__role">' + c.role + " &middot; " + c.org + "</p>" +
          (c.summary ? "<p>" + c.summary + "</p>" : "") +
          linkRow(c.links) +
        "</div>" +
      "</article>"
    ).join("");

    main.innerHTML = html;
  }

  function renderDetail(main) {
    const params = new URLSearchParams(window.location.search);
    const type = params.get("type");
    const id = params.get("id");

    const backHref = type === "publication" ? "publications.html" : "portfolio.html";
    const backText = type === "publication" ? "All publications" : "All experience";
    const back = '<a class="back" href="' + backHref + '">' + icon("arrow") + backText + "</a>";

    const list = type === "publication" ? SITE.publications : SITE.experience;
    const item = (list || []).filter((x) => x.id === id)[0];

    if (!item) {
      document.title = "Not found · " + SITE.name;
      main.innerHTML = back + '<div class="empty">That entry does not exist. It may have been renamed.</div>';
      return;
    }

    document.title = item.title + " · " + SITE.name;

    if (type === "publication") {
      main.innerHTML = back +
        '<article class="detail">' +
          '<p class="mono">' + (item.key || "") + "</p>" +
          "<h1>" + item.title + "</h1>" +
          '<div class="detail__meta">' +
            '<p class="pub__authors">' + authorLine(item.authors) + "</p>" +
            '<p class="pub__venue">' + item.venue + ", " + item.year + "</p>" +
            linkRow(item.links) +
          "</div>" +
          (item.teaser ? '<img class="detail__teaser" src="' + item.teaser + '" alt="">' : "") +
          (item.abstract ? sectionHead("Abstract") + '<div class="prose"><p>' + item.abstract + "</p></div>" : "") +
          (item.bibtex
            ? sectionHead("BibTeX") +
              '<div class="bib"><button class="copy" type="button" id="copy-bib">Copy</button><pre id="bibtext">' +
              item.bibtex.replace(/&/g, "&amp;").replace(/</g, "&lt;") + "</pre></div>"
            : "") +
        "</article>";

      const copyBtn = $("#copy-bib");
      if (copyBtn) {
        copyBtn.addEventListener("click", function () {
          const text = $("#bibtext").textContent;
          const done = () => { copyBtn.textContent = "Copied"; setTimeout(() => (copyBtn.textContent = "Copy"), 1600); };
          if (navigator.clipboard) navigator.clipboard.writeText(text).then(done, () => (copyBtn.textContent = "Press Ctrl+C"));
          else copyBtn.textContent = "Press Ctrl+C";
        });
      }
      return;
    }

    const ongoing = /present|current|now/i.test(item.end || "");
    main.innerHTML = back +
      '<article class="detail">' +
        '<p class="mono">' + fmtMonth(item.start) + " &ndash; " + (ongoing ? "Present" : fmtMonth(item.end)) + "</p>" +
        "<h1>" + item.title + "</h1>" +
        '<div class="detail__meta">' +
          '<p class="role__org">' + item.org + "</p>" +
          (item.place ? '<p class="role__place">' + item.place + "</p>" : "") +
        "</div>" +
        (item.summary ? '<div class="prose"><p>' + item.summary + "</p></div>" : "") +
        (item.details && item.details.length
          ? sectionHead("Highlights") + '<ul class="role__details">' + item.details.map((d) => "<li>" + d + "</li>").join("") + "</ul>"
          : "") +
        (item.tech ? sectionHead("Tools") + chips(item.tech) : "") +
      "</article>";
  }

  /* --------------------------------------------------------------- BOOT */

  function boot() {
    if (typeof SITE === "undefined") {
      document.body.innerHTML = '<p style="padding:2rem;font-family:monospace">data.js failed to load. Check the script path in your HTML.</p>';
      return;
    }

    renderMasthead();
    initTheme();
    renderSidebar();
    renderFooter();
    setMeta();

    const main = $("#main");
    if (!main) return;
    main.classList.add("reveal");

    switch (document.body.getAttribute("data-page")) {
      case "home":         renderHome(main); break;
      case "publications": renderPublications(main); break;
      case "portfolio":    renderPortfolio(main); break;
      case "teaching":     renderTeaching(main); break;
      case "detail":       renderDetail(main); break;
    }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
