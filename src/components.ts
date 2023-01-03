import BlUI from "../packages/index";
const element = {
  install(Vue) {
    const { HelloWorld } = BlUI;
    Vue.use(HelloWorld);
  }
};
export default element;