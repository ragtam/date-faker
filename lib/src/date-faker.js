"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _changeDate = _interopRequireDefault(require("./change-date"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var originalDateObject = Date;
var dateShiftingFunctions = new Map([['year', function (dateToBeChanged) {
  return (0, _changeDate["default"])(dateToBeChanged).addYear;
}], ['month', function (dateToBeChanged) {
  return (0, _changeDate["default"])(dateToBeChanged).addMonth;
}], ['day', function (dateToBeChanged) {
  return (0, _changeDate["default"])(dateToBeChanged).addDay;
}], ['hour', function (dateToBeChanged) {
  return (0, _changeDate["default"])(dateToBeChanged).addHour;
}], ['minute', function (dateToBeChanged) {
  return (0, _changeDate["default"])(dateToBeChanged).addMinute;
}], ['second', function (dateToBeChanged) {
  return (0, _changeDate["default"])(dateToBeChanged).addSecond;
}], ['millisecond', function (dateToBeChanged) {
  return (0, _changeDate["default"])(dateToBeChanged).addMillisecond;
}]]);
var dateFaker = {
  add: function add(timeShiftValue, shiftUnit) {
    var shiftFun = dateShiftingFunctions.get(shiftUnit);
    var res = shiftFun(new originalDateObject())(timeShiftValue);

    Date = function Date() {
      if (arguments.length === 0) {
        return new originalDateObject(res.toISOString());
      } else {
        return _construct(originalDateObject, Array.prototype.slice.call(arguments));
      }
    };

    Date.now = new originalDateObject(res.toISOString()).getTime();
    Date.parse = originalDateObject.parse;
    Date.UTC = originalDateObject.UTC;
  },
  reset: function reset() {
    Date = originalDateObject;
  }
};
var _default = dateFaker;
exports["default"] = _default;