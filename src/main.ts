import Vue from "vue";
import HelloWorld from "../packages/hello-world/index";
const components = [
  HelloWorld,
];
const install = function(Vue: any, opts = {}) {

  components.map(component => {
    Vue.component(component.name, component);
  });

};
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
export default {
  install,
  HelloWorld,
};