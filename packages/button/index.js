import Button from "./index.vue";

/* istanbul ignore next */
Button.install = function(Vue) {
  console.log(4455, Button);
  Vue.component(Button.name, Button);
};

export default Button;