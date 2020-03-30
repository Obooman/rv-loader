# rv-loader

loader for ractive template

## Install

```bash
$ npm i --save-dev rv-loader
# or
$ yarn add -D rv-loader
```

## Usage

```js
// webpack config
module: {
  rules: [
    {
      test: /\.hb$/, // or other suffix you like it.
      use: ["rv-loader"]
    }
  ];
}
```
