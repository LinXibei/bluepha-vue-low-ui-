"use-strict";
const inquirer = require("inquirer");
const fs = require("fs");
const fse = require("fs-extra");
const path = require("path");
const componentJson = require("../component.json");
const endOfLine = require("os").EOL;
function inquirerFunc({ choices, defaultValue, message, type = "list", require = true, mask = "*" }) {
  const options = {
    type,
    name: "name",
    message,
    default: defaultValue,
    require,
    mask,
  };
  if (type === "list") {
    options.choices = choices;
  }
  return inquirer.prompt(options).then((answer) => {
    return answer.name;
  });
}
function getAddComponentName() {
  return inquirerFunc({
    type: "string",
    message: "请输入组件名称：",
    validate: (val) => {
      if (!val) {
        return "组件名称必填";
      } else if (validateSameComponent(val)) {
        return "当前组件名已存在，请重新输入";
      }
      return val.toLocaleLowerCase();
    }
  });
}
function validateSameComponent(key) {
  const compNames = Object.keys(componentJson);
  return compNames.includes(key.toLocaleLowerCase());
}
function compNameToCamelCase(name) {
  const str = name.replace(/\-(\w)/g, function(all, key) {
    return key.toLocaleUpperCase();
  });
  return str[0].toLocaleUpperCase() + str.substring(1);
}
// 获取当前输入的组件名
class AddComponent {
  constructor() {
    this.compNameLowCase = "";
    this.compNameCamelCase = "";
    this.PackagePath = "";
    this.TypesPath = path.resolve(__dirname, "..", "types");
    this.componentJsonPath = path.resolve(__dirname, "..", "component.json");
  }
  async init() {
    this.compNameLowCase = await getAddComponentName();
    this.compNameCamelCase = compNameToCamelCase(this.compNameLowCase);
    this.createPackage();
    this.createFiles();
    await this.writeComponentJson();
    await this.writeTypes();
    console.log("创建组件成功");
  }
  // 创建相关文件 xx.js、index.vue
  createFiles() {
    const files = {
      "index.vue": `<template>
  <div class="bl-${this.compNameLowCase}">${this.compNameLowCase}</div>
</template>
<script lang="ts">
export default {
  name: "Bl${this.compNameCamelCase}",
};
</script>`,
      "index.js": `import ${this.compNameCamelCase} from "./index.vue";
/* istanbul ignore next */
${this.compNameCamelCase}.install = function(Vue) {
  Vue.component(${this.compNameCamelCase}.name, ${this.compNameCamelCase});
};
export default ${this.compNameCamelCase};`
    };

    try {
      Object.entries(files).forEach(async (file) => {
        const [fileName, fileContent] = file;
        await fse.outputFile(`${this.PackagePath}/${fileName}`, fileContent);
      });
    } catch(e) {
      console.error("创建文件错误：" + e);
      process.exit(1);
    }
  }
  // 上述文件写入到packages/xx/folder中
  createPackage() {
    this.PackagePath = path.resolve(__dirname, "../packages", this.compNameLowCase);
    fse.ensureDirSync(this.PackagePath);
  }
  // 写入components.json中
  async writeComponentJson() {
    if (!componentJson[this.compNameLowCase]) {
      console.error(`${this.compNameLowCase} 已存在`);
      process.exit(1);
    }
    componentJson[this.compNameLowCase] = `./packages/${this.compNameLowCase}/index.js`;
    try {
      await fse.outputJSON(this.componentJsonPath, componentJson);
    } catch(e) {
      console.error("写入component.json错误：" + e);
      process.exit(1);
    }
  }
  // 写入types
  async writeTypes() {
    try {
      const dTsContent = `import { BlUIComponent } from "./component";

/** Button Component */
export declare class Bl${this.compNameCamelCase} extends BlUIComponent {}`;

      await fse.outputFile(`${this.TypesPath}/${this.compNameLowCase}.d.ts`, dTsContent);
      let blVueLowUiDTsContent = fs.readFileSync(`${this.TypesPath}/bluepha-vue-low-ui.d.ts`) + "";
      const index = blVueLowUiDTsContent.indexOf("export");
      const importStr = `import Bl${this.compNameCamelCase} from "./${this.compNameLowCase}";`;
      blVueLowUiDTsContent = blVueLowUiDTsContent.slice(0, index) + importStr + endOfLine + `export class ${this.compNameCamelCase} extends Bl${this.compNameCamelCase} {};` + endOfLine;
      fse.outputFile(`${this.TypesPath}/bluepha-vue-low-ui.d.ts`, blVueLowUiDTsContent);
    } catch(e) {
      console.error("写入types错误：" + e);
      process.exit(1); 
    }
  }
}

const addComponent = new AddComponent();
addComponent.init();
