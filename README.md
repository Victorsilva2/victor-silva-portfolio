# Victor Silva Portfolio

This repository contains my personal portfolio website, showcasing my work in web development and software engineering.

## About Me
Computer Science graduate with experience in full-stack development, IT support, and real-world client projects. I specialize in building responsive, user-focused web applications.

## Featured Projects
- **Cantu Construction Website**  
  https://www.cantuconstruction.com/  
  Developed and deployed a full business website with responsive design and SEO optimization.

- **RGV Special Events Centers (Client, In Progress)**  
  https://rgv-special-events-center.vercel.app/index.html  
  Multi-venue website with modern UI, venue pages, and a strong visual layout.

## Skills
- JavaScript, HTML, CSS
- Node.js, PostgreSQL
- Git, GitHub, Vercel
- REST APIs
- UI/UX Design

## Live Portfolio
(Open `index.html` locally, or deploy to GitHub Pages / Vercel.)

## How to edit this portfolio

Most content is driven by a single object in `script.js`:

- **Update your info**: `PROFILE.name`, `PROFILE.role`, `PROFILE.contact.email`, `PROFILE.socials`
- **Resume page**: `resume.html` (print/save as PDF), and `PROFILE.resumeUrl` if you move it
- **Add projects**: `PROFILE.projects` (title, description, tags, links)
- **Add experience/education**: `PROFILE.timeline`
- **Update skills**: `PROFILE.skills`

## Preview locally

You can open `index.html` directly, but a tiny local server is nicer (so links + caching behave normally).

PowerShell:

```powershell
python -m http.server 5173
```

Then visit `http://localhost:5173`.
