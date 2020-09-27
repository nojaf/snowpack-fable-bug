import { isValid } from "./Int32";
import * as LongLib from "../lib/long";
export default LongLib.Long;
export var get_Zero = LongLib.ZERO;
export var get_One = LongLib.ONE;
export var op_Addition = LongLib.add;
export var op_Subtraction = LongLib.subtract;
export var op_Multiply = LongLib.multiply;
export var op_Division = LongLib.divide;
export var op_Modulus = LongLib.modulo;
export var op_UnaryNegation = LongLib.negate;
export var op_LeftShift = LongLib.shiftLeft;
export var op_RightShift = LongLib.shiftRight;
export var op_RightShiftUnsigned = LongLib.shiftRightUnsigned;
export var op_BitwiseAnd = LongLib.and;
export var op_BitwiseOr = LongLib.or;
export var op_ExclusiveOr = LongLib.xor;
export var op_LogicalNot = LongLib.not;
export var op_LessThan = LongLib.lessThan;
export var op_LessThanOrEqual = LongLib.lessThanOrEqual;
export var op_GreaterThan = LongLib.greaterThan;
export var op_GreaterThanOrEqual = LongLib.greaterThanOrEqual;
export var op_Equality = LongLib.equals;
export var op_Inequality = LongLib.notEquals;
export var equals = LongLib.equals;
export var compare = LongLib.compare;
export var fromInt = LongLib.fromInt;
export var fromBits = LongLib.fromBits;
export var fromBytes = LongLib.fromBytes;
export var fromNumber = LongLib.fromNumber;
export var fromString = LongLib.fromString;
export var fromValue = LongLib.fromValue;
export var toInt = LongLib.toInt;
export var toBytes = LongLib.toBytes;
export var toNumber = LongLib.toNumber;
export var toString = LongLib.toString;
export var getLowBits = LongLib.getLowBits;
export var getHighBits = LongLib.getHighBits;
export var getLowBitsUnsigned = LongLib.getLowBitsUnsigned;
export var getHighBitsUnsigned = LongLib.getHighBitsUnsigned;

function getMaxValue(unsigned, radix, isNegative) {
  switch (radix) {
    case 2:
      return unsigned ? "1111111111111111111111111111111111111111111111111111111111111111" : isNegative ? "1000000000000000000000000000000000000000000000000000000000000000" : "111111111111111111111111111111111111111111111111111111111111111";

    case 8:
      return unsigned ? "1777777777777777777777" : isNegative ? "1000000000000000000000" : "777777777777777777777";

    case 10:
      return unsigned ? "18446744073709551615" : isNegative ? "9223372036854775808" : "9223372036854775807";

    case 16:
      return unsigned ? "FFFFFFFFFFFFFFFF" : isNegative ? "8000000000000000" : "7FFFFFFFFFFFFFFF";

    default:
      throw new Error("Invalid radix.");
  }
}

export function abs(x) {
  if (!x.unsigned && LongLib.isNegative(x)) {
    return op_UnaryNegation(x);
  } else {
    return x;
  }
}
export function fromInteger(value, unsigned, kind) {
  var x = value;
  var xh = 0;

  switch (kind) {
    case 0:
      x = value << 24 >> 24;
      xh = x;
      break;

    case 4:
      x = value << 24 >>> 24;
      break;

    case 1:
      x = value << 16 >> 16;
      xh = x;
      break;

    case 5:
      x = value << 16 >>> 16;
      break;

    case 2:
      x = value >> 0;
      xh = x;
      break;

    case 6:
      x = value >>> 0;
      break;
  }

  return LongLib.fromBits(x, xh >> 31, unsigned);
}
export function parse(str, style, unsigned, _bitsize, radix) {
  var res = isValid(str, style, radix);

  if (res != null) {
    var lessOrEqual = function lessOrEqual(x, y) {
      var len = Math.max(x.length, y.length);
      return x.padStart(len, "0") <= y.padStart(len, "0");
    };

    var isNegative = res.sign === "-";
    var maxValue = getMaxValue(unsigned || res.radix !== 10, res.radix, isNegative);

    if (lessOrEqual(res.digits.toUpperCase(), maxValue)) {
      str = isNegative ? res.sign + res.digits : res.digits;
      return LongLib.fromString(str, unsigned, res.radix);
    }
  }

  throw new Error("Input string was not in a correct format.");
}
export function tryParse(str, style, unsigned, bitsize) {
  try {
    var v = parse(str, style, unsigned, bitsize);
    return [true, v];
  } catch (_a) {// supress error
  }

  return [false, LongLib.ZERO];
}
export function unixEpochMillisecondsToTicks(ms, offset) {
  return op_Multiply(op_Addition(op_Addition(LongLib.fromNumber(ms), 62135596800000), offset), 10000);
}
export function ticksToUnixEpochMilliseconds(ticks) {
  return LongLib.toNumber(op_Subtraction(op_Division(ticks, 10000), 62135596800000));
}
export function makeRangeStepFunction(step, last, unsigned) {
  var stepComparedWithZero = LongLib.compare(step, unsigned ? LongLib.UZERO : LongLib.ZERO);

  if (stepComparedWithZero === 0) {
    throw new Error("The step of a range cannot be zero");
  }

  var stepGreaterThanZero = stepComparedWithZero > 0;
  return function (x) {
    var comparedWithLast = LongLib.compare(x, last);

    if (stepGreaterThanZero && comparedWithLast <= 0 || !stepGreaterThanZero && comparedWithLast >= 0) {
      return [x, op_Addition(x, step)];
    } else {
      return undefined;
    }
  };
}