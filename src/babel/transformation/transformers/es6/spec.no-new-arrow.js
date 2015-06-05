import * as t from "../../../types";

export var metadata = {
  group: "builtin-trailing",
  optional: true,
  dependencies: ["es6.arrowFunctions"]
};

export var FunctionExpression = {
  exit(node, parent, scope, file) {
    if (!node.forbidNew) return;

    node.forbidNew = false;

    var ref = node.id;
    var expr = node;

    if (!ref) {
      ref = scope.parent.generateDeclaredUidIdentifier("arrow");
      expr = t.assignmentExpression("=", ref, expr);
    }

    var thisExpr = t.thisExpression();
    thisExpr._shadowedFunctionLiteral = true;

    // make sure that arrow function won't be instantiated
    node.body.body.unshift(t.expressionStatement(t.callExpression(file.addHelper("new-arrow-check"), [
      thisExpr,
      ref
    ])));

    return expr;
  }
};
