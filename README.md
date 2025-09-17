# Project Yuan – Personal Website / 個人網站

A minimalist personal website built with **Vite + Vue 3 + TypeScript + Tailwind CSS + Sass + Vue Router**. It showcases projects, essays, travel notes, and a living "User Manual" with a clean, content‑first layout.

---

## Overview / 專案簡介

- A personal site to collect and present Projects, Essays/Notes, Photo snippets, and Journeys.
- Built for speed and simplicity: no backend, static deploy via **GitHub Pages**.
- Consistent typography and card-based layout with Tailwind; content organized by Vue Router views.

- 用於整理與呈現「專案、文章／筆記、影像片段、旅程」的個人網站。
- 主打簡潔與速度：純前端、以 **GitHub Pages** 靜態部署。
- 採用 Tailwind 的卡片式排版與一致字體樣式，並以 Vue Router 分頁管理內容。

---

## Tech Stack / 技術棧

- **Framework**: Vue 3 (Composition API)
- **Bundler/Dev Server**: Vite 6
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3, Sass
- **Routing**: Vue Router 4
- **Formatting**: Prettier (+ eslint-config-prettier / eslint-plugin-prettier)
- **Deploy**: gh-pages

> Minimum Node.js: **>= 18.18** (recommended LTS ≥ 20)

---

## Project Structure / 專案結構（示例）

```bash
project-yuan/
├─ public/
├─ src/
│  ├─ assets/
│  ├─ components/
│  ├─ pages/           # Home, About, User Manual, Changelog, etc.
│  ├─ router/
│  │   └─ index.ts
│  ├─ styles/          # global.scss, tailwind layers
│  ├─ main.ts
│  └─ App.vue
├─ index.html
├─ package.json
├─ postcss.config.cjs
├─ tailwind.config.cjs
└─ tsconfig.json
```

> Note: Actual structure may differ; keep components small and pages content‑oriented.

---

## Key Pages / 主要頁面

**EN**

- **Home**: Project grid, Essays, Captured Flash, Journeys.
- **About**: Brief introduction and purpose.
- **User Manual**: Personal operating manual (habits, principles, current focus).
- **Changelog**: Timeline of life events & updates.

**繁中**

- **首頁**：專案、文章、影像片段、旅程等卡片式總覽。
- **關於**：簡介與網站目的。
- **User Manual**：個人使用說明書（原則、習慣、目前投入事項）。
- **Changelog**：生活與學習的時間軸變更紀錄。

---

## Getting Started / 快速開始

### Prerequisites / 先決條件

- Node.js **>= 18.18**
- pnpm / npm / yarn（任選一個）

### Install / 安裝

```bash
# with pnpm
pnpm install

# with npm
npm install

# with yarn
yarn install
```

### Development / 本機開發

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

Vite dev server will start and print a local URL.

### Format / 程式碼格式化

```bash
pnpm format
# or
npm run format
# or
yarn format
```

---

## Routing & Content Model / 路由與內容模型

- Routes are defined in `src/router/index.ts`.
- Each page under `src/pages/` uses a focused layout and loads its own assets.
- Content is currently authored as Vue SFCs; can be refactored to Markdown‑driven pages if needed.

---

## Styling Guidelines / 樣式指南

- Tailwind for utility‑first styling; keep custom Sass for tokens and small utilities.
- Prefer semantic HTML + minimal custom CSS. Keep components accessible (aria‑labels, focus states).

---

## Quality / 品質

- TypeScript strictness recommended.
- Prettier keeps formatting consistent; avoid large component files (>200 lines) by extracting UI pieces.

---
