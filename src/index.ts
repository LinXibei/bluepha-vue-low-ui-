import Vue, { h } from "vue";
import App from "./App.vue";
import element from "./components";
Vue.use(element);
// console.log(111, HelloWorld);
new Vue({
  render: (h) => h(App)
}).$mount("#app");