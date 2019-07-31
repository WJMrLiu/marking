import axios from "axios";
import { Message } from "element-ui";
axios.defaults.timeout = 5000;
axios.defaults.headers.post["Content-Type"] = "application/json";
function request(options) {
  return axios(options)
    .then(res => {
      return res;
    })
    .catch(error => {
      Message.error("请求失败");
      return Promise.reject(error);
    });
}

export default request;
