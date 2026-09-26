# Mateo Tiedra Portfolio

Next.js 15 / React 19 portfolio exported as a static site.

## Development

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
env -u STANDALONE npm run build
```

The static export is written to `out/`. To exercise that exact output locally:

```bash
python3 -B -m http.server 8765 --bind 127.0.0.1 --directory out
```

Set `STANDALONE=1` when a standalone Next.js server build is required instead.

## Languages

The portfolio is available in French and English. On first visit, the browser's preferred language selects French for `fr-*` and English otherwise. The FR/EN buttons at the top of the page override that choice and save it in local storage for future visits. The selection applies to project content and category-filtered routes (`/dev`, `/pro`, `/academic`, `/assoc`, `/cv`). Because the site is statically exported, the initial HTML is English; the browser applies the visitor's selected language after hydration.

## Media startup and playback

The startup overlay remains until the selected projects' still previews, fonts, and video previews from the first two rendered projects have settled. An 8-second deadline prevents a failed or hanging resource from blocking the page indefinitely.

Videos keep their poster visible until a decoded frame is available. Sources prepare within 1200 px of the viewport, while playback is restricted to videos that actually intersect the viewport in a visible browser tab. Offscreen videos pause without resetting their current time. MP4 assets are stored with front-loaded metadata and no unused audio streams.

## Verification

```bash
./node_modules/.bin/tsc --noEmit
env -u STANDALONE npm run build
```
