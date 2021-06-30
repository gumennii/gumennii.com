## Description
* Personal website for Mihail Gumennii - Senior Front-End Engineer.
* It is built with following old traditions of semantic HTML, clean CSS and Pure JavaScript.
* CSS is written with PostCSS plugins and JavaScript is using ES6 features.

## Prerequisites

- [Install `node` (comes with `npm`)](https://nodejs.org/).

## Development

- `yarn` - install dependencies
- `yarn start` - start development server [localhost:8080](http://localhost:8080/)

_Please note: You can use `npm` instead of `yarn`_


### Where are generated files?

In `development` mode `webpack` does not write generated files to disk, in order to change it
switch `devServer.writeToDisk` to `true` in [webpack.dev.js](./webpack.dev.js)

## Production

- `yarn build` to prepare `html`, `css`, `js` files in `build/` directory
- `yarn preview` - run build and serve production files locally
