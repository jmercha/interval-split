"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(generateSplitInterval);

var moment = require('moment');

var timeValues = function timeValues(time) {
  return {
    hour: time.get('hour'),
    minute: time.get('minute'),
    seconds: time.get('second')
  };
};

var validateArgs = function validateArgs(startDate, endDate, startTime, endTime) {
  if (startDate === null || typeof startDate === 'undefined') throw new Error('startDate is required');
  if (endDate === null || typeof endDate === 'undefined') throw new Error('endDate is required');
  if (startTime === null || typeof startTime === 'undefined') throw new Error('startTime is required');
  if (endTime === null || typeof endTime === 'undefined') throw new Error('endTime is required');
  if (!startDate.isValid()) throw new Error('startDate must be valid');
  if (!endDate.isValid()) throw new Error('endDate must be valid');
  if (!startTime.isValid()) throw new Error('endDate must be valid');
  if (!endTime.isValid()) throw new Error('endTime must be valid');
  if (startDate.diff(endDate) > -1) throw new RangeError('startDate must be before endDate');
  if (startTime.diff(endTime) > -1) throw new RangeError('startTime must be before endTime');
};

function generateSplitInterval(startDate, endDate, startTime, endTime) {
  var days, startValues, endValues, day, date;
  return regeneratorRuntime.wrap(function generateSplitInterval$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          validateArgs(startDate, endDate, startTime, endTime);
          days = Math.abs(startDate.diff(endDate, 'days')); // we don't need to split across multiple days

          if (!(days === 0)) {
            _context.next = 6;
            break;
          }

          _context.next = 5;
          return {
            start: startDate.toDate(),
            end: endDate.toDate()
          };

        case 5:
          return _context.abrupt("return");

        case 6:
          startValues = timeValues(startTime);
          endValues = timeValues(endTime); // first interval

          _context.next = 10;
          return {
            start: startDate.toDate(),
            end: startDate.clone().set(endValues).toDate()
          };

        case 10:
          if (!(days > 1)) {
            _context.next = 19;
            break;
          }

          day = 1;

        case 12:
          if (!(day < days)) {
            _context.next = 19;
            break;
          }

          date = startDate.clone().add(day, 'days');
          _context.next = 16;
          return {
            start: date.clone().set(startValues).toDate(),
            end: date.clone().set(endValues).toDate()
          };

        case 16:
          ++day;
          _context.next = 12;
          break;

        case 19:
          _context.next = 21;
          return {
            start: endDate.clone().set(startValues).toDate(),
            end: endDate.toDate()
          };

        case 21:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

var splitInterval = function splitInterval(startDate, endDate, startTime, endTime) {
  return _toConsumableArray(generateSplitInterval(moment(startDate), moment(endDate), moment(startTime, 'hh:mm:ss'), moment(endTime, 'hh:mm:ss')));
};

module.exports = splitInterval;