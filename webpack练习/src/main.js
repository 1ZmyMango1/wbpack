import { marquee } from "./marquee.js";
import { tab } from "./tab.js";

marquee();
tab();

// 引入
import "./styles/index.css";

import "./styles/index.less";

import gifStr from "./assets/1.gif";
import pngStr from "./assets/logo_small.png";

const gif = document.createElement("img");
const png = document.createElement("img");

gif.src = gifStr;
png.src = pngStr;

document.body.appendChild(gif);
document.body.appendChild(png);

// 引入字体图标文件
import "./assets/fonts/iconfont.css";

const fn = () => {
  console.log("测试处理高版本js语法功能");
};

console.log(fn);

// import App from "./app.vue";
// import Vue from "vue";

// new Vue({
//   render: (h) => h(App),
// }).$mount("#app");
