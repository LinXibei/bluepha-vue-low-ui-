
import { NavJson } from "./nav.js";
// import Home from "./components/home.vue";
let routes = [];
NavJson["list"].forEach(({ name, title, path, description}) => {
  routes.push({
    name,
    path,
    meta: {
      title: title || name,
      description
    },
    component: r => require.ensure([], () => r(require(`./docs${path}.md`)))
  });
});
routes = routes.concat([{
  path: "/",
  redirect: "/"
}, {
  path: "*",
  redirect: "/"
}]);
export default routes;