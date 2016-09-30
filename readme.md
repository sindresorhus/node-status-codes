# node-status-codes [![Build Status](https://travis-ci.org/sindresorhus/node-status-codes.svg?branch=master)](https://travis-ci.org/sindresorhus/node-status-codes)

> Node.js [`http.STATUS_CODES`](https://nodejs.org/api/http.html#http_http_status_codes) [ponyfill](https://ponyfill.com)

The built-in list of HTTP status codes [differ](https://github.com/nodejs/node/commit/8be6060020) between Node.js versions, so this is a good way to make sure it's consistent. Will be kept up to date with latest Node.js.


## Install

```
$ npm install --save node-status-codes
```


## Usage

```js
var nodeStatusCodes = require('node-status-codes');

console.log(nodeStatusCodes[200]);
//=> 'OK'

console.log(nodeStatusCodes[500]);
//=> 'Internal Server Error'
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
