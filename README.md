# My portfolio.

[![Netlify Status](https://api.netlify.com/api/v1/badges/fa940447-adff-4117-ac28-ca2026f68ba8/deploy-status?branch=main)](https://app.netlify.com/sites/mphy/deploys)

Link: https://mphy.me

- Built with Vite & Vue3 & TS
- Inspired By [jsun969](https://jsun969.cn/), [antfu](https://antfu.me) and [Diu](https://ddiu.io/)
- Modify **config.yml** to generate your profile.

## Dev

```json
"scripts": {
  "watch-config": "node ./src/config/dev.config.js",
  "gen-config": "node ./src/config/build.config.js",
  "dev": "pnpm watch-config | vite",
  "build": "pnpm gen-config && vue-tsc --noEmit && vite build",
  "preview": "vite preview"
}
```

> **Note**
> If the changes made to config.yml are not reflected on the webpage in real-time, please re-run 'pnpm dev'.

## Serve

Try [netlify](https://app.netlify.com).
