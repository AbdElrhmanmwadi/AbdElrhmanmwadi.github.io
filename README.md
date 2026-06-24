# Abd Elrahman Wadi — AI Engineer Portfolio

A modern, fully responsive portfolio website built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**. Clean Apple/Vercel-style UI with a dark/light theme toggle, smooth scroll animations, SEO meta tags, and a static export that deploys to **Vercel** or **GitHub Pages**.

![Tech](https://img.shields.io/badge/Next.js-14-black) ![Tailwind](https://img.shields.io/badge/TailwindCSS-3-38bdf8) ![License](https://img.shields.io/badge/license-MIT-green)

---

## ✨ Features

- ⚡ **Next.js 14 (App Router)** with static export (`output: "export"`)
- 🎨 **Tailwind CSS** — mobile-first, fully responsive
- 🌗 **Dark / Light mode** toggle (`next-themes`)
- 🪄 **Framer Motion** scroll-reveal animations
- 🧩 **Reusable components** (Hero, About, Skills, Projects, Contact, Footer)
- 🃏 **Project cards** with hover glow effects
- 🔍 **SEO** meta tags + OpenGraph + Twitter cards
- 📄 **Downloadable CV** button
- 🚀 One-click deploy to **Vercel** or **GitHub Pages**

---

## 📁 Folder Structure

```
portfolio/
├── app/
│   ├── globals.css        # Tailwind + custom styles
│   ├── layout.jsx         # Root layout, fonts, SEO metadata, theme provider
│   └── page.jsx           # Page that composes all sections
├── components/
│   ├── Navbar.jsx         # Sticky responsive nav + mobile menu
│   ├── Hero.jsx           # Hero with CTAs and skill badges
│   ├── About.jsx          # Professional summary + highlight cards
│   ├── Skills.jsx         # Grouped skills grid
│   ├── Projects.jsx       # Projects grid
│   ├── ProjectCard.jsx    # Reusable project card with hover effects
│   ├── Contact.jsx        # Contact channels
│   ├── Footer.jsx         # Footer with social links
│   ├── SectionHeading.jsx # Reusable section title
│   ├── Reveal.jsx         # Reusable scroll-animation wrapper
│   ├── ThemeProvider.jsx  # next-themes provider
│   └── ThemeToggle.jsx    # Sun/Moon toggle button
├── data/
│   ├── site.js            # ⬅️ Your name, email, links, CV path
│   ├── skills.js          # ⬅️ Your skills
│   └── projects.js        # ⬅️ Your projects
├── public/
│   ├── cv.pdf             # ⬅️ Replace with your real CV
│   └── .nojekyll          # Lets GitHub Pages serve _next assets
├── .github/workflows/
│   └── deploy.yml         # GitHub Pages CI/CD
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev
# open http://localhost:3000

# 3. Build a static production site (output in ./out)
npm run build
```

---

## ✏️ Customize Your Content

All your personal content lives in the **`data/`** folder — no need to touch components:

| File              | What to edit                                    |
| ----------------- | ----------------------------------------------- |
| `data/site.js`    | Name, title, tagline, **email, GitHub, LinkedIn** |
| `data/skills.js`  | Your skill groups                               |
| `data/projects.js`| Project titles, descriptions, **GitHub links**  |
| `public/cv.pdf`   | Replace with your real CV PDF                   |
| `app/layout.jsx`  | Update `siteUrl` for correct SEO/OpenGraph URLs |

> 🔎 Search the project for `your-username` and `your.email@example.com` and replace them.

---

## ☁️ Deployment

### Option A — Vercel (recommended, easiest)

1. Push this repo to GitHub (see below).
2. Go to [vercel.com/new](https://vercel.com/new), import the repo.
3. Framework preset = **Next.js** → Deploy. Done. ✅

### Option B — GitHub Pages (free, automated)

1. Push to GitHub (steps below).
2. In your repo: **Settings → Pages → Build and deployment → Source = GitHub Actions**.
3. Every push to `main` runs `.github/workflows/deploy.yml`, builds the static
   site with the correct sub-path, and publishes it to
   `https://<your-username>.github.io/<repo-name>/`.

> The workflow sets `GITHUB_PAGES=true` and `REPO_NAME` automatically so asset
> paths resolve under the project sub-path.

---

## 📦 Push to GitHub

```bash
git init
git add .
git commit -m "feat: AI Engineer portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

---

## 🛠️ Tech Stack

Next.js · React 18 · Tailwind CSS · Framer Motion · next-themes · lucide-react

## 📄 License

MIT — free to use and adapt.
