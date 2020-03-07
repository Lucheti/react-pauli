const BASE_URL = (path?: string) => 'http://enpapp.bhzu4utgph.us-east-1.elasticbeanstalk.com/' + (path? path : "")

export const getUsers = () =>
  fetch(BASE_URL(""))