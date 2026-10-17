# next-rsc-lab

A tiny Next.js (App Router) project that shows **Server Components** and
**Client Components** working together.

- `app/page.jsx` is a **Server Component** (the default). It is `async`, fetches
  the menu on the server, and ships **no JavaScript for itself** &mdash; the browser
  gets finished HTML.
- `app/components/LikeButton.jsx` is a **Client Component**. It starts with
  `"use client"` so it can use `useState` and `onClick` and update instantly in
  the browser, with no page reload.

The Server Component renders the Client Component and passes it a serializable
prop (`initialLikes`). That is the normal pattern: keep `"use client"` at the
small, interactive leaves, and let everything above it stay on the server.

## Run it

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Try this

1. Open DevTools &#8594; Network, reload, and notice how little JavaScript loads.
2. Click a Like button: it updates instantly, no page reload.
3. In `app/page.jsx`, try adding `onClick` directly &mdash; Next.js will tell you a
   Server Component cannot use event handlers. That error is the lesson.
