var _s = $RefreshSig$(),
    _s2 = $RefreshSig$(),
    _s3 = $RefreshSig$(),
    _s4 = $RefreshSig$(),
    _s5 = $RefreshSig$(),
    _s6 = $RefreshSig$(),
    _s7 = $RefreshSig$(),
    _s8 = $RefreshSig$();

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

import { useLayoutEffectWithDeps, useLayoutEffect, useEffectWithDeps, useEffect, useDebugValue } from "./ReactInterop";
import { anonRecord, declare } from "../fable-library.2.13.0/Types";
import { class_type } from "../fable-library.2.13.0/Reflection";
import { defaultArg, toArray } from "../fable-library.2.13.0/Option";
import { iterate } from "../fable-library.2.13.0/Seq";
import { reactApi } from "./Interop";
import { createObj, uncurry, curry } from "../fable-library.2.13.0/Util";
import { useState } from "react";
import * as react from "react";
export var ReactInterop$$$useDebugValueWithFormatter = useDebugValue;
export var ReactInterop$$$useEffect = useEffect;
export var ReactInterop$$$useEffectWithDeps = useEffectWithDeps;
export var ReactInterop$$$useLayoutEffect = useLayoutEffect;
export var ReactInterop$$$useLayoutEffectWithDeps = useLayoutEffectWithDeps;
export var Internal = declare(_c = function Feliz_Internal() {
  void null;
});
_c2 = Internal;
export function Internal$reflection() {
  return class_type("Feliz.Internal", undefined, Internal);
}
_c3 = Internal$reflection;
export function Internal$$$$002Ector() {
  return this instanceof Internal ? Internal.call(this) : new Internal();
}
_c4 = Internal$$$$002Ector;

(function Internal$$$$002Ecctor() {
  void null;
})();

export function Internal$$$functionComponent$$Z1B155329(renderElement, name, withKey) {
  iterate(function action(name$$1) {
    renderElement.displayName = name$$1;
  }, toArray(name));
  return function (props) {
    var props$$2;
    props$$2 = Internal$$$propsWithKey(withKey, props);
    return reactApi.createElement(renderElement, props$$2);
  };
}
_c5 = Internal$$$functionComponent$$Z1B155329;
export function Internal$$$memo$$Z603636D8(renderElement$$1, name$$2, areEqual, withKey$$1) {
  var memoElementType = reactApi.memo(renderElement$$1, uncurry(2, defaultArg(curry(2, areEqual), null)));
  iterate(function action$$1(name$$3) {
    renderElement$$1.displayName = name$$3;
  }, toArray(name$$2));
  return function (props$$3) {
    var props$$5;
    props$$5 = Internal$$$propsWithKey(withKey$$1, props$$3);
    return reactApi.createElement(memoElementType, props$$5);
  };
}
_c6 = Internal$$$memo$$Z603636D8;

function Internal$$$propsWithKey(withKey$$2, props$$6) {
  if (withKey$$2 == null) {
    return props$$6;
  } else {
    var f = withKey$$2;
    props$$6.key = f(props$$6);
    return props$$6;
  }
}

_c7 = Internal$$$propsWithKey;
export var React = declare(_c8 = function Feliz_React() {});
_c9 = React;
export function React$reflection() {
  return class_type("Feliz.React", undefined, React);
}
_c10 = React$reflection;
export function React$$$createDisposable$$3A5B6456(dispose) {
  return {
    Dispose: function Dispose() {
      dispose();
    }
  };
}
_c11 = React$$$createDisposable$$3A5B6456;
export function React$$$useState$$FCFD9EF(initializer) {
  _s();

  return reactApi.useState(initializer);
}

_s(React$$$useState$$FCFD9EF, "7rNyFrw5FVpFFCFYkWAjQci0NUk=");

_c12 = React$$$useState$$FCFD9EF;
export function React$$$useReducer$$2B9E6EA0(update, initialState) {
  _s2();

  return reactApi.useReducer(update, initialState);
}

_s2(React$$$useReducer$$2B9E6EA0, "W2oyVpokII87Tswojn0QL7nCLJk=");

_c13 = React$$$useReducer$$2B9E6EA0;
export function React$$$useEffect$$Z5ECA432F(effect$$4) {
  ReactInterop$$$useEffect(effect$$4);
}
_c14 = React$$$useEffect$$Z5ECA432F;
export function React$$$useEffect$$Z5234A374(effect$$5, dependencies) {
  ReactInterop$$$useEffectWithDeps(effect$$5, dependencies);
}
_c15 = React$$$useEffect$$Z5234A374;
export function React$$$useLayoutEffect$$Z5ECA432F(effect$$6) {
  ReactInterop$$$useLayoutEffect(effect$$6);
}
_c16 = React$$$useLayoutEffect$$Z5ECA432F;
export function React$$$useLayoutEffect$$Z5234A374(effect$$7, dependencies$$1) {
  ReactInterop$$$useLayoutEffectWithDeps(effect$$7, dependencies$$1);
}
_c17 = React$$$useLayoutEffect$$Z5234A374;
export function React$$$useLayoutEffect$$3A5B6456(effect$$8) {
  ReactInterop$$$useLayoutEffect(function (_arg1) {
    effect$$8();
    return React$$$createDisposable$$3A5B6456(function () {
      void null;
    });
  });
}
_c18 = React$$$useLayoutEffect$$3A5B6456;
export function React$$$useLayoutEffect$$Z101E1A95(effect$$9, dependencies$$2) {
  ReactInterop$$$useLayoutEffectWithDeps(function (_arg2) {
    effect$$9();
    return React$$$createDisposable$$3A5B6456(function () {
      void null;
    });
  }, dependencies$$2);
}
_c19 = React$$$useLayoutEffect$$Z101E1A95;
export function React$$$useEffectOnce$$3A5B6456(effect$$10) {
  React$$$useEffect$$Z101E1A95(effect$$10, []);
}
_c20 = React$$$useEffectOnce$$3A5B6456;
export function React$$$useEffectOnce$$Z5ECA432F(effect$$11) {
  React$$$useEffect$$Z5234A374(effect$$11, []);
}
_c21 = React$$$useEffectOnce$$Z5ECA432F;
export function React$$$useEffectOnce$$6E825304(effect$$12) {
  React$$$useEffect$$Z5234A374(function () {
    var disposeOption = effect$$12();
    return {
      Dispose: function Dispose() {
        iterate(function action$$2(d) {
          var copyOfStruct = d;
          copyOfStruct.Dispose();
        }, toArray(disposeOption));
      }
    };
  }, []);
}
_c22 = React$$$useEffectOnce$$6E825304;
export function React$$$useEffect$$3A5B6456(effect$$13) {
  ReactInterop$$$useEffect(function (_arg3) {
    effect$$13();
    return React$$$createDisposable$$3A5B6456(function () {
      void null;
    });
  });
}
_c23 = React$$$useEffect$$3A5B6456;
export function React$$$useEffect$$Z101E1A95(effect$$14, dependencies$$3) {
  ReactInterop$$$useEffectWithDeps(function (_arg4) {
    effect$$14();
    return React$$$createDisposable$$3A5B6456(function () {
      void null;
    });
  }, dependencies$$3);
}
_c24 = React$$$useEffect$$Z101E1A95;
export function React$$$useDebugValue$$Z721C83C5(value$$5) {
  ReactInterop$$$useDebugValueWithFormatter(value$$5, function (x) {
    return x;
  });
}
_c25 = React$$$useDebugValue$$Z721C83C5;
export function React$$$useDebugValue$$77A55D6D(value$$6, formatter$$1) {
  ReactInterop$$$useDebugValueWithFormatter(value$$6, formatter$$1);
}
_c26 = React$$$useDebugValue$$77A55D6D;
export function React$$$useCallback$$93353E(callbackFunction, dependencies$$4) {
  _s3();

  var arg10$$1 = defaultArg(dependencies$$4, []);
  return reactApi.useCallback(callbackFunction, arg10$$1);
}

_s3(React$$$useCallback$$93353E, "epj4qY15NHsef74wNqHIp5fdZmg=");

_c27 = React$$$useCallback$$93353E;
export function React$$$useRef$$1505(initialValue) {
  _s4();

  return reactApi.useRef(initialValue);
}

_s4(React$$$useRef$$1505, "J9pzIsEOVEZ74gjFtMkCj+5Po7s=");

_c28 = React$$$useRef$$1505;
export function React$$$useInputRef() {
  return React$$$useRef$$1505(undefined);
}
_c29 = React$$$useInputRef;
export function React$$$useButtonRef() {
  return React$$$useRef$$1505(undefined);
}
_c30 = React$$$useButtonRef;
export function React$$$useElementRef() {
  return React$$$useRef$$1505(undefined);
}
_c31 = React$$$useElementRef;
export function React$$$useMemo$$CF4EA67(createFunction, dependencies$$5) {
  _s5();

  var arg10$$2 = defaultArg(dependencies$$5, []);
  return reactApi.useMemo(createFunction, arg10$$2);
}

_s5(React$$$useMemo$$CF4EA67, "nwk+m61qLgjDVUp4IGV/072DDN4=");

_c32 = React$$$useMemo$$CF4EA67;
export function React$$$functionComponent$$2F9D7239(render, withKey$$3) {
  return Internal$$$functionComponent$$Z1B155329(render, undefined, withKey$$3);
}
_c33 = React$$$functionComponent$$2F9D7239;
export function React$$$functionComponent$$Z4C5FE1BE(name$$4, render$$1, withKey$$4) {
  return Internal$$$functionComponent$$Z1B155329(render$$1, name$$4, withKey$$4);
}
_c34 = React$$$functionComponent$$Z4C5FE1BE;
export function React$$$functionComponent$$19A12FB2(render$$2, withKey$$5) {
  return Internal$$$functionComponent$$Z1B155329(function ($arg$$3) {
    var arg00$$3 = render$$2($arg$$3);
    var xs = arg00$$3;
    var props$$7 = [];
    return react.createElement.apply(react, [react.Fragment, createObj(props$$7, 1)].concat(_toConsumableArray(xs)));
  }, undefined, withKey$$5);
}
_c35 = React$$$functionComponent$$19A12FB2;
export function React$$$functionComponent$$2E1DD889(name$$5, render$$3, withKey$$6) {
  return Internal$$$functionComponent$$Z1B155329(function ($arg$$4) {
    var arg00$$4 = render$$3($arg$$4);
    var xs$$1 = arg00$$4;
    var props$$8 = [];
    return react.createElement.apply(react, [react.Fragment, createObj(props$$8, 1)].concat(_toConsumableArray(xs$$1)));
  }, name$$5, withKey$$6);
}
_c36 = React$$$functionComponent$$2E1DD889;
export function React$$$memo$$62A0F746(render$$4, withKey$$7, areEqual$$1) {
  return Internal$$$memo$$Z603636D8(render$$4, undefined, areEqual$$1, withKey$$7);
}
_c37 = React$$$memo$$62A0F746;
export function React$$$memo$$6648A89D(name$$6, render$$5, withKey$$8, areEqual$$2) {
  return Internal$$$memo$$Z603636D8(render$$5, name$$6, areEqual$$2, withKey$$8);
}
_c38 = React$$$memo$$6648A89D;
export function React$$$memo$$C2C6BED(render$$6, withKey$$9, areEqual$$3) {
  return Internal$$$memo$$Z603636D8(function ($arg$$5) {
    var arg00$$5 = render$$6($arg$$5);
    var xs$$2 = arg00$$5;
    var props$$9 = [];
    return react.createElement.apply(react, [react.Fragment, createObj(props$$9, 1)].concat(_toConsumableArray(xs$$2)));
  }, undefined, areEqual$$3, withKey$$9);
}
_c39 = React$$$memo$$C2C6BED;
export function React$$$memo$$Z4FCC584A(name$$7, render$$7, withKey$$10, areEqual$$4) {
  return Internal$$$memo$$Z603636D8(function ($arg$$6) {
    var arg00$$6 = render$$7($arg$$6);
    var xs$$3 = arg00$$6;
    var props$$10 = [];
    return react.createElement.apply(react, [react.Fragment, createObj(props$$10, 1)].concat(_toConsumableArray(xs$$3)));
  }, name$$7, areEqual$$4, withKey$$10);
}
_c40 = React$$$memo$$Z4FCC584A;
export function React$$$createContext$$1AE444D8(name$$8, defaultValue) {
  var contextObject = reactApi.createContext(defaultArg(defaultValue, void 0));
  iterate(function action$$3(name$$9) {
    contextObject.displayName = name$$9;
  }, toArray(name$$8));
  return contextObject;
}
_c41 = React$$$createContext$$1AE444D8;
export function React$$$contextProvider$$34D9BBBD(contextObject$$1, contextValue, child) {
  return reactApi.createElement.apply(reactApi, [contextObject$$1.Provider, {
    value: contextValue
  }].concat([child]));
}
_c42 = React$$$contextProvider$$34D9BBBD;
export function React$$$contextProvider$$138D2F56(contextObject$$2, contextValue$$1, children$$4) {
  return reactApi.createElement.apply(reactApi, [contextObject$$2.Provider, {
    value: contextValue$$1
  }].concat(_toConsumableArray(children$$4)));
}
_c43 = React$$$contextProvider$$138D2F56;
export function React$$$contextConsumer$$Z68910595(contextObject$$3, render$$8) {
  return reactApi.createElement.apply(reactApi, [contextObject$$3.Consumer, null].concat([render$$8]));
}
_c44 = React$$$contextConsumer$$Z68910595;
export function React$$$contextConsumer$$56D53A40(contextObject$$4, render$$9) {
  return reactApi.createElement.apply(reactApi, [contextObject$$4.Consumer, null].concat([function ($arg$$7) {
    var arg00$$7 = render$$9($arg$$7);
    var xs$$4 = arg00$$7;
    var props$$11 = [];
    return react.createElement.apply(react, [react.Fragment, createObj(props$$11, 1)].concat(_toConsumableArray(xs$$4)));
  }]));
}
_c45 = React$$$contextConsumer$$56D53A40;
export function React$$$useContext$$37FA55CF(contextObject$$5) {
  _s6();

  return reactApi.useContext(contextObject$$5);
}

_s6(React$$$useContext$$37FA55CF, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");

_c46 = React$$$useContext$$37FA55CF;
export function React$$$useCallbackRef$$7C4B0DD6(callback) {
  var lastRenderCallbackRef = React$$$useRef$$1505(callback);
  var callbackRef = React$$$useCallback$$93353E(function (arg) {
    return lastRenderCallbackRef.current(arg);
  }, []);
  React$$$useLayoutEffect$$3A5B6456(function () {
    lastRenderCallbackRef.current = callback;
  });
  return callbackRef;
}
_c47 = React$$$useCallbackRef$$7C4B0DD6;
export var React$$$useStateWithUpdater$$1505 = useState;
export function React$$$forwardRef$$3790D881(render$$10) {
  var forwardRefType = reactApi.forwardRef(function (props$$12, ref) {
    return render$$10([props$$12, ref]);
  });
  return function (tupledArg) {
    var o;
    return reactApi.createElement(forwardRefType, (o = anonRecord({
      props: tupledArg[0],
      ref: tupledArg[1]
    }), (Object.assign({}, o))));
  };
}
_c48 = React$$$forwardRef$$3790D881;
export function React$$$forwardRef$$7DC3DB1A(name$$10, render$$11) {
  var forwardRefType$$1 = reactApi.forwardRef(function (props$$14, ref$$2) {
    return render$$11([props$$14, ref$$2]);
  });
  render$$11.displayName = name$$10;
  return function (tupledArg$$1) {
    var o$$1;
    return reactApi.createElement(forwardRefType$$1, (o$$1 = anonRecord({
      props: tupledArg$$1[0],
      ref: tupledArg$$1[1]
    }), (Object.assign({}, o$$1))));
  };
}
_c49 = React$$$forwardRef$$7DC3DB1A;
export function React$$$strictMode$$6E3A73D(children$$6) {
  return reactApi.createElement.apply(reactApi, [reactApi.StrictMode, undefined].concat(_toConsumableArray(children$$6)));
}
_c50 = React$$$strictMode$$6E3A73D;
export function React$$$lazy$0027$$4712D3AE(dynamicImport, props$$16) {
  return reactApi.createElement(reactApi.lazy(function () {
    return dynamicImport;
  }), props$$16);
}
_c51 = React$$$lazy$0027$$4712D3AE;
export function React$$$lazy$0027$$Z3D8450FC(dynamicImport$$1, props$$17) {
  return reactApi.createElement(reactApi.lazy(dynamicImport$$1), props$$17);
}
_c52 = React$$$lazy$0027$$Z3D8450FC;
export function React$$$suspense$$6E3A73D(children$$7) {
  var o$$2;
  return reactApi.createElement.apply(reactApi, [reactApi.Suspense, (o$$2 = anonRecord({
    fallback: null
  }), (Object.assign({}, o$$2)))].concat(_toConsumableArray(children$$7)));
}
_c53 = React$$$suspense$$6E3A73D;
export function React$$$suspense$$Z3796A576(children$$8, fallback) {
  var o$$3;
  return reactApi.createElement.apply(reactApi, [reactApi.Suspense, (o$$3 = anonRecord({
    fallback: fallback
  }), (Object.assign({}, o$$3)))].concat(_toConsumableArray(children$$8)));
}
_c54 = React$$$suspense$$Z3796A576;
export function React$$$useImperativeHandle$$596DDC25(ref$$4, createHandle) {
  reactApi.useImperativeHandle(ref$$4, createHandle);
}
_c55 = React$$$useImperativeHandle$$596DDC25;
export function React$$$useImperativeHandle$$Z12F09548(ref$$5, createHandle$$1, dependencies$$6) {
  _s7();

  reactApi.useImperativeHandle(ref$$5, createHandle$$1, dependencies$$6);
}

_s7(React$$$useImperativeHandle$$Z12F09548, "PYzlZ2AGFM0KxtNOGoZVRb5EOEw=", false, function () {
  return [reactApi.useImperativeHandle];
});

_c56 = React$$$useImperativeHandle$$Z12F09548;
export function Feliz$002EReact$$React$002EuseState$002EStatic$$1505(initial$$1) {
  _s8();

  return reactApi.useState(initial$$1);
}

_s8(Feliz$002EReact$$React$002EuseState$002EStatic$$1505, "7rNyFrw5FVpFFCFYkWAjQci0NUk=");

_c57 = Feliz$002EReact$$React$002EuseState$002EStatic$$1505;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20, _c21, _c22, _c23, _c24, _c25, _c26, _c27, _c28, _c29, _c30, _c31, _c32, _c33, _c34, _c35, _c36, _c37, _c38, _c39, _c40, _c41, _c42, _c43, _c44, _c45, _c46, _c47, _c48, _c49, _c50, _c51, _c52, _c53, _c54, _c55, _c56, _c57;

$RefreshReg$(_c, "Internal$");
$RefreshReg$(_c2, "Internal");
$RefreshReg$(_c3, "Internal$reflection");
$RefreshReg$(_c4, "Internal$$$$002Ector");
$RefreshReg$(_c5, "Internal$$$functionComponent$$Z1B155329");
$RefreshReg$(_c6, "Internal$$$memo$$Z603636D8");
$RefreshReg$(_c7, "Internal$$$propsWithKey");
$RefreshReg$(_c8, "React$");
$RefreshReg$(_c9, "React");
$RefreshReg$(_c10, "React$reflection");
$RefreshReg$(_c11, "React$$$createDisposable$$3A5B6456");
$RefreshReg$(_c12, "React$$$useState$$FCFD9EF");
$RefreshReg$(_c13, "React$$$useReducer$$2B9E6EA0");
$RefreshReg$(_c14, "React$$$useEffect$$Z5ECA432F");
$RefreshReg$(_c15, "React$$$useEffect$$Z5234A374");
$RefreshReg$(_c16, "React$$$useLayoutEffect$$Z5ECA432F");
$RefreshReg$(_c17, "React$$$useLayoutEffect$$Z5234A374");
$RefreshReg$(_c18, "React$$$useLayoutEffect$$3A5B6456");
$RefreshReg$(_c19, "React$$$useLayoutEffect$$Z101E1A95");
$RefreshReg$(_c20, "React$$$useEffectOnce$$3A5B6456");
$RefreshReg$(_c21, "React$$$useEffectOnce$$Z5ECA432F");
$RefreshReg$(_c22, "React$$$useEffectOnce$$6E825304");
$RefreshReg$(_c23, "React$$$useEffect$$3A5B6456");
$RefreshReg$(_c24, "React$$$useEffect$$Z101E1A95");
$RefreshReg$(_c25, "React$$$useDebugValue$$Z721C83C5");
$RefreshReg$(_c26, "React$$$useDebugValue$$77A55D6D");
$RefreshReg$(_c27, "React$$$useCallback$$93353E");
$RefreshReg$(_c28, "React$$$useRef$$1505");
$RefreshReg$(_c29, "React$$$useInputRef");
$RefreshReg$(_c30, "React$$$useButtonRef");
$RefreshReg$(_c31, "React$$$useElementRef");
$RefreshReg$(_c32, "React$$$useMemo$$CF4EA67");
$RefreshReg$(_c33, "React$$$functionComponent$$2F9D7239");
$RefreshReg$(_c34, "React$$$functionComponent$$Z4C5FE1BE");
$RefreshReg$(_c35, "React$$$functionComponent$$19A12FB2");
$RefreshReg$(_c36, "React$$$functionComponent$$2E1DD889");
$RefreshReg$(_c37, "React$$$memo$$62A0F746");
$RefreshReg$(_c38, "React$$$memo$$6648A89D");
$RefreshReg$(_c39, "React$$$memo$$C2C6BED");
$RefreshReg$(_c40, "React$$$memo$$Z4FCC584A");
$RefreshReg$(_c41, "React$$$createContext$$1AE444D8");
$RefreshReg$(_c42, "React$$$contextProvider$$34D9BBBD");
$RefreshReg$(_c43, "React$$$contextProvider$$138D2F56");
$RefreshReg$(_c44, "React$$$contextConsumer$$Z68910595");
$RefreshReg$(_c45, "React$$$contextConsumer$$56D53A40");
$RefreshReg$(_c46, "React$$$useContext$$37FA55CF");
$RefreshReg$(_c47, "React$$$useCallbackRef$$7C4B0DD6");
$RefreshReg$(_c48, "React$$$forwardRef$$3790D881");
$RefreshReg$(_c49, "React$$$forwardRef$$7DC3DB1A");
$RefreshReg$(_c50, "React$$$strictMode$$6E3A73D");
$RefreshReg$(_c51, "React$$$lazy$0027$$4712D3AE");
$RefreshReg$(_c52, "React$$$lazy$0027$$Z3D8450FC");
$RefreshReg$(_c53, "React$$$suspense$$6E3A73D");
$RefreshReg$(_c54, "React$$$suspense$$Z3796A576");
$RefreshReg$(_c55, "React$$$useImperativeHandle$$596DDC25");
$RefreshReg$(_c56, "React$$$useImperativeHandle$$Z12F09548");
$RefreshReg$(_c57, "Feliz$002EReact$$React$002EuseState$002EStatic$$1505");