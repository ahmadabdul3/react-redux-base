import 'whatwg-fetch';
const http = {};

http.base = function(method, url, data, headers) {
  return new Promise((resolve, reject) => {
    fetch(
      url,
      createFetchParams(method, data, headers)
    ).then((response) => {
      return response.json();
    }).then((response) => {
      resolve(response);
    }).catch((error) => {
      reject(error);
    });
  });
};

http.get = function(url, headers) {
  return this.base('GET', url, undefined, headers);
};

http.post = function(url, data, headers) {
  return this.base('POST', url, data, headers);
};

http.patch = function(url, data, headers) {
  return this.base('PATCH', url, data, headers);
};

http.put = function(url, data, headers) {
  return this.base('PUT', url, data, headers);
};

http.delete = function(url, data, headers) {
  return this.base('DELETE', url, data, headers);
};

export default http;

function createFetchParams(method, bodyData, headers) {
  const params = {
    method: method,
    mode: 'cors',
    redirect: 'follow',
    headers: new Headers({
      'Content-Type': 'application/json',
      'X-Key-Inflection': 'camel',
      ...headers,
    }),
  }

  if (bodyData) {
    params.body = JSON.stringify(bodyData);
  }

  return params;
}
