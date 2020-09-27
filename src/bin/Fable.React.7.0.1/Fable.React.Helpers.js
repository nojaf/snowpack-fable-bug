function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

import { equals, uncurry } from "../fable-library.2.13.0/Util";
import * as react from "react";
import { isNullOrEmpty } from "../fable-library.2.13.0/String";
import { fold, choose } from "../fable-library.2.13.0/Seq";
import { HTMLAttr } from "./Fable.React.Props";
export function ReactElementTypeModule$$$memo(render) {
  return /*#__PURE__*/react.memo(render, uncurry(2, null));
}
_c = ReactElementTypeModule$$$memo;
export function ReactElementTypeModule$$$memoWith(areEqual, render$$1) {
  return /*#__PURE__*/react.memo(render$$1, areEqual);
}
_c2 = ReactElementTypeModule$$$memoWith;
export function Helpers$$$equalsButFunctions(x, y) {
  if (x === y) {
    return true;
  } else if (_typeof(x) === "object" && !x[Symbol.iterator] ? !(y == null) : false) {
    var keys = Object.keys(x);
    var length = keys.length | 0;
    var i = 0;
    var result = true;

    while (i < length ? result : false) {
      var key = keys[i];
      i = i + 1;
      var xValue = x[key];
      result = typeof xValue === "function" ? true : equals(xValue, y[key]);
    }

    return result;
  } else {
    return equals(x, y);
  }
}
_c3 = Helpers$$$equalsButFunctions;
export function Helpers$$$memoEqualsButFunctions(x$$1, y$$1) {
  if (x$$1 === y$$1) {
    return true;
  } else if (_typeof(x$$1) === "object" && !x$$1[Symbol.iterator] ? !(y$$1 == null) : false) {
    var keys$$1 = Object.keys(x$$1);
    var length$$1 = keys$$1.length | 0;
    var i$$1 = 0;
    var result$$1 = true;

    while (i$$1 < length$$1 ? result$$1 : false) {
      var key$$1 = keys$$1[i$$1];
      i$$1 = i$$1 + 1;
      var xValue$$1 = x$$1[key$$1];
      result$$1 = typeof xValue$$1 === "function" ? true : xValue$$1 === y$$1[key$$1];
    }

    return result$$1;
  } else {
    return false;
  }
}
_c4 = Helpers$$$memoEqualsButFunctions;
export function Helpers$$$memoBuilder(name, render$$2) {
  render$$2.displayName = name;
  var memoType = ReactElementTypeModule$$$memo(render$$2);
  return function (props) {
    var children = [];
    return react.createElement.apply(react, [memoType, props].concat(children));
  };
}
_c5 = Helpers$$$memoBuilder;
export function Helpers$$$memoBuilderWith(name$$1, areEqual$$1, render$$3) {
  render$$3.displayName = name$$1;
  var memoType$$1 = ReactElementTypeModule$$$memoWith(areEqual$$1, render$$3);
  return function (props$$2) {
    var children$$1 = [];
    return react.createElement.apply(react, [memoType$$1, props$$2].concat(children$$1));
  };
}
_c6 = Helpers$$$memoBuilderWith;
export function Helpers$$$opt(o) {
  if (o == null) {
    return null;
  } else {
    var o$$2 = o;
    return o$$2;
  }
}
_c7 = Helpers$$$opt;
export var Helpers$$$nothing = null;
export function Helpers$$$classBaseList(baseClass, classes) {
  var arg0;
  var source$$1;
  source$$1 = choose(function chooser(tupledArg) {
    if (tupledArg[1] ? !isNullOrEmpty(tupledArg[0]) : false) {
      return tupledArg[0];
    } else {
      return undefined;
    }
  }, classes);
  arg0 = fold(function folder(state, name$$3) {
    return state + " " + name$$3;
  }, baseClass, source$$1);
  return new HTMLAttr(64, "ClassName", arg0);
}
_c8 = Helpers$$$classBaseList;
export function Helpers$$$classList(classes$$1) {
  return Helpers$$$classBaseList("", classes$$1);
}
_c9 = Helpers$$$classList;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;

$RefreshReg$(_c, "ReactElementTypeModule$$$memo");
$RefreshReg$(_c2, "ReactElementTypeModule$$$memoWith");
$RefreshReg$(_c3, "Helpers$$$equalsButFunctions");
$RefreshReg$(_c4, "Helpers$$$memoEqualsButFunctions");
$RefreshReg$(_c5, "Helpers$$$memoBuilder");
$RefreshReg$(_c6, "Helpers$$$memoBuilderWith");
$RefreshReg$(_c7, "Helpers$$$opt");
$RefreshReg$(_c8, "Helpers$$$classBaseList");
$RefreshReg$(_c9, "Helpers$$$classList");