import BlHelloWorld from "./index.vue";

/* istanbul ignore next */
BlHelloWorld.install = function(Vue) {
  console.log(44344, BlHelloWorld);
  Vue.component(BlHelloWorld.name, BlHelloWorld);
};

export default BlHelloWorld;