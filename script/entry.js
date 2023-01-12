const path = require("path");
const fse = require("fs-extra");
const render = require("json-templater/string");
const endOfLine = require("os").EOL;
const componentJson = require("../component.json");
const entryTemplate = `{{importList}}
const components = [
  {{importNames}}
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
  {{importNames}}
};`;
function compNameToCamelCase(name) {
  const str = name.replace(/\-(\w)/g, function(all, key) {
    return key.toLocaleUpperCase();
  });
  return str[0].toLocaleUpperCase() + str.substring(1);
}

const importList = [], importNames = [];
Object.keys(componentJson).forEach((key) => {
  importList.push(`import ${compNameToCamelCase(key)} from "./${key}/index";`);
  importNames.push(`${compNameToCamelCase(key)}`);
});
const template = render(entryTemplate, {
  importList: importList.join(endOfLine),
  importNames: importNames.join("," + endOfLine)
});
const PackagePath = path.resolve(__dirname, "..", "packages");
fse.outputFile(`${PackagePath}/index.ts`, template);

