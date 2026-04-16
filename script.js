/* eslint-disable no-console */

const PROFILE = {
  name: "Victor Marques Silva",
  role: "Computer Science Graduate • Software / Data / IT",
  eyebrow: "Software Engineering • Data • IT • Web",
  headline: "Early-career engineer who ships, troubleshoots, and learns fast.",
  lede:
    "Computer Science graduate with experience in web development and hardware/software support. I’m exploring software engineering, data, IT, and web—happy to contribute wherever I can add value and grow.",
  initials: "VMS",
  quickFacts: ["Open to full-time roles", "Client-facing projects", "Strong troubleshooting + documentation"],
  stats: {
    focus: "Software + Systems",
    stack: "C++ • SQL • JavaScript • Linux",
    location: "Edinburg, TX",
  },
  contact: {
    email: "victor.silvaa920@gmail.com",
    phone: "(956) 961-8304",
    location: "Edinburg, Texas",
    availability: "Full-time roles",
  },
  resumeUrl: "./resume.html",
  resumePdfUrl: "./assets/resume/Victor-Marques-Silva-Resume.pdf",
  about: {
    intro:
      "I’m Victor, a Computer Science graduate from the University of Texas Rio Grande Valley (UTRGV). I’m from the Rio Grande Valley, and I’m proud to be a first-generation college graduate.",
    lookingFor:
      "I’m looking for full-time roles where I can learn fast, build reliable software, and grow into a specialization over time. I’m open to software engineering, data, IT, and web work—and I’m willing to relocate anywhere in Texas.",
    highlights: [
      "Contracted to build and ship a responsive business site for Cantu Construction.",
      "Currently building a second client site for RGV Special Events Centers (in progress).",
      "Strong troubleshooting, documentation, and customer communication from Geek Squad + campus support.",
    ],
    outsideOfWork:
      "Outside of tech, I’m into sports—basketball is my favorite to play. I also watch football, baseball, and basketball, and I recently started learning golf.",
    note: "",
  },
  socials: [
    { label: "GitHub", href: "https://github.com/Victorsilva2", kind: "github" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/victor-marques-silva20",
      kind: "linkedin",
    },
  ],
  projects: [
    {
      title: "Cantu Construction Website",
      description:
        "Client project: designed and implemented a responsive website, optimized structure/performance/accessibility, and shipped interactive components.",
      tags: ["Client", "Responsive", "Accessibility", "Performance"],
      imageUrl: "./assets/projects/cantu.png",
      links: [{ label: "Live site", href: "https://www.cantuconstruction.com/" }],
      featured: true,
    },
    {
      title: "Phenomenal Breaks — NBA Team Tracker (OBS Overlay)",
      description:
        "Built for a family member’s Whatnot live streams: an OBS-friendly overlay to track NBA teams quickly during breaks.",
      tags: ["Client", "Tooling", "Web", "OBS"],
      imageUrl: "./assets/projects/nba-overlay.png",
      links: [{ label: "Live site", href: "https://nba-overlay.vercel.app" }],
      featured: true,
    },
    {
      title: "RGV Special Events Centers",
      description:
        "Client project: multi-venue website with modern UI, venue pages, and a strong visual layout (in progress).",
      tags: ["Client", "UI/UX", "Web", "In progress"],
      imageUrl: "./assets/projects/rgv.png",
      links: [
        {
          label: "Live preview",
          href: "https://rgv-special-events-center.vercel.app/index.html",
        },
      ],
      featured: true,
    },
    {
      title: "This Portfolio",
      description:
        "A fast, responsive portfolio with projects, experience, skills, and a print-friendly resume page.",
      tags: ["Web", "UI/UX"],
      links: [
        { label: "Resume (HTML)", href: "./resume.html" },
        { label: "Save as PDF", href: "./assets/resume/Victor-Marques-Silva-Resume.pdf" },
      ],
      featured: false,
    },
  ],
  timeline: [
    {
      title: "Advanced Repair Agent",
      org: "Geek Squad · McAllen, TX",
      when: "Oct 2025 – Present",
      bullets: [
        "Diagnose and resolve hardware/software issues by identifying root causes and improving system performance.",
        "Maintain accurate service records and documentation for compliance and tracking.",
        "Provide customer-facing technical support by translating complex issues into clear next steps.",
      ],
    },
    {
      title: "Freelance Web Developer",
      org: "Cantu Construction · McAllen, TX",
      when: "Oct 2025 – Dec 2025",
      bullets: [
        "Designed and implemented a responsive business website for a commercial construction company.",
        "Optimized site structure, performance, and accessibility across devices.",
        "Collaborated with stakeholders to align technical solutions with business goals and UX.",
      ],
    },
    {
      title: "Student Assistant",
      org: "College of Engineering & Computer Science · Edinburg, TX",
      when: "Jan 2022 – Jul 2025",
      bullets: [
        "Provided technical support across classrooms and labs to ensure reliability and minimal downtime.",
        "Troubleshot hardware/software issues by analyzing system behavior and root causes.",
        "Managed work orders and tracked issue resolution to improve response efficiency.",
      ],
    },
    {
      title: "B.S. in Computer Science",
      org: "University of Texas Rio Grande Valley · Edinburg, TX",
      when: "Aug 2025",
      bullets: [],
    },
  ],
  skills: [
    "C++",
    "Java",
    "Python",
    "JavaScript",
    "HTML/CSS",
    "SQL (PostgreSQL/MySQL)",
    "Git/GitHub",
    "Linux",
    "REST APIs",
    "Troubleshooting & Diagnostics",
    "Documentation & Data Tracking",
    "Process Improvement",
    "Microsoft Excel/Word/PowerPoint",
  ],
};

const ICONS = {
  moon:
    "M12.3 2.1a1 1 0 0 1 .6 1.3 7.1 7.1 0 0 0 9 9 1 1 0 0 1 1.2.7 1 1 0 0 1-.3 1.2A10.2 10.2 0 1 1 11.2 1.8a1 1 0 0 1 1.1.3z",
  sun:
    "M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12Zm0-16a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1Zm0 18a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1ZM2 12a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Zm18 0a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1ZM4.2 4.2a1 1 0 0 1 1.4 0l.7.7a1 1 0 1 1-1.4 1.4l-.7-.7a1 1 0 0 1 0-1.4Zm13.1 13.1a1 1 0 0 1 1.4 0l.7.7a1 1 0 0 1-1.4 1.4l-.7-.7a1 1 0 0 1 0-1.4ZM19.8 4.2a1 1 0 0 1 0 1.4l-.7.7a1 1 0 1 1-1.4-1.4l.7-.7a1 1 0 0 1 1.4 0ZM6.3 17.7a1 1 0 0 1 0 1.4l-.7.7a1 1 0 0 1-1.4-1.4l.7-.7a1 1 0 0 1 1.4 0Z",
  github:
    "M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.8c-2.9.6-3.5-1.2-3.5-1.2-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1 1.6-.7 2-1.1.1-.7.4-1.1.7-1.3-2.3-.3-4.7-1.1-4.7-5A4 4 0 0 1 6 7.3 3.7 3.7 0 0 1 6.1 4s.9-.3 3 1.1a10.4 10.4 0 0 1 5.5 0c2.1-1.4 3-1.1 3-1.1a3.7 3.7 0 0 1 .1 3.3 4 4 0 0 1 1.1 2.8c0 4-2.4 4.7-4.7 5 .4.3.8 1 .8 2v3c0 .3.2.6.7.5A10 10 0 0 0 12 2Z",
  linkedin:
    "M4 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm.2 6H3.1A1.1 1.1 0 0 0 2 10.1v10.8A1.1 1.1 0 0 0 3.1 22h1.1a1.1 1.1 0 0 0 1.1-1.1V10.1A1.1 1.1 0 0 0 4.2 9ZM9.1 9A1.1 1.1 0 0 0 8 10.1v10.8A1.1 1.1 0 0 0 9.1 22h1.1a1.1 1.1 0 0 0 1.1-1.1v-5.7c0-1.5.3-3 2.1-3 1.8 0 1.8 1.7 1.8 3.1v5.6A1.1 1.1 0 0 0 18.3 22h1.1a1.1 1.1 0 0 0 1.1-1.1v-6.4c0-3.1-.7-5.5-4.3-5.5-1.7 0-2.8.9-3.3 1.7V10a1 1 0 0 0-1-1Z",
  link:
    "M10.6 13.4a1 1 0 0 1 0 1.4l-2 2a3 3 0 0 1-4.2-4.2l2-2a1 1 0 1 1 1.4 1.4l-2 2a1 1 0 0 0 1.4 1.4l2-2a1 1 0 0 1 1.4 0Zm2.8-2.8a1 1 0 0 1 0-1.4l2-2a3 3 0 0 1 4.2 4.2l-2 2a1 1 0 1 1-1.4-1.4l2-2a1 1 0 0 0-1.4-1.4l-2 2a1 1 0 0 1-1.4 0ZM8.7 15.3a1 1 0 0 1 0-1.4l6.6-6.6a1 1 0 1 1 1.4 1.4l-6.6 6.6a1 1 0 0 1-1.4 0Z",
};

function $(id) {
  return document.getElementById(id);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function svgMask(path) {
  const encoded = encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="${path}"/></svg>`,
  );
  return `url("data:image/svg+xml,${encoded}")`;
}

function setTheme(theme) {
  const root = document.documentElement;
  root.dataset.theme = theme;
  localStorage.setItem("theme", theme);
  updateThemeButton(theme);
}

function updateThemeButton(theme) {
  const btn = $("themeToggle");
  const icon = $("themeIcon");
  if (!btn || !icon) return;
  const isLight = theme === "light";
  btn.setAttribute("aria-pressed", String(isLight));
  icon.style.maskImage = svgMask(isLight ? ICONS.moon : ICONS.sun);
}

function initTheme() {
  const saved = localStorage.getItem("theme");
  const preferred = window.matchMedia?.("(prefers-color-scheme: light)")?.matches
    ? "light"
    : "dark";
  const theme = saved || preferred;
  setTheme(theme);

  $("themeToggle")?.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "light" ? "dark" : "light";
    setTheme(next);
  });
}

function renderQuickFacts(items) {
  const el = $("quickFacts");
  if (!el) return;
  el.innerHTML = items.map((t) => `<li>${escapeHtml(t)}</li>`).join("");
}

function renderSocials(socials) {
  const el = $("socialLinks");
  if (!el) return;
  el.innerHTML = socials
    .map((s) => {
      const icon = ICONS[s.kind] || ICONS.link;
      return `<a class="button ghost" href="${escapeHtml(
        s.href,
      )}" target="_blank" rel="noreferrer noopener">
        <span class="icon" aria-hidden="true" style="mask-image:${svgMask(icon)}"></span>
        <span style="margin-left:8px">${escapeHtml(s.label)}</span>
      </a>`;
    })
    .join("");
}

function allTags(projects) {
  const tags = new Set();
  for (const p of projects) {
    for (const t of p.tags || []) tags.add(t);
  }
  return Array.from(tags).sort((a, b) => a.localeCompare(b));
}

function renderProjectFilters(tags, active) {
  const el = $("projectFilters");
  if (!el) return;
  const items = ["All", ...tags];
  el.innerHTML = items
    .map((t) => {
      const pressed = t === active;
      return `<button class="filter-chip" type="button" data-filter="${escapeHtml(
        t,
      )}" aria-pressed="${pressed ? "true" : "false"}">${escapeHtml(t)}</button>`;
    })
    .join("");
}

function projectMatches(project, active) {
  if (active === "All") return true;
  return (project.tags || []).includes(active);
}

function renderProjects(projects, active) {
  const el = $("projectGrid");
  if (!el) return;

  const visible = projects.filter((p) => projectMatches(p, active));
  if (!visible.length) {
    el.innerHTML = `<div class="card"><h3>No matches</h3><p>Try a different filter.</p></div>`;
    return;
  }

  el.innerHTML = visible
    .map((p) => {
      const tags = (p.tags || [])
        .map((t) => `<span class="tag">${escapeHtml(t)}</span>`)
        .join("");
      const links = (p.links || [])
        .map(
          (l) =>
            `<a class="button ghost" href="${escapeHtml(
              l.href,
            )}" target="_blank" rel="noreferrer noopener">
              <span class="icon" aria-hidden="true" style="mask-image:${svgMask(
                ICONS.link,
              )}"></span>
              <span style="margin-left:8px">${escapeHtml(l.label)}</span>
            </a>`,
        )
        .join("");

      const img = p.imageUrl
        ? `<div class="card-media">
            <img src="${escapeHtml(p.imageUrl)}" alt="" loading="lazy" />
          </div>`
        : "";

      return `<article class="card">
        ${img}
        <h3>${escapeHtml(p.title)}</h3>
        <p>${escapeHtml(p.description)}</p>
        <div class="tags" aria-label="Tags">${tags}</div>
        <div class="links" aria-label="Links">${links}</div>
      </article>`;
    })
    .join("");
}

function initProjects(projects) {
  const tags = allTags(projects);
  let active = "All";
  renderProjectFilters(tags, active);
  renderProjects(projects, active);

  $("projectFilters")?.addEventListener("click", (e) => {
    const btn = e.target?.closest?.("button[data-filter]");
    if (!btn) return;
    active = btn.getAttribute("data-filter") || "All";
    renderProjectFilters(tags, active);
    renderProjects(projects, active);
  });
}

function renderTimeline(items) {
  const el = $("timeline");
  if (!el) return;
  el.innerHTML = items
    .map((it) => {
      const bullets = (it.bullets || []).map((b) => `<li>${escapeHtml(b)}</li>`).join("");
      return `<article class="timeline-item">
        <div class="timeline-top">
          <div class="timeline-title">${escapeHtml(it.title)} · <span style="color:var(--muted); font-weight:800">${escapeHtml(
            it.org,
          )}</span></div>
          <div class="timeline-when">${escapeHtml(it.when)}</div>
        </div>
        <ul style="margin:0; padding-left:18px; color:var(--muted); font-weight:650">${bullets}</ul>
      </article>`;
    })
    .join("");
}

function renderSkills(skills) {
  const el = $("skillsGrid");
  if (!el) return;
  el.innerHTML = skills.map((s) => `<span class="pill">${escapeHtml(s)}</span>`).join("");
}

function renderContact(contact) {
  const details = $("contactDetails");
  const emailLink = $("emailLink");
  if (details) {
    const github = PROFILE.socials?.find((s) => s.kind === "github");
    const linkedin = PROFILE.socials?.find((s) => s.kind === "linkedin");

    details.innerHTML = `
      <dt>Email</dt><dd><a href="mailto:${escapeHtml(contact.email)}">${escapeHtml(
      contact.email,
    )}</a></dd>
      <dt>Phone</dt><dd><a href="tel:${escapeHtml(contact.phone)}">${escapeHtml(
      contact.phone,
    )}</a></dd>
      <dt>Location</dt><dd>${escapeHtml(contact.location)}</dd>
      <dt>Availability</dt><dd>${escapeHtml(contact.availability)}</dd>
      <dt>GitHub</dt><dd><a href="${escapeHtml(
        github?.href || "https://github.com/Victorsilva2",
      )}" target="_blank" rel="noreferrer noopener">${escapeHtml(
        github?.label || "GitHub",
      )}</a></dd>
      <dt>LinkedIn</dt><dd><a href="${escapeHtml(
        linkedin?.href || "https://www.linkedin.com/in/victor-marques-silva20",
      )}" target="_blank" rel="noreferrer noopener">${escapeHtml(
        linkedin?.label || "LinkedIn",
      )}</a></dd>
    `;
  }
  if (emailLink) {
    emailLink.href = `mailto:${contact.email}`;
  }
}

function mailtoForForm({ email, name, from, message }) {
  const subject = encodeURIComponent(`Portfolio contact — ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${from}\n\n${message}\n`);
  return `mailto:${encodeURIComponent(email)}?subject=${subject}&body=${body}`;
}

function initContactForm() {
  const form = $("contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const name = String(fd.get("name") || "").trim();
    const from = String(fd.get("email") || "").trim();
    const message = String(fd.get("message") || "").trim();
    if (!name || !from || !message) return;

    const href = mailtoForForm({
      email: PROFILE.contact.email,
      name,
      from,
      message,
    });
    window.location.href = href;
  });
}

function setText(id, value) {
  const el = $(id);
  if (!el) return;
  el.textContent = value;
}

function init() {
  initTheme();

  setText("brandName", PROFILE.name);
  setText("footerName", PROFILE.name);
  setText("footerYear", String(new Date().getFullYear()));

  setText("heroEyebrow", PROFILE.eyebrow);
  setText("heroHeadline", PROFILE.headline);
  setText("heroLede", PROFILE.lede);

  setText("avatarInitials", PROFILE.initials);
  setText("cardName", PROFILE.name);
  setText("cardMeta", PROFILE.role);

  setText("statFocus", PROFILE.stats.focus);
  setText("statStack", PROFILE.stats.stack);
  setText("statLocation", PROFILE.stats.location);

  renderQuickFacts(PROFILE.quickFacts);
  renderSocials(PROFILE.socials);

  initProjects(PROFILE.projects);
  renderTimeline(PROFILE.timeline);
  renderSkills(PROFILE.skills);

  renderContact(PROFILE.contact);
  initContactForm();

  const resumeLink = $("resumeLink");
  if (resumeLink) resumeLink.setAttribute("href", PROFILE.resumeUrl);

  const heroResumeLink = $("heroResumeLink");
  if (heroResumeLink) heroResumeLink.setAttribute("href", PROFILE.resumeUrl);

  setText("aboutIntro", PROFILE.about.intro);
  setText("lookingFor", PROFILE.about.lookingFor);
  setText("outsideOfWork", PROFILE.about.outsideOfWork);
  const aboutNote = $("aboutNote");
  if (aboutNote) {
    if (PROFILE.about.note) {
      aboutNote.hidden = false;
      aboutNote.textContent = PROFILE.about.note;
    } else {
      aboutNote.hidden = true;
      aboutNote.textContent = "";
    }
  }

  const bullets = $("aboutBullets");
  if (bullets) {
    bullets.innerHTML = PROFILE.about.highlights
      .map((b) => `<div class="about-bullet">${escapeHtml(b)}</div>`)
      .join("");
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
