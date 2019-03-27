# Svelte3 Starter Kit

Experimenting with Svelte3 Beta and learning it as I go.

## Getting Started

- Install latest Node 10: `nvm install 10`
- Install Yarn: `npm i yarn -g`
- Install http-server: `npm i http-server -g`

## Install Dependencies

- Run `yarn` inside the project folder

## Develop

- Run `npm start` in the project folder to start Webpack watch. Then open another terminal tab and do `http-server dist -c-1`. Then go to `8080`.
- Update `src/index.htm` as the main template. The css and the js links will automatically be added to `dist/index.html`. Note that `htm` was used because Svelte was getting confused...
- Run `npm run lint` to lint the src folder.

## Build

- Run `npm run build` to minify js and css files to `dist/`. To gzip them, install gzip with `brew install gzip` and do `npm run gzip` to gzip css and js files in `dist`.
