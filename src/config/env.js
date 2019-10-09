let baseUrl = '';

if (process.env.NODE_ENV === 'development') {
  baseUrl = '/api';
}
if (process.env.VUE_APP_FLAG === 'buildtest') {
  axios.defaults.baseURL = 'http://shyc.dccnet.com.cn';
}

if (process.env.VUE_APP_FLAG === 'prod') {
  axios.defaults.baseURL = 'http://218.80.0.211:30012';
}

export { baseUrl };
