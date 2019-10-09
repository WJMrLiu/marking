import axios from 'axios';
import { Message } from 'element-ui';
// axios.defaults.timeout = 5000;
import { baseUrl } from '@/config/env';
axios.defaults.baseURL = `${baseUrl}`;
axios.defaults.headers.post['Content-Type'] = 'application/json';

request.interceptors.request.use(
  // 给每个请求添加一个时间戳， 防止走缓存。 可以解决在ie浏览器上不请求的问题
  config => {
    if (config.method == 'post') {
      config.data = {
        ...config.data,
        _t: Date.parse(new Date()) / 1000,
      };
    } else if (config.method == 'get') {
      config.params = {
        _t: Date.parse(new Date()) / 1000,
        ...config.params,
      };
    }
    return config;
  },
);

function request(options) {
  return axios(options)
    .then(res => {
      return res;
    })
    .catch(error => {
      Message.error('请求失败');
      return Promise.reject(error);
    });
}

export default request;
