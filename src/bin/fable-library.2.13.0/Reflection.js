function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

import { anonRecord as makeAnonRecord, Record, Union } from "./Types";
import { compareArraysWith, equalArraysWith } from "./Util";
export var CaseInfo = function CaseInfo(declaringType, tag, name, fields) {
  _classCallCheck(this, CaseInfo);

  this.declaringType = declaringType;
  this.tag = tag;
  this.name = name;
  this.fields = fields;
};
export var TypeInfo = /*#__PURE__*/function () {
  function TypeInfo(fullname, generics, construct, fields, cases, enumCases) {
    _classCallCheck(this, TypeInfo);

    this.fullname = fullname;
    this.generics = generics;
    this.construct = construct;
    this.fields = fields;
    this.cases = cases;
    this.enumCases = enumCases;
  }

  _createClass(TypeInfo, [{
    key: "toString",
    value: function toString() {
      return fullName(this);
    }
  }, {
    key: "Equals",
    value: function Equals(other) {
      return equals(this, other);
    }
  }, {
    key: "CompareTo",
    value: function CompareTo(other) {
      return compare(this, other);
    }
  }]);

  return TypeInfo;
}();
export function getGenerics(t) {
  return t.generics != null ? t.generics : [];
}
export function equals(t1, t2) {
  if (t1.fullname === "") {
    // Anonymous records
    return t2.fullname === "" && equalArraysWith(getRecordElements(t1), getRecordElements(t2), function (_ref, _ref2) {
      var _ref3 = _slicedToArray(_ref, 2),
          k1 = _ref3[0],
          v1 = _ref3[1];

      var _ref4 = _slicedToArray(_ref2, 2),
          k2 = _ref4[0],
          v2 = _ref4[1];

      return k1 === k2 && equals(v1, v2);
    });
  } else {
    return t1.fullname === t2.fullname && equalArraysWith(getGenerics(t1), getGenerics(t2), equals);
  }
} // System.Type is not comparable in .NET, but let's implement this
// in case users want to create a dictionary with types as keys

export function compare(t1, t2) {
  if (t1.fullname !== t2.fullname) {
    return t1.fullname < t2.fullname ? -1 : 1;
  } else {
    return compareArraysWith(getGenerics(t1), getGenerics(t2), compare);
  }
}
export function class_type(fullname, generics, construct) {
  return new TypeInfo(fullname, generics, construct);
}
export function record_type(fullname, generics, construct, fields) {
  return new TypeInfo(fullname, generics, construct, fields);
}
export function anonRecord_type() {
  for (var _len = arguments.length, fields = new Array(_len), _key = 0; _key < _len; _key++) {
    fields[_key] = arguments[_key];
  }

  return new TypeInfo("", undefined, undefined, function () {
    return fields;
  });
}
export function union_type(fullname, generics, construct, cases) {
  var t = new TypeInfo(fullname, generics, construct, undefined, function () {
    return cases().map(function (x, i) {
      return typeof x === "string" ? new CaseInfo(t, i, x) : new CaseInfo(t, i, x[0], x[1]);
    });
  });
  return t;
}
export function tuple_type() {
  for (var _len2 = arguments.length, generics = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    generics[_key2] = arguments[_key2];
  }

  return new TypeInfo("System.Tuple`" + generics.length, generics);
}
export function delegate_type() {
  for (var _len3 = arguments.length, generics = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    generics[_key3] = arguments[_key3];
  }

  return new TypeInfo("System.Func`" + generics.length, generics);
}
export function lambda_type(argType, returnType) {
  return new TypeInfo("Microsoft.FSharp.Core.FSharpFunc`2", [argType, returnType]);
}
export function option_type(generic) {
  return new TypeInfo("Microsoft.FSharp.Core.FSharpOption`1", [generic]);
}
export function list_type(generic) {
  return new TypeInfo("Microsoft.FSharp.Collections.FSharpList`1", [generic]);
}
export function array_type(generic) {
  return new TypeInfo(generic.fullname + "[]", [generic]);
}
export function enum_type(fullname, underlyingType, enumCases) {
  return new TypeInfo(fullname, [underlyingType], undefined, undefined, undefined, enumCases);
}
export var obj_type = new TypeInfo("System.Object");
export var unit_type = new TypeInfo("Microsoft.FSharp.Core.Unit");
export var char_type = new TypeInfo("System.Char");
export var string_type = new TypeInfo("System.String");
export var bool_type = new TypeInfo("System.Boolean");
export var int8_type = new TypeInfo("System.SByte");
export var uint8_type = new TypeInfo("System.Byte");
export var int16_type = new TypeInfo("System.Int16");
export var uint16_type = new TypeInfo("System.UInt16");
export var int32_type = new TypeInfo("System.Int32");
export var uint32_type = new TypeInfo("System.UInt32");
export var float32_type = new TypeInfo("System.Single");
export var float64_type = new TypeInfo("System.Double");
export var decimal_type = new TypeInfo("System.Decimal");
export function name(info) {
  if (Array.isArray(info)) {
    return info[0];
  } else if (info instanceof CaseInfo) {
    return info.name;
  } else {
    var i = info.fullname.lastIndexOf(".");
    return i === -1 ? info.fullname : info.fullname.substr(i + 1);
  }
}
export function fullName(t) {
  var gen = t.generics != null && !isArray(t) ? t.generics : [];

  if (gen.length > 0) {
    return t.fullname + "[" + gen.map(function (x) {
      return fullName(x);
    }).join(",") + "]";
  } else {
    return t.fullname;
  }
}
export function namespace(t) {
  var i = t.fullname.lastIndexOf(".");
  return i === -1 ? "" : t.fullname.substr(0, i);
}
export function isArray(t) {
  return t.fullname.endsWith("[]");
}
export function getElementType(t) {
  var _a;

  return isArray(t) ? (_a = t.generics) === null || _a === void 0 ? void 0 : _a[0] : undefined;
}
export function isGenericType(t) {
  return t.generics != null && t.generics.length > 0;
}
export function isEnum(t) {
  return t.enumCases != null && t.enumCases.length > 0;
}
/**
 * This doesn't replace types for fields (records) or cases (unions)
 * but it should be enough for type comparison purposes
 */

export function getGenericTypeDefinition(t) {
  return t.generics == null ? t : new TypeInfo(t.fullname, t.generics.map(function () {
    return obj_type;
  }));
}
export function getEnumUnderlyingType(t) {
  var _a;

  return (_a = t.generics) === null || _a === void 0 ? void 0 : _a[0];
}
export function getEnumValues(t) {
  if (isEnum(t) && t.enumCases != null) {
    return t.enumCases.map(function (kv) {
      return kv[1];
    });
  } else {
    throw new Error("".concat(t.fullname, " is not an enum type"));
  }
}
export function getEnumNames(t) {
  if (isEnum(t) && t.enumCases != null) {
    return t.enumCases.map(function (kv) {
      return kv[0];
    });
  } else {
    throw new Error("".concat(t.fullname, " is not an enum type"));
  }
}

function getEnumCase(t, v) {
  if (t.enumCases != null) {
    if (typeof v === "string") {
      var _iterator = _createForOfIteratorHelper(t.enumCases),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var kv = _step.value;

          if (kv[0] === v) {
            return kv;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      throw new Error("'".concat(v, "' was not found in ").concat(t.fullname));
    } else {
      var _iterator2 = _createForOfIteratorHelper(t.enumCases),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _kv = _step2.value;

          if (_kv[1] === v) {
            return _kv;
          }
        } // .NET returns the number even if it doesn't match any of the cases

      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return ["", v];
    }
  } else {
    throw new Error("".concat(t.fullname, " is not an enum type"));
  }
}

export function parseEnum(t, str) {
  // TODO: better int parsing here, parseInt ceils floats: "4.8" -> 4
  var value = parseInt(str, 10);
  return getEnumCase(t, isNaN(value) ? str : value)[1];
}
export function tryParseEnum(t, str) {
  try {
    var v = parseEnum(t, str);
    return [true, v];
  } catch (_a) {// supress error
  }

  return [false, NaN];
}
export function getEnumName(t, v) {
  return getEnumCase(t, v)[0];
}
export function isEnumDefined(t, v) {
  try {
    var kv = getEnumCase(t, v);
    return kv[0] != null && kv[0] !== "";
  } catch (_a) {// supress error
  }

  return false;
} // FSharpType

export function getUnionCases(t) {
  if (t.cases != null) {
    return t.cases();
  } else {
    throw new Error("".concat(t.fullname, " is not an F# union type"));
  }
}
export function getRecordElements(t) {
  if (t.fields != null) {
    return t.fields();
  } else {
    throw new Error("".concat(t.fullname, " is not an F# record type"));
  }
}
export function getTupleElements(t) {
  if (isTuple(t) && t.generics != null) {
    return t.generics;
  } else {
    throw new Error("".concat(t.fullname, " is not a tuple type"));
  }
}
export function getFunctionElements(t) {
  if (isFunction(t) && t.generics != null) {
    var gen = t.generics;
    return [gen[0], gen[1]];
  } else {
    throw new Error("".concat(t.fullname, " is not an F# function type"));
  }
}
export function isUnion(t) {
  return t instanceof TypeInfo ? t.cases != null : t instanceof Union;
}
export function isRecord(t) {
  return t instanceof TypeInfo ? t.fields != null : t instanceof Record;
}
export function isTuple(t) {
  return t.fullname.startsWith("System.Tuple");
} // In .NET this is false for delegates

export function isFunction(t) {
  return t.fullname === "Microsoft.FSharp.Core.FSharpFunc`2";
} // FSharpValue

export function getUnionFields(v, t) {
  var cases = getUnionCases(t);
  var case_ = cases[v.tag];

  if (case_ == null) {
    throw new Error("Cannot find case ".concat(v.name, " in union type"));
  }

  return [case_, v.fields];
}
export function getUnionCaseFields(uci) {
  return uci.fields == null ? [] : uci.fields;
}
export function getRecordFields(v) {
  return Object.keys(v).map(function (k) {
    return v[k];
  });
}
export function getRecordField(v, field) {
  return v[field[0]];
}
export function getTupleFields(v) {
  return v;
}
export function getTupleField(v, i) {
  return v[i];
}
export function makeUnion(uci, values) {
  var expectedLength = (uci.fields || []).length;

  if (values.length !== expectedLength) {
    throw new Error("Expected an array of length ".concat(expectedLength, " but got ").concat(values.length));
  }

  return uci.declaringType.construct != null ? _construct(uci.declaringType.construct, [uci.tag, uci.name].concat(_toConsumableArray(values))) : {};
}
export function makeRecord(t, values) {
  var fields = getRecordElements(t);

  if (fields.length !== values.length) {
    throw new Error("Expected an array of length ".concat(fields.length, " but got ").concat(values.length));
  }

  return t.construct != null ? _construct(t.construct, _toConsumableArray(values)) : makeAnonRecord(fields.reduce(function (obj, _ref5, i) {
    var _ref6 = _slicedToArray(_ref5, 2),
        key = _ref6[0],
        _t = _ref6[1];

    obj[key] = values[i];
    return obj;
  }, {}));
}
export function makeTuple(values, _t) {
  return values;
}
export function makeGenericType(t, generics) {
  return new TypeInfo(t.fullname, generics, t.construct, t.fields, t.cases);
}
export function createInstance(t, consArgs) {
  // TODO: Check if consArgs length is same as t.construct?
  // (Arg types can still be different)
  if (typeof t.construct === "function") {
    return _construct(t.construct, _toConsumableArray(consArgs !== null && consArgs !== void 0 ? consArgs : []));
  } else {
    throw new Error("Cannot access constructor of ".concat(t.fullname));
  }
}
export function getValue(propertyInfo, v) {
  return v[propertyInfo[0]];
} // Fable.Core.Reflection

function assertUnion(x) {
  if (!(x instanceof Union)) {
    throw new Error("Value is not an F# union type");
  }
}

export function getCaseTag(x) {
  assertUnion(x);
  return x.tag;
}
export function getCaseName(x) {
  assertUnion(x);
  return x.name;
}
export function getCaseFields(x) {
  assertUnion(x);
  return x.fields;
}