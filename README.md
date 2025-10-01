# Next Portfolio

## Stack
- Next.js 14.2.32 (App Router)
- React 18
- TypeScript
- Tailwind CSS (+ typography)
- MDX via `@next/mdx`
- Self-hosted **Plus Jakarta Sans** via `next/font`

## Get started
```bash
pnpm i   # or npm i / yarn
pnpm dev # or npm run dev / yarn dev
```

Then open http://localhost:3000

## Structure
```
app/
  (site)/
    blog/
      hello-world.mdx
    page.tsx          # Home sections (Hero, About, Security, Projects, Experience, Education, Certs, Contact)
components/
  TopDock.tsx         # Rounded top dock with hover-expand glow
  ThemeToggle.tsx
styles/
  globals.css         # Tokens + dock interactions + Tailwind layers
```

## Notes
- The design tokens in `globals.css` are clean-room and approximate the look-and-feel.
- Update social links in `components/TopDock.tsx` and content in `app/(site)/page.tsx`.
- Add more MDX posts under `app/(site)/blog/` and link them from your blog index.


## Troubleshooting
- If you see `Cannot find module '@mdx-js/loader'`, install MDX peers:
  ```bash
  pnpm add -D @mdx-js/loader
  pnpm add @mdx-js/react
  ```
- If you're on Node 22 and run into oddities, try Node 20 LTS:
  ```bash
  nvm use 20
  ```
  (or pin with Volta / .nvmrc)


### Note on `globals.css` import
If you see `Module not found: Can't resolve './globals.css'` in `app/layout.tsx`, it's because global CSS lives in `styles/globals.css`.
The import has been corrected to:
```ts
import '@/styles/globals.css'
```
Alternatively, you can move the file to `app/globals.css` and keep the old relative import.
