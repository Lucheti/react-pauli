import fetchIntercept from 'fetch-intercept';


export const initInterceptor = () =>
fetchIntercept.register({
  request: function (url, config) {
    // debugger
    if (!config) config = {}
    let token = localStorage.getItem('token')
    token && (config.headers = {...config.headers, "Authorization": "Bearer " + token})
    return [url, config];
  },

  requestError: function (error) {
    console.log(error)
    // Called when an error occured during another 'request' interceptor call
    return Promise.reject(error);
  },

  response: function (response) {
    console.log(response)
    if (response.status === 400) localStorage.clear()
    return response;
  },

  responseError: function (error) {
    console.log(error)
    return Promise.reject(error);
  }
});

