import BlHelloWorld from "./index.vue";

/* istanbul ignore next */
BlHelloWorld.install = function(Vue) {
  Vue.component(BlHelloWorld.name, BlHelloWorld);
};

export default BlHelloWorld;