import { declare } from "../fable-library.2.13.0/Types";
import { class_type } from "../fable-library.2.13.0/Reflection";
import { defaultArg, some } from "../fable-library.2.13.0/Option";
import { curry, int32ToString } from "../fable-library.2.13.0/Util";
import { ReactElementTypeModule$$$memoWith as ReactElementTypeModule$0024$0024$0024memoWith } from "./Fable.React.Helpers";
import * as react from "react";
export var Cache = declare(_c = function Fable_React_Cache() {
  void null;
});
_c2 = Cache;
export function Cache$reflection() {
  return class_type("Fable.React.Cache", undefined, Cache);
}
_c3 = Cache$reflection;
export function Cache$$$$002Ector() {
  return this instanceof Cache ? Cache.call(this) : new Cache();
}
_c4 = Cache$$$$002Ector;

(function Cache$$$$002Ecctor() {
  var cache = new Map();
  Cache.cache = cache;
  void null;
})();

export function Cache$$$GetOrAdd$$Z3AD3E68D(key, valueFactory) {
  if (Cache.cache.has(key)) {
    return Cache.cache.get(key);
  } else {
    var v = valueFactory(key);
    var value = Cache.cache.set(key, some(v));
    void value;
    return v;
  }
}
_c5 = Cache$$$GetOrAdd$$Z3AD3E68D;
export var FunctionComponent = declare(_c6 = function Fable_React_FunctionComponent() {});
_c7 = FunctionComponent;
export function FunctionComponent$reflection() {
  return class_type("Fable.React.FunctionComponent", undefined, FunctionComponent);
}
_c8 = FunctionComponent$reflection;
export function FunctionComponent$$$Of$$Z5A158BBF(render, displayName, memoizeWith, withKey, __callingMemberName, __callingSourceFile, __callingSourceLine) {
  var cacheKey = __callingSourceFile + "#L" + int32ToString(__callingSourceLine);
  return Cache$$$GetOrAdd$$Z3AD3E68D(cacheKey, function prepareRenderFunction(_arg1) {
    var displayName$$1 = defaultArg(displayName, __callingMemberName);
    render.displayName = displayName$$1;
    var elemType;

    if (curry(2, memoizeWith) == null) {
      elemType = render;
    } else {
      var areEqual = memoizeWith;
      var memoElement = ReactElementTypeModule$0024$0024$0024memoWith(areEqual, render);
      memoElement.displayName = "Memo(" + displayName$$1 + ")";
      elemType = memoElement;
    }

    return function (props) {
      var props$$1;

      if (withKey == null) {
        props$$1 = props;
      } else {
        var f$$1 = withKey;
        props.key = f$$1(props);
        props$$1 = props;
      }

      var children = [];
      return react.createElement.apply(react, [elemType, props$$1].concat(children));
    };
  });
}
_c9 = FunctionComponent$$$Of$$Z5A158BBF;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;

$RefreshReg$(_c, "Cache$");
$RefreshReg$(_c2, "Cache");
$RefreshReg$(_c3, "Cache$reflection");
$RefreshReg$(_c4, "Cache$$$$002Ector");
$RefreshReg$(_c5, "Cache$$$GetOrAdd$$Z3AD3E68D");
$RefreshReg$(_c6, "FunctionComponent$");
$RefreshReg$(_c7, "FunctionComponent");
$RefreshReg$(_c8, "FunctionComponent$reflection");
$RefreshReg$(_c9, "FunctionComponent$$$Of$$Z5A158BBF");