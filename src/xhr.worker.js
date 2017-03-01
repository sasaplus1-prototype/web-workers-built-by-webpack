'use strict';

self.addEventListener('message', function(event) {
  var url, xhr;

  try {
    url = JSON.parse(event.data).url;
  } catch(e) {
    throw e;
  }
  
  xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (
        xhr.status >= 200 && xhr.status < 300 ||
        xhr.status === 304 ||
        xhr.status === 1223
      ) {
        self.postMessage(JSON.stringify({
          error: '',
          ok: true,
          text: xhr.responseText,
        }));
      } else {
        self.postMessage(JSON.stringify({
          error: xhr.statusText,
          ok: false,
          text: '',
        }));
      }
    }
  };

  xhr.open('GET', url);
  xhr.send();
}, false);
