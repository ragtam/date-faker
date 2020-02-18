"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = changeDate;

function changeDate(dateToBeChanged) {
  return {
    addYear: function addYear(yearsToAdd) {
      var expectedYear = dateToBeChanged.getFullYear() + yearsToAdd;
      dateToBeChanged.setFullYear(expectedYear);
      return dateToBeChanged;
    },
    addMonth: function addMonth(monthsToAdd) {
      var expectedMonth = dateToBeChanged.getMonth() + monthsToAdd;
      dateToBeChanged.setMonth(expectedMonth);
      return dateToBeChanged;
    },
    addDay: function addDay(daysToAdd) {
      var expectedDay = dateToBeChanged.getDate() + daysToAdd;
      dateToBeChanged.setDate(expectedDay);
      return dateToBeChanged;
    },
    addHour: function addHour(hoursToAdd) {
      var expectedHour = dateToBeChanged.getHours() + hoursToAdd;
      dateToBeChanged.setHours(expectedHour);
      return dateToBeChanged;
    },
    addMinute: function addMinute(minutesToAdd) {
      var expectedMinute = dateToBeChanged.getMinutes() + minutesToAdd;
      dateToBeChanged.setMinutes(expectedMinute);
      return dateToBeChanged;
    },
    addSecond: function addSecond(secondsToAdd) {
      var expectedSeconds = dateToBeChanged.getSeconds() + secondsToAdd;
      dateToBeChanged.setSeconds(expectedSeconds);
      return dateToBeChanged;
    },
    addMillisecond: function addMillisecond(millisecondsToAdd) {
      var expectedMilliseconds = dateToBeChanged.getMilliseconds() + millisecondsToAdd;
      dateToBeChanged.setMilliseconds(expectedMilliseconds);
      return dateToBeChanged;
    }
  };
}