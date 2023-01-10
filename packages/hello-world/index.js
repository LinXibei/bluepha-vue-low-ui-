import HelloWorld from "./index.vue";

/* istanbul ignore next */
HelloWorld.install = function(Vue) {
  Vue.component(HelloWorld.name, HelloWorld);
};

export default HelloWorld;