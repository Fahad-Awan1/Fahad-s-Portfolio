# Fahad · Portfolio

Personal portfolio of Muhammad Fahad Riaz: full stack developer and automation expert.

A static, library-free website (HTML, CSS and vanilla JavaScript). No build step.

## Pages
- `index.html`: home
- `projects.html` and `projects/*.html`: work, each with a screen slider
- `services.html`, `about.html`, `contact.html`

## Run locally
Open `index.html`, or serve the folder:

```bash
python -m http.server 8000
```

## Editing
- Contact details and EmailJS IDs live in the `SITE` object at the top of `script.js`.
- Project screenshots are in `assets/projects/<project>/`.
- `email-templates/` holds the HTML used for the two EmailJS templates (reference only, not loaded by the site).

## Deploy
Any static host works (Vercel, Netlify, GitHub Pages). On Vercel: import the repo, framework preset **Other**, no build command, output directory `/`.
