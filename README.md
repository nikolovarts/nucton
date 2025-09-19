# NUCTON Landing

Production-ready React + Tailwind landing page for [nucton.net](https://www.nucton.net): a program for young founders (15–19) connecting them with mentors and investors.

## ✨ Highlights
- League Spartan + Inter typography with accessible colour palette built on #0097b2 / #f2efe7 / #000000.
- Responsive single-page layout: hero, value props, program snapshot, student journey, mentors, investors, FAQ, and CTA.
- Animated hero (Framer Motion) with reduced-motion safeguards and hover-elevating cards.
- Lead capture form with student/investor tabs, validation, GDPR consent and configurable endpoint.
- SEO ready: canonical URL, meta/OG/Twitter tags, sitemap generation, optimized OG image, robots.txt, and favicon.
- Performance tooling: Tailwind, code-splitting-ready architecture, legacy browser support, and build-time image optimisation.

## 🚀 Getting Started
```bash
npm install
npm run dev
```
Visit http://localhost:5173 to preview locally.

## 🧱 Available Scripts
- `npm run dev` – Start Vite dev server.
- `npm run build` – Type-check and produce a production build (`dist/`). Generates `sitemap.xml` automatically.
- `npm run preview` – Preview the production build.
- `npm run lint` – Run ESLint across the project.

## 🔌 Environment
Optional: configure `VITE_FORMS_ENDPOINT` to point the lead form to a custom backend (defaults to `https://submit-form.com/nucton-demo`).

## ♿ Accessibility & Performance
- WCAG 2.1 AA contrast, focus-visible rings and keyboard-friendly navigation.
- Framer Motion animations respect `prefers-reduced-motion`.
- Mobile-first layout targeting Lighthouse ≥90 (mobile) and CLS <0.1.

## 📦 Deployment
`npm run build` outputs a static bundle ready for Netlify/Vercel/Cloudflare Pages. Ensure a 301 redirect to `https://www.nucton.net/` and serve `/sitemap.xml` and `/robots.txt`.

## 🔍 Notes
- `vite-plugin-imagemin` is pinned for asset compression. `npm audit` may surface advisories inherited from imagemin toolchain; investigate before upgrading with `npm audit fix --force`.
- Additional languages can be introduced by extending the copy modules in `src/data`.
