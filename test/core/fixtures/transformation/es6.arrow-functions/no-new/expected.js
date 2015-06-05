"use strict";

var _arrow;

function _newArrowCheck(instance, arrowFn) { if (instance instanceof arrowFn) { throw new TypeError("Cannot instantiate an arrow function"); } }

arr.map(_arrow = function (x) {
  _newArrowCheck(this, _arrow);

  return x * x;
});
var f = function f(x, y) {
  _newArrowCheck(this, f);

  return x * y;
};
