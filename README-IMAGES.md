# Image Slots Reference

Drop your photos into `artifacts/portfolio/public/assets/images/` and update `artifacts/portfolio/src/config/images.ts` if you need to change a path.

## Slots

| File name | Section | Recommended dimensions | Notes |
|-----------|---------|----------------------|-------|
| `hero.jpg` | Hero — right-side portrait | 800 × 1000 px (portrait, 4:5 ratio) | Fills a 4:5 aspect frame; crop to face/upper body |
| `about.jpg` | About — left-side square portrait | 800 × 800 px (1:1 square) | Square crop; used as the personal portrait |
| `portfolio-1.jpg` | Work — Lumina Skincare card | 1200 × 900 px (4:3 landscape) | Case study thumbnail |
| `portfolio-2.jpg` | Work — Oat & Co. card | 1200 × 900 px (4:3 landscape) | Case study thumbnail |
| `portfolio-3.jpg` | Work — Vertex FinTech card | 1200 × 900 px (4:3 landscape) | Case study thumbnail |
| `portfolio-4.jpg` | Work — Aura Athletics card | 1200 × 900 px (4:3 landscape) | Case study thumbnail |
| `team-1.jpg` | Team member slot (reserved) | 600 × 600 px (1:1 square) | Not currently rendered; ready for a team section |
| `mood-1.jpg` | Moodboard slot 1 (reserved) | 800 × 600 px | Not currently rendered; ready for a moodboard section |
| `mood-2.jpg` | Moodboard slot 2 (reserved) | 800 × 600 px | Not currently rendered; ready for a moodboard section |
| `mood-3.jpg` | Moodboard slot 3 (reserved) | 800 × 600 px | Not currently rendered; ready for a moodboard section |

## How it works

1. Drop the file (e.g. `about.jpg`) into `artifacts/portfolio/public/assets/images/`.
2. The path in `src/config/images.ts` already points to `/assets/images/about.jpg` — no code change needed.
3. The `<PlaceholderImage />` component will automatically detect the file and replace the warm taupe placeholder with your real photo.

## Adding a new image slot

1. Add your file to `public/assets/images/`.
2. Open `src/config/images.ts` and add a new key:
   ```ts
   export const IMAGES = {
     // ...existing keys
     newSlot: "/assets/images/my-new-image.jpg",
   };
   ```
3. In the component where you want the image, import both:
   ```tsx
   import PlaceholderImage from "@/components/ui/PlaceholderImage";
   import { IMAGES } from "@/config/images";
   ```
4. Replace your placeholder div with:
   ```tsx
   <PlaceholderImage src={IMAGES.newSlot} alt="Description" className="w-full h-full" />
   ```
