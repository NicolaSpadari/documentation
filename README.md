# Documentation template

> Based on VitePress, quick cheatsheet of features, minimal reproduction

## Documentation

Check out full docs at https://vitepress.vuejs.org

## Setup

```sh
npx degit NicolaSpadari/documentation
cd ./documentation
npm i
npm run docs:dev
```

## Deploying

### Netlify

Toml file:

```toml
[build]
    publish = "docs/.vitepress/dist"
    command = "npm i && npm run docs:build"
```