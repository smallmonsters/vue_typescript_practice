import Vue from "vue";
import App from "./app.vue";
// @ts-ignore
import Axios from "./util/axios/index.ts";
const axios: Axios = new Axios({
  baseUrl: "http://10.10.14.45:3000",
});
axios.post("/data")
.then((res: any) => {
  console.log(res);
});
new Vue({
  render: (h) => h(App),
  // router,
}).$mount("#app");
