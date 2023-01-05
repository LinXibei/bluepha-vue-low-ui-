import HelloWorld from "./hello-world/index.js";
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