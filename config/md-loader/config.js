const Config = require("markdown-it-chain");
const containers = require("./container");

const config = new Config(); // 实例化
config
  .options.html(true).end() // 可以解析 HTML 标签
  .plugin("containers").use(containers).end(); // 创建自定义 markdown 容器
  
const md = config.toMd();
// function updatedMd(md) {
//   const defaultRender = md.renderer.rules.fence;
//   md.renderer.rules.fence = (tokens, idx, options, env, self) => {
//     const token = tokens[idx];
//     if (token.info === "html") {
//       return `<template slot="highlight"><pre v-pre><code class="html">${token.content}</code></pre></template>`;
//     }
//     return defaultRender(tokens, idx, options, env, self);
//   };
// }
// updatedMd(md);
module.exports = md;