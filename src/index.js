'use strict';

var XHR = require('./xhr'),
    xhr = new XHR();

xhr.addEventListener('error', console.error.bind(console), false);
xhr.addEventListener('message', console.log.bind(console), false);
xhr.postMessage(JSON.stringify({
  url: location.href + '/./data.json',
}));
