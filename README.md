<h1 align="center">Web Starter</h1>
<p align="center">
  <sub>Webpack 4, TypeScript, EJS, Babel, SASS, PostCSS<sub>
</p>

This is my personal Webpack 4 config for single page (index.html) without frameworks

## Installation

Clone this repository and install modules:

```bash
git clone https://github.com/qWici/web-starter.git
cd web-starter
npm install
```

## Commands

Run development mode

```bash
npm run start
```

Run build mode

```bash
npm run build
```

## Features

- TypeScript
- Babel
- EJS
- CSS/SASS + PostCSS (CSSnano, autoprefixer) + Normilize
- Hashing
- Assets folder for Production
- Minifying JS & CSS
- Two .js chunks - main.js and vendor.js (modules)

![](./docs/split.png)

## Entry point

Webpack.config.js

```javascript
{
  entry: { main: "./src/index.ts" }, // Entry Point
  output: {
    path: path.resolve(__dirname, "dist"), // Output folder (Production)
    filename: "[name].[chunkhash].js",
    pathinfo: false
}
```

## TODO

- [ ] TSLinter
- [ ] Jest
- [ ] Basic SCSS (font mixin etc)
- [ ] Assets examples (thumbs, manifest, .htaccess)
