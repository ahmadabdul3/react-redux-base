import dataApiClient from './data_api_client';

//
// session CLIENT - communicates with session controller/routes
//
const sessionClient = {
  baseUrl: function() {
    return dataApiClient.baseUrl() + 'sessions/';
  },
};

sessionClient.create = function(data) {
  const url = this.baseUrl();
  data = { session: data };
  return dataApiClient.post(url, data);
};

// sessionClient.decode = function() {
//   const url = this.baseUrl();
//   return dataApiClient.get(url);
// }

export default sessionClient;
