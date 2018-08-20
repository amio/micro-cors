# @amio/micro-cors

[![@amio/micro-cors][npm-badge]][npm-link]
[![Build Status][build-src]][build-link]

Simple [CORS][cors-link] middleware for Zeit's [Micro](https://github.com/zeit/micro)

## Install

```
npm install @amio/micro-cors
```

## Usage

Basic

```js
const micro = require('micro')
const cors = require('micro-cors')

const handler = (req, res) => micro.send(res, 200, 'ok!')

module.exports = cors()(handler)
```

With options

```js
const micro = require('micro')
const cors = require('micro-cors')

const options = { allowMethods: 'PUT,POST' }
const handler = (req, res) => micro.send(res, 200, 'ok!')

module.exports = cors(options)(handler)
```

### Options

##### `allowMethods` &lt;String>

default: `'HEAD,GET,POST,PUT,PATCH,DELETE,OPTIONS'`

##### `allowHeaders` &lt;String>

default: `'X-Requested-With,Access-Control-Allow-Origin,X-HTTP-Method-Override,Content-Type,Authorization,Accept'`

##### `exposeHeaders` &lt;String>

default: `undefined`

##### `maxAge` &lt;String>

default: `86400`

##### `origin` &lt;String>

default: `*`

[cors-link]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
[npm-badge]: https://badgen.net/npm/v/@amio/micro-cors
[npm-link]: https://www.npmjs.com/package/@amio/micro-cors
[build-src]: https://travis-ci.com/amio/micro-cors.svg?branch=master
[build-link]: https://travis-ci.com/amio/micro-cors
