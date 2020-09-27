function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

import { Union } from "./Types";
import { compare, equals, structuralHash } from "./Util"; // Using a class here for better compatibility with TS files importing Some

export var Some = /*#__PURE__*/function () {
  function Some(value) {
    _classCallCheck(this, Some);

    this.value = value;
  } // Don't add "Some" for consistency with erased options


  _createClass(Some, [{
    key: "toString",
    value: function toString() {
      return String(this.value);
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return this.value;
    }
  }, {
    key: "GetHashCode",
    value: function GetHashCode() {
      return structuralHash(this.value);
    }
  }, {
    key: "Equals",
    value: function Equals(other) {
      if (other == null) {
        return false;
      } else {
        return equals(this.value, other instanceof Some ? other.value : other);
      }
    }
  }, {
    key: "CompareTo",
    value: function CompareTo(other) {
      if (other == null) {
        return 1;
      } else {
        return compare(this.value, other instanceof Some ? other.value : other);
      }
    }
  }]);

  return Some;
}();
export function some(x) {
  return x == null || x instanceof Some ? new Some(x) : x;
}
export function value(x) {
  if (x == null) {
    throw new Error("Option has no value");
  } else {
    return x instanceof Some ? x.value : x;
  }
}
export function tryValue(x) {
  return x instanceof Some ? x.value : x;
}
export function toArray(opt) {
  return opt == null ? [] : [value(opt)];
}
export function defaultArg(opt, defaultValue) {
  return opt != null ? value(opt) : defaultValue;
}
export function defaultArgWith(opt, defThunk) {
  return opt != null ? value(opt) : defThunk();
}
export function filter(predicate, opt) {
  return opt != null ? predicate(value(opt)) ? opt : undefined : opt;
}
export function map(mapping, opt) {
  return opt != null ? some(mapping(value(opt))) : undefined;
}
export function map2(mapping, opt1, opt2) {
  return opt1 != null && opt2 != null ? mapping(value(opt1), value(opt2)) : undefined;
}
export function map3(mapping, opt1, opt2, opt3) {
  return opt1 != null && opt2 != null && opt3 != null ? mapping(value(opt1), value(opt2), value(opt3)) : undefined;
}
export function bind(binder, opt) {
  return opt != null ? binder(value(opt)) : undefined;
}
export function tryOp(op, arg) {
  try {
    return some(op(arg));
  } catch (_a) {
    return undefined;
  }
} // CHOICE

export var Choice = /*#__PURE__*/function (_Union) {
  _inherits(Choice, _Union);

  var _super = _createSuper(Choice);

  function Choice() {
    _classCallCheck(this, Choice);

    return _super.apply(this, arguments);
  }

  return Choice;
}(Union);
export var Choice3 = /*#__PURE__*/function (_Union2) {
  _inherits(Choice3, _Union2);

  var _super2 = _createSuper(Choice3);

  function Choice3() {
    _classCallCheck(this, Choice3);

    return _super2.apply(this, arguments);
  }

  return Choice3;
}(Union);
export var Choice4 = /*#__PURE__*/function (_Union3) {
  _inherits(Choice4, _Union3);

  var _super3 = _createSuper(Choice4);

  function Choice4() {
    _classCallCheck(this, Choice4);

    return _super3.apply(this, arguments);
  }

  return Choice4;
}(Union);
export var Choice5 = /*#__PURE__*/function (_Union4) {
  _inherits(Choice5, _Union4);

  var _super4 = _createSuper(Choice5);

  function Choice5() {
    _classCallCheck(this, Choice5);

    return _super4.apply(this, arguments);
  }

  return Choice5;
}(Union);
export var Choice6 = /*#__PURE__*/function (_Union5) {
  _inherits(Choice6, _Union5);

  var _super5 = _createSuper(Choice6);

  function Choice6() {
    _classCallCheck(this, Choice6);

    return _super5.apply(this, arguments);
  }

  return Choice6;
}(Union);
export var Choice7 = /*#__PURE__*/function (_Union6) {
  _inherits(Choice7, _Union6);

  var _super6 = _createSuper(Choice7);

  function Choice7() {
    _classCallCheck(this, Choice7);

    return _super6.apply(this, arguments);
  }

  return Choice7;
}(Union);
export function choice1Of2(x) {
  return new Choice(0, "Choice1Of2", x);
}
export function choice2Of2(x) {
  return new Choice(1, "Choice2Of2", x);
}
export function tryValueIfChoice1Of2(x) {
  return x.tag === 0 ? some(x.fields[0]) : undefined;
}
export function tryValueIfChoice2Of2(x) {
  return x.tag === 1 ? some(x.fields[0]) : undefined;
} // RESULT

export var Result = /*#__PURE__*/function (_Union7) {
  _inherits(Result, _Union7);

  var _super7 = _createSuper(Result);

  function Result() {
    _classCallCheck(this, Result);

    return _super7.apply(this, arguments);
  }

  return Result;
}(Union);
export function ok(x) {
  return new Result(0, "Ok", x);
}
export function error(x) {
  return new Result(1, "Error", x);
}
export function mapOk(f, result) {
  return result.tag === 0 ? ok(f(result.fields[0])) : result;
}
export function mapError(f, result) {
  return result.tag === 1 ? error(f(result.fields[0])) : result;
}
export function bindOk(f, result) {
  return result.tag === 0 ? f(result.fields[0]) : result;
}