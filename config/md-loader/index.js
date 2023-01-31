const md = require("./config.js");
const { compileTemplate } = require("@vue/component-compiler-utils");
const compiler = require("vue-template-compiler");
function getComponent(template, script) {
  const options = {
    source: `<div>${template}</div>`,
    filename: "inline-component",
    compiler,
  };
  /**
   * {
      code: 'var render = function() {\n' +
        '  var _vm = this\n' +
        '  var _h = _vm.$createElement\n' +
        '  var _c = _vm._self._c || _h\n' +
        '  return _c("div", [[_c("BlHelloWorld", { staticClass: "box-card" })]], 2)\n' +
        '}\n' +
        'var staticRenderFns = []\n' +
        'render._withStripped = true\n',
      source: '<div><template>\n' +
        '  <BlHelloWorld class="box-card">\n' +
        '  </BlHelloWorld>\n' +
        '</template></div>',
      tips: [],
      errors: []
    }
  */
  const compileRes = compileTemplate(options);
  if (compileRes.tips && compileRes.tips.length) {
    compileRes.tips.forEach((item) => console.warn(item));
  }
  if (compileRes.errors && compileRes.errors.length) {
    console.error(`\n Error compiling template:\n ${compileRes.source} \n ${compileRes.errors.map((e) => "-" + e).join("\n")} \n`);
  }
  script = script.trim();
  if (!script) {
    script = "const scriptCode = {};";
  } else {
    script = script.replace(/export\s+default/, "const scriptCode = ");
  }
  const returnCode = `(function() {
    ${compileRes.code}
    ${script}
    return {
      render,
      staticRenderFns,
      ...scriptCode
    }
  })()`;
  // console.log(2222, returnCode);
  return returnCode;
}
function getTemplate(content) {
  content = content.trim();
  if (!content) {
    return content;
  }
  return content.replace(/<(script|style)[\s\S]+<\/\1>/g, "").trim();
}
function getScript(content) {
  const match = content.match(/<(script)>([\s\S]+)<\/\1>/);
  return match && match[2] ? match[2] : "";
}
module.exports = function(source) {
  const content = md.render(source);
  const sTag = "<!--element-demo:";
  const eTag = ":element-demo-->";

  let reContent = [];
  let componentStr = "";
  let id = 0;
  let start = 0;
  let codeStart = content.indexOf(sTag);
  let codeEnd = content.indexOf(eTag, codeStart + sTag.length);
  while(codeStart !== -1 && codeEnd !== -1) {
    reContent.push(content.slice(start, codeStart));
    const resContent = content.slice(codeStart + sTag.length, codeEnd);
    const template = getTemplate(resContent);
    const script = getScript(resContent);
    const componentContent = getComponent(template, script); 
    const componentName = `element-demo${id}`;
    reContent.push(`<template slot="source"><${componentName}></${componentName}></template>`);
    componentStr += `${JSON.stringify(componentName)}: ${componentContent},`;
    id++;
    start = codeEnd + eTag.length;
    codeStart = content.indexOf(sTag, start);
    codeEnd = content.indexOf(eTag, codeStart + sTag.length);
  }
  let pageScript = "";
  if (componentStr) {
    pageScript = `
    <script>
    export default {
      name: "component-doc",
      components: {
        ${componentStr}
      }
    }
    </script>`;
  } else if(content.indexOf("<script>") === 0) {
    pageScript = content.slice(0, content.indexOf("</script>") + "</script>".length);
  }
  console.log(888, reContent);
  reContent.push(content.slice(start));
  return `<template>
<section class="content element-doc">
  ${reContent.join("")}
</section>
</template>
${pageScript}`;
};