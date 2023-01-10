const components = require("../component.json");

const externals = {};
Object.keys(components).forEach(function(key) {
  externals[`bluepha-vue-low-ui/packages/${key}`] = `bluepha-vue-low-ui/lib/${key}`;
});

externals.vue = "Vue";
exports.externals = externals;