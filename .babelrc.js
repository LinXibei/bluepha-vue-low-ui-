// module.exports = {
//   presets: ["@vue/app"],
//   plugins: [
//     [
//       "component",
//       {
//         "libraryName": "element-ui",
//         "styleLibraryName": "theme-chalk"
//       }
//     ]
//   ]
// }
module.exports = {
  presets: ["@vue/app"],
  plugins: [
    [
      "import",
      {
        "libraryName": "bluepha-vue-low-ui",
      }
    ]
  ]
};