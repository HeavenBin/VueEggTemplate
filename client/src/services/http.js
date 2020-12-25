import axios from "axios";
// import md5 from "js-md5";
// import { randomStr, signHandle, setLocalStorage, getLocalStorage } from "@/assets/js/utils.js";

const httpRequest = axios.create({
  baseURL: "http://127.0.0.1:7001/",
  timeout: 5000
})

httpRequest.interceptors.request.use(
  request => {
    // const data = request.method==='get'?request.params:request.data;
    // const rStr = randomStr();
    // const str = 'qwe1r5ty3ui&o6p' + signHandle(data) + 'randomNumber' + rStr + 'qwe1r5ty3ui&o6p';
    // request.headers["randomNumber"] = rStr;                      // 随机数(唯一性)
    // request.headers["apiSign"] = md5(md5(str)).toUpperCase();    // 签名
    // request.headers["X-Requested-With"] = "XMLHttpRequest";      // AJAX
    // if(getLocalStorage("Authorization")){                        // token
    //   request.headers["Authorization"] = getLocalStorage("Authorization");
    // }


    // let auth = getData("auth");
    // if (auth && auth != "null") {
    //   request.headers["LOGIN-UID"] = auth.id;
    //   request.headers["LOGIN-TOKEN"] = auth.token;
    // }
    // if (request.data && !request.data.isJSON) {
    //   request.data = qsStringify(request.data);
    // }

    return request;
  },
  error => {
    return Promise.reject(error);
  }
);
httpRequest.interceptors.response.use(
  response => {
    console.log("%c http requset success", "color:green",response.config.url, response);
    // if(response.headers.Authorization){
    //   setLocalStorage("Authorization",response.headers.Authorization)
    // }
    // const code = response.data.code;
    // switch (code) {
    //   case 1000:
    //     Toast({
    //       message: response.data.msg,
    //       position: "middle",
    //       duration: 3000
    //     });
    //     return Promise.reject();
    //   case 1001:
    //     location.href = location.origin + location.pathname;
    //     return Promise.reject();
    //   default:
    //     break;
    // }
    return response;
  },
  error => {
    console.log("%c http request failed", "color:red", error.config.url, error);
    // const msg =
    //   error.response.data && error.response.data.text
    //     ? error.response.data.text
    //     : error.response.statusText;
    // Toast({
    //   message: msg,
    //   position: "middle",
    //   duration: 5000
    // });
    return Promise.reject(error);
    // {
      // code: error.response.status,
      // text: msg
    // }
  }
);

export default async (method, url, data = "") => {
  return httpRequest({
    method,
    url,
    data: method === "post" || method === "put" ? data : null,
    params: method === "get" || method === "delete" ? data : null
  });
};
