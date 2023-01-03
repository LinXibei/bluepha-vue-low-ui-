import HelloWorld from "./index.vue";

/* istanbul ignore next */
HelloWorld.install = function(Vue) {
  console.log(44344, HelloWorld);
  Vue.component(HelloWorld.name, HelloWorld);
};

export default HelloWorld;