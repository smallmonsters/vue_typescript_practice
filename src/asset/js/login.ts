// import "../css/base.css"
// import "../css/about.css"

import img from "../image/abc.jpeg"
// import LimitFn from "@/util/LimitFn"
// import _ from "lodash"
// console.log(img, document.getElementById("img"))
document.onload = function () {
  (document.getElementById("img") as HTMLElement).setAttribute("src", img)
}
interface obj {
  name: string
  sayName(): void
}
class Person implements obj {
  name: string
  constructor(n: string) {
    this.name = n
  }
  sayName() {
    console.log('====================================');
    console.log(this.name);
    console.log('====================================');
  }
}
new Person("adsf").sayName()
/**
 * 异步引入
 * import("lodash").then((_) => {
 * alert(_.join([1, 2, 3, 4], "kk"))
 * })
 *
 * */

// alert(_.join([1, 2, 3, 4], "kk"))