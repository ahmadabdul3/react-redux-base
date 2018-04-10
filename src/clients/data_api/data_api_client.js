import http from 'srcRoot/services/http';
// import jwt from 'jsonwebtoken';
import convertCamelToSnake from 'srcRoot/services/camel_to_snake_converter';

const dataApiClient = {
  baseUrl: function() {
    return process.env.dataApiBaseUrl;
  },
  getHeaders: function() {
    return {
      "AUTHORIZATION": "Bearer " + localStorage.getItem('jwt-token'),
    };
  },
  get: function(url) {
    return http.get(url, this.getHeaders());
  },
  post: function(url, data) {
    const convertedData = convertCamelToSnake(data);
    return http.post(url, convertedData, this.getHeaders());
  },
  patch: function(url, data) {
    const convertedData = convertCamelToSnake(data);
    return http.patch(url, convertedData, this.getHeaders());
  },
  put: function(url, data) {
    const convertedData = convertCamelToSnake(data);
    return http.put(url, convertedData, this.getHeaders());
  },
  delete: function(url, data) {
    const convertedData = convertCamelToSnake(data);
    return http.delete(url, convertedData, this.getHeaders());
  },
};

export default dataApiClient;
