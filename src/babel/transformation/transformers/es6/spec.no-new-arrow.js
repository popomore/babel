import * as t from "../../../types";

export var metadata = {
  group: "builtin-trailing",
  optional: true,
  dependencies: ["es6.arrowFunctions"]
};

export var FunctionExpression = {
  exit(node, parent, scope, file) {
    if (!node.arrow) return;

    // make sure that arrow function won't be instantiated
    node.body.body.unshift(t.expressionStatement(t.callExpression(file.addHelper("new-arrow-check"), [
      t.thisExpression(),
      node.id || (node.id = scope.generateUidIdentifier("arrow"))
    ])));
  }
};
