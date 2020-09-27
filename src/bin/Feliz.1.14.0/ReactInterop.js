var _s = $RefreshSig$(),
    _s2 = $RefreshSig$(),
    _s3 = $RefreshSig$(),
    _s4 = $RefreshSig$(),
    _s5 = $RefreshSig$();

import { useEffect as useEffectReact, useLayoutEffect as useLayoutEffectReact, useDebugValue as useDebugValueReact } from "react";
export var useEffect = function useEffect(getDisposable) {
  _s();

  useEffectReact(function () {
    var disposable = getDisposable();
    return function () {
      disposable.Dispose();
    };
  });
};

_s(useEffect, "+DoGbjc8viTMlKjpeJZC2bYgYlQ=", false, function () {
  return [useEffectReact];
});

export var useEffectWithDeps = function useEffectWithDeps(getDisposable, deps) {
  _s2();

  useEffectReact(function () {
    var disposable = getDisposable();
    return function () {
      disposable.Dispose();
    };
  }, deps);
};

_s2(useEffectWithDeps, "+DoGbjc8viTMlKjpeJZC2bYgYlQ=", false, function () {
  return [useEffectReact];
});

export var useLayoutEffect = function useLayoutEffect(getDisposable) {
  _s3();

  useLayoutEffectReact(function () {
    var disposable = getDisposable();
    return function () {
      disposable.Dispose();
    };
  });
};

_s3(useLayoutEffect, "UDADnkQKppvbJ9LsDhBzpn3x744=", false, function () {
  return [useLayoutEffectReact];
});

export var useLayoutEffectWithDeps = function useLayoutEffectWithDeps(getDisposable, deps) {
  _s4();

  useLayoutEffectReact(function () {
    var disposable = getDisposable();
    return function () {
      disposable.Dispose();
    };
  }, deps);
};

_s4(useLayoutEffectWithDeps, "UDADnkQKppvbJ9LsDhBzpn3x744=", false, function () {
  return [useLayoutEffectReact];
});

export var useDebugValue = function useDebugValue(value, formatter) {
  _s5();

  return useDebugValueReact(value, formatter);
};

_s5(useDebugValue, "HWRI7KgTG2J4egrPJEdiorYSbKQ=", false, function () {
  return [useDebugValueReact];
});