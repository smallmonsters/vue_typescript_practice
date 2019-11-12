import { config } from "./type";
function ajax(method: string, config: config) {
  return new Promise((resolve, reject) => {
    let result: any;
    const xhr: XMLHttpRequest = new XMLHttpRequest();
    xhr.open(method, "/data" as string, true);
    xhr.send(null);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
          result = xhr.response;
          resolve(result);
        }
      }
    };
  });
}
class Axios {
  protected static xhr: XMLHttpRequest;
  public config: config;
  public result: any;
  constructor(config: config) {
    this.config = config;
    Axios.xhr = new XMLHttpRequest();
    this.result = this.init();
  }
  public get(url: string, data: any= null) {
    Axios.xhr.open("get", this.config.baseUrl + url);
    Axios.xhr.send(data);
    return this.result;
  }
  public post(url: string, data: any= null) {
    Axios.xhr.open("post", this.config.baseUrl + url);
    Axios.xhr.send(data);
    return this.result;
  }
  protected init() {
    const ajax = Axios.xhr;
    let result: any;
    return new Promise((resolve, reject) => {
      ajax.onreadystatechange = () => {
        if (ajax.readyState === 4) {
          if ((ajax.status >= 200 && ajax.status < 300) || ajax.status === 304) {
            result = ajax.response;
            resolve(result);
          }
        }
      };
    });
  }
  // private buildUrl(url, data): string {

  // }
}
export default Axios;
