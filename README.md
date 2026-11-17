# 个人导航站

基于 Cloudflare Worker 的个人导航站，域名 `z-dhz.10704002.xyz`。

## 结构
- `public/index.html` — 导航页（静态资源）
- `src/index.js` — Worker 入口，把静态请求交给 ASSETS
- `wrangler.jsonc` — Worker 配置与自定义域

## 部署
```bash
wrangler deploy
```
