import axios from "axios";
import { Message } from "element-ui";
// axios.defaults.timeout = 5000;
// axios.defaults.headers.post["Content-Type"] = "application/json";
if (process.env !== "production") {
  axios.defaults.baseURL = "/api";
}
if (process.env.VUE_APP_FLAG === "buildtest") {
  axios.defaults.baseURL = "http://shyc.dccnet.com.cn";
}

if (process.env.VUE_APP_FLAG === "prod") {
  axios.defaults.baseURL = "http://per.sh.icbc.com.cn";
}
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
