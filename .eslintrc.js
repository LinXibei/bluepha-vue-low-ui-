// module.exports = {
//   extends: [
//     'standard',
//     'plugin:vue/essential',
//     'plugin:@typescript-eslint/recommended'
//   ],
//   parser: 'vue-eslint-parser',
//   parserOptions: {
//     parser: '@typescript-eslint/parser'
//   }
// }
module.exports = {
  "env": {
    "browser": true
  },
  "extends": [
    "plugin:@typescript-eslint/recommended",
  ],
  "parser": "vue-eslint-parser",
  "parserOptions": {
    "parser": {
      "js": "espree",
      "ts": "@typescript-eslint/parser",
      "<template>": "espree",
    },
    "ecmaVersion": 12,
    "project": ["./tsconfig.json"],
    "sourceType": "module",
    "extraFileExtensions": [".vue"],
    "allowAutomaticSingleRunInference": false
  },
  "plugins": [
    "eslint-plugin-import",
    "eslint-plugin-jsdoc",
    "eslint-plugin-prefer-arrow",
    "@typescript-eslint"
  ],
  "rules": {
    "indent": ["error", 2, {
      SwitchCase: 1,
      flatTernaryExpressions: true,
    }],
    "linebreak-style": ["error", "windows"],
    "quotes": ["error", "double"],
    "semi": ["error", "always"],
    "no-empty": "warn",
    "eqeqeq": ["error", "always"],
    "no-cond-assign": ["error", "always"],
    "for-direction": "off",
    "@typescript-eslint/class-name-casing": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/no-this-alias": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/ban-ts-comment": "off"
  }
};