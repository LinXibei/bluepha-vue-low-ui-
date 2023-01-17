// module.exports = {
//   plugins: {
//     'postcss-import': {},
//     'autoprefixer': {
//       browsers: 'last 5 version'
//     },
//   }
// }
// module.exports = (ctx) => ({
//   parser: ctx.parser ? 'sugarss' : false,
//   map: ctx.env === 'development' ? ctx.map : false,
//   plugins: {
//     'postcss-import': {},
//     'postcss-nested': {},
//     cssnano: ctx.env === 'production' ? {} : false
//   }
// })
const apply = require("postcss-class-apply/dist/index");
module.exports = {
  plugins: [
    apply(),
    require('postcss-apply'),
	  require('postcss-nested'),
    require('postcss-preset-env'),
    require('postcss-import')
  ]
}