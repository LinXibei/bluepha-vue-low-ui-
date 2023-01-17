import Vue from "vue";
import VueRouter from "vue-router";
import * as HelloWorld from "../lib/hello-world";
import demoBlock from "./components/demo-block.vue";
import "./assets/docs.css";
import App from "./index.vue";

// import hljs from "highlight.js";
import routes from "./routes.js";
Vue.use(HelloWorld);
Vue.use(VueRouter);
Vue.component("demo-block", demoBlock);
const router = new VueRouter({
  mode: "hash",
  base: __dirname,
  routes
});
router.afterEach(() => {
  // Vue.nextTick(() => {
  //   const codeElems = document.querySelectorAll("pre code:not(.hljs)");
  //   Array.prototype.forEach.call(codeElems, hljs.highlightElement);
  // });
});
new Vue({ // eslint-disable-line
  router,
  render: h => h(App),
}).$mount("#app");