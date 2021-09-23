# Webpack-boilerplate
 Boilerplate with babel.

## Installation
```bash
npm install
```

## Usage
### Production build
```bash
npm run build
```
### Development Server
```bash
npm run dev
```
## Dependencies

### webpack
- `webpack` : 5.52.0 
- `webpack-cli` : 4.8.0
- `webpack-dev-server` : 4.1.1
### Loaders
- `babel-loader` : 8.2.2
- `css-loader` : 6.2.0
- `file-loader` : 6.2.0
- `node-sass` : 6.0.1
- `sass-loader` : 12.1.0
- `style-loader` : 3.2.1
### Babel
- `@babel/cli` : 7.15.4
- `@babel/core` : 7.15.5
- `@babel/plugin-proposal-class-properties` : 7.14.5
- `@babel/plugin-transform-arrow-functions` : 7.14.5
- `@babel/preset-env` : 7.15.4
### Plugins
- `clean-webpack-plugin` : 4.0.0
- `html-webpack-plugin` : 5.3.2

## Directory
```
Webpack-boilerplate
│  .gitignore
│  app.js
│  babel.config.json
│  package-lock.json
│  package.json
│  README.md
│  webpack.config.js
│
├─dist
└─src
    │  index.html
    │  index.js
    │
    ├─core
    │      Component.js
    │      Router.js
    │
    ├─scss
    │      style.scss
    │
    └─view
            FirstPage.js
            SecondPage.js
```
