# Sui homepage in Next.js

An editable Next.js App Router reconstruction of the public [sui.io homepage](https://www.sui.io/), captured on September 13, 2026. The page is composed from React/TSX sections, with local styles, fonts, images, videos, Rive diagrams, Lottie icons and a 76-frame scroll animation.

## Run locally

Requires Node.js 22 or newer; `.nvmrc` selects 24.

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:3002. Edits to the components update the development preview.

For a production preview, stop the development server first:

```sh
npm run build
npm run typecheck
npm start
```

## Edit the page

- `src/app/page.tsx`: section order and page structure.
- `src/components/sections/`: 12 named components including navigation, hero, Basecamp, partners, economy, stack, benefits, industries, news and footer.
- `src/app/globals.css`: captured responsive styling, fonts and a small overflow correction.
- `src/app/layout.tsx`: title, description, favicon and document attributes.
- `src/components/SiteRuntime.tsx`: load the animation dependencies after React hydration and handle local form submissions.
- `public/sui-interactions.js`: adapted, readable homepage and navigation animations.
- `public/assets/`: local media, font and vendor files.
- `public/sequence/`: all 76 scroll-animation frames.
- `public/data/network-snapshot.json`: the captured HTML's TVL fallback value. This is a static snapshot, not a live financial feed.

React owns the page markup. The original Webflow, GSAP, Lenis, Rive and Lottie engines still power the interactions; these vendor libraries have not been rewritten in React. Keep the document's `data-wf-*` attributes and animation selector attributes when editing sections. The lifecycle adapter handles initialization, timers, animation frames, global listeners and cleanup. The captured runtime assumes this single homepage; revisit that lifecycle when adding client-side routes or substantially restructuring animated elements.

## Scope and differences

This reconstruction covers the homepage, including desktop and mobile navigation menus. Links to other Sui pages, documentation, blogs, videos, wallets and event registration lead to their original destinations. Those services and pages are not implemented locally.

Newsletter forms do not submit data. They display a local-preview message. Hosted analytics, cookie-consent and Weglot translation services are omitted; this version is English only. The TVL animation uses a local snapshot. No CMS, private source code, original design-editor project, wallet service or backend was recovered.

Migration adjustments include normalized local asset paths, local Rive WASM and image-sequence dependencies, a guard for a missing ecosystem navbar in the source script, removal of two invalid CSS declarations ignored by browsers, and protection against drawing an undecoded image. The source Rive files log a missing-view-model diagnostic on both the original and local page; the browser checks record it separately from uncaught errors.

## Browser checks

With a preview running:

```sh
npm run verify
# Also capture the live reference at matching desktop/mobile sizes:
npm run verify -- --compare
```

Set `LOCAL_URL` to another local preview address, or `CHROME_PATH` to a Chrome/Chromium executable if necessary. The default browser path is macOS Google Chrome. Reports and screenshots are written to ignored `evidence/verification/`.

Verification checks desktop/mobile menus, loads all page sections with external HTTP requests blocked, records missing assets and browser errors, and decodes all 76 sequence frames. The comparison command creates screenshots for manual review; it does not prove perfect fidelity or test the original site's backend.

## Capture and migration reference

The initial capture used [D-j-View](https://github.com/Nuel-osas/D-j-View). Framework conversion and missing runtime dependencies required separate site-specific work.

`scripts/prepare-assets.mjs` and `scripts/migrate.mjs` are the recipe for this capture, **not setup steps**. They require ignored reference files: the original response HTML, browser network report, Slater global/home scripts and the D-j-View capture report/files. `SUI_CAPTURE` can select a capture directory. Running the migration overwrites generated components, styles and animations; edit the finished app directly during normal development.

The original design, content, artwork, fonts and third-party libraries retain their respective rights and licenses. No new redistribution license is assigned by this project.
