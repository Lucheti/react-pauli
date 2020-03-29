import fetchIntercept from 'fetch-intercept';
import { AppReducerAction, AppReducerState } from '../reducers/AppReducer'


export const initInterceptor = (dispatch: React.Dispatch<AppReducerAction>) =>
fetchIntercept.register({
  request: function (url, config) {
    if (!config) config = {}
    let token = localStorage.getItem('token')
    token && (config.headers = {...config.headers, "Authorization": "Bearer " + token})
    return [url, config];
  },

  requestError: function (error) {
    console.log('Request Error: ' + error)
    // Called when an error occured during another 'request' interceptor call
    return Promise.reject(error);
  },

  response: function (response) {
    console.log('Response: ' , response)
    if(!response.ok) {
      console.log(response)
    }
    // if (response.status === 400) localStorage.clear()
    return response;
  },

  responseError: function (error) {
    console.log('Response Error: ' + error)
    return Promise.reject(error);
  }
});

