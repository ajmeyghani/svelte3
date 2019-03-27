module.exports = {
  "extends": ["google", "plugin:@tivac/svelte/svelte"],
  "plugins" : [
      "html",
      "@tivac/svelte"
  ],
  "parserOptions": {
    "ecmaVersion": 2019,
    "sourceType": "module",
  },
  "env": {
    "browser": true,
  },
  "rules": {
    "quotes": ["warn", "double"],
    "indent": ["error", 2, {
      "SwitchCase": 1,
      "VariableDeclarator": 1,
      "outerIIFEBody": 1,
      "FunctionDeclaration": {
        "parameters": 1,
        "body": 1,
      },
      "FunctionExpression": {
        "parameters": 1,
        "body": 1,
      },
      "CallExpression": {
        "arguments": 1,
      },
      "ArrayExpression": 1,
      "ObjectExpression": 1,
      "ImportDeclaration": 1,
      "flatTernaryExpressions": false,
      ignoredNodes: [
        "JSXElement",
        "JSXElement > *",
        "JSXAttribute",
        "JSXIdentifier",
        "JSXNamespacedName",
        "JSXMemberExpression",
        "JSXSpreadAttribute",
        "JSXExpressionContainer",
        "JSXOpeningElement",
        "JSXClosingElement",
        "JSXText",
        "JSXEmptyExpression",
        "JSXSpreadChild",
      ],
      "ignoreComments": false,
    }],
    "require-jsdoc": "off",
    "arrow-parens": "off",
    "valid-jsdoc": "off",
    "new-cap": "off",
    "no-unused-vars": "off",
    "prefer-const": "off"
  },
};
