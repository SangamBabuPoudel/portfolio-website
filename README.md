# Sangam Babu Poudel — Portfolio

Single-page React 19 portfolio, built with Vite, Tailwind CSS, Framer Motion, and React Icons. The existing Vite deployment setup is preserved; no backend or environment variables are required.

## Development

```sh
npm install
npm run dev
npm run lint
npm run build
npm run preview
```

Vercel: use the Vite preset, `npm run build`, and output directory `dist`.

## Updating content

Edit `src/data/portfolio.js` for featured projects, lab details, skills, current activity, roadmaps, achievements, learning paths, and contact links. Add an entry to the relevant array to reuse the UI. Featured projects optionally support `url`, `github`, `caseStudy`, and `documentation` links; buttons appear only when real URLs are supplied. TrustTrace AI includes its supplied Chrome Web Store URL.

Education and the biography remain in their named components. Update `index.html` when changing the public domain or social metadata. The résumé is `public/resume.pdf`; it opens for viewing rather than forcing a download. Both buttons use `profile.resume` in the content configuration, including a PDF-content hash query parameter to bypass previously cached versions. Update that hash when replacing the PDF. The original portrait is preserved in `public/profile.jpg`, with a small display version in `public/profile-thumb.jpg`.

Roadmap steps are explicitly planned because no individual completion milestones were supplied. Update these when there is confirmed progress. The TrustTrace illustration is a labeled interface concept, not a product screenshot. Learning paths are not presented as earned certifications.

## Interactions and accessibility

- Dark theme by default; the theme toggle stores the visitor's preference when storage is available.
- Responsive keyboard-accessible navigation, active-section indicator, scroll progress, and skip link.
- Animated expandable project/lab details work with touch and keyboard, with collapsed content removed from the tab order. Lab filters group monitoring, analysis, and authorized practice.
- The terminal accepts a fixed set of harmless local commands; it never executes shell commands.
- The Konami sequence opens a native dialog with Escape dismissal and focus restoration.
- Reduced-motion preferences disable decorative animation and smooth scrolling.
- Email uses a mailto link with a separate copy button; there is no nonfunctional contact form.

## Verification

`npm run build` and `npm run lint` are the repository's available automated checks. There is no TypeScript or existing unit-test runner. Browser verification should cover 320, 375, 768, 1024, and 1440 px widths, both themes, menu navigation, expandable details, terminal input, copy email, and the easter-egg dialog.
