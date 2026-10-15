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

Project entries live in `app/components/projects.tsx`, newest first. Keep the French translations in the same order as the English entries. Crab Fit MCP is the latest project, listed in the Development category.

The Crab Fit MCP preview is a screenshot of the Crab Fit homepage, stored at `public/images/crabfit-mcp/screenshot.webp`; personal recently visited events are excluded.

## Media startup and playback

The startup overlay remains until the selected projects' still previews, fonts, and video previews from the first two rendered projects have settled. An 8-second deadline prevents a failed or hanging resource from blocking the page indefinitely.

The startup overlay uses the page container's width (`100%`), not `100vw`, so it does not create horizontal overflow when the vertical scrollbar appears.

Videos keep their poster visible until a decoded frame is available. Sources prepare within 1200 px of the viewport, while playback is restricted to videos that actually intersect the viewport in a visible browser tab. Offscreen videos pause without resetting their current time. MP4 assets are stored with front-loaded metadata and no unused audio streams.

Orion is remuxed without audio using video stream copy: H.264, 720 × 1280, 25 fps. Its compressed video and all 641 packet timestamps are unchanged; removing the AAC stream reduces the file from 5,773,283 to 5,557,234 bytes. The container ends at 25.64 seconds instead of 25.77 seconds because the audio tail is gone.

The existing grain, glitch and halo composition remain unchanged. A production-browser experiment replacing the fixed backdrop blur with local halo blur did not improve the median scroll frame count, so that rendering change was not retained.

## Verification

```bash
./node_modules/.bin/tsc --noEmit
env -u STANDALONE npm run build
```
