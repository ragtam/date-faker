"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dateFaker = void 0;

var _changeDate = _interopRequireDefault(require("./change-date"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

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

function shiftByMultipleUnits(shiftConfigObj) {
  return Object.keys(shiftConfigObj).reduce(function (resultDate, unit) {
    return dateShiftingFunctions.has(unit) ? dateShiftingFunctions.get(unit)(resultDate)(shiftConfigObj[unit]) : resultDate;
  }, new originalDateObject());
}

function shiftByUnit(shift, shiftUnit) {
  if (!dateShiftingFunctions.has(shiftUnit)) {
    throw new Error("Invalid shift unit provided. Correct values are: 'year' | 'month' | 'day' | 'minute' | 'second' | 'millisecond'");
  }

  return dateShiftingFunctions.get(shiftUnit)(new originalDateObject())(shift);
}

function overrideDate(dateAfterShift, shouldResetAfterInvocation) {
  Date = function Date() {
    if (arguments.length === 0) {
      var result = new originalDateObject(dateAfterShift);

      if (shouldResetAfterInvocation) {
        restoreOriginalDateBehaviour();
      }

      return result;
    } else {
      return _construct(originalDateObject, Array.prototype.slice.call(arguments));
    }
  };

  Date.now = new originalDateObject(dateAfterShift).getTime();
  Date.parse = originalDateObject.parse;
  Date.UTC = originalDateObject.UTC;
}

function restoreOriginalDateBehaviour() {
  Date = originalDateObject;
}

function getDateAfterShift(shift, shiftUnit) {
  return _typeof(shift) == 'object' ? shiftByMultipleUnits(shift) : shiftByUnit(shift, shiftUnit);
}

var dateFaker = {
  add: function add(shift, shiftUnit) {
    var d = getDateAfterShift(shift, shiftUnit);
    overrideDate(d, false);
  },
  addAndReset: function addAndReset(shift, shiftUnit) {
    var d = getDateAfterShift(shift, shiftUnit);
    overrideDate(d, true);
  },
  set: function set(args) {
    overrideDate(args);
  },
  reset: function reset() {
    restoreOriginalDateBehaviour();
  }
};
exports.dateFaker = dateFaker;