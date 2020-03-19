import fetchIntercept from 'fetch-intercept';
import { AppReducerAction } from '../reducers/AppReducer'


export const initInterceptor = (dispatch: React.Dispatch<AppReducerAction>) =>
fetchIntercept.register({
  request: function (url, config) {
    console.log(dispatch)
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
    if(!response.ok) {
      console.log(response)
      response.json().then( console.log )
    }
    // if (response.status === 400) localStorage.clear()
    return response;
  },

  responseError: function (error) {
    console.log(error)
    return Promise.reject(error);
  }
});

