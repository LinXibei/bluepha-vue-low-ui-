const md = require("./config.js");
module.exports = function(source) {
  const content = md.render(source);
  return `<template>
<section class="content element-doc">
  ${content}
</section>
</template>`;
};