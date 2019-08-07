"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var DateTimePickerDays = (function (_Component) {
  _inherits(DateTimePickerDays, _Component);

  function DateTimePickerDays() {
    var _this = this;

    _classCallCheck(this, DateTimePickerDays);

    _get(Object.getPrototypeOf(DateTimePickerDays.prototype), "constructor", this).apply(this, arguments);

    this.renderDays = function () {
      var cells, classes, days, html, month, nextMonth, prevMonth, minDate, maxDate, row, year;
      year = _this.props.viewDate.year();
      month = _this.props.viewDate.month();
      prevMonth = _this.props.viewDate.clone().subtract(1, "months");
      days = prevMonth.daysInMonth();
      prevMonth.date(days).startOf("week");
      nextMonth = (0, _moment2["default"])(prevMonth).clone().add(42, "d");
      minDate = _this.props.minDate ? _this.props.minDate.clone().subtract(1, "days") : _this.props.minDate;
      maxDate = _this.props.maxDate ? _this.props.maxDate.clone() : _this.props.maxDate;
      html = [];
      cells = [];
      while (prevMonth.isBefore(nextMonth)) {
        classes = {
          day: true
        };
        if (prevMonth.year() < year || prevMonth.year() === year && prevMonth.month() < month) {
          classes.old = true;
        } else if (prevMonth.year() > year || prevMonth.year() === year && prevMonth.month() > month) {
          classes["new"] = true;
        }
        if (prevMonth.isSame((0, _moment2["default"])({
          y: _this.props.selectedDate.year(),
          M: _this.props.selectedDate.month(),
          d: _this.props.selectedDate.date()
        }))) {
          classes.active = true;
        }
        if (_this.props.showToday) {
          if (prevMonth.isSame((0, _moment2["default"])(), "day")) {
            classes.today = true;
          }
        }
        if (minDate && prevMonth.isBefore(minDate) || maxDate && prevMonth.isAfter(maxDate)) {
          classes.disabled = true;
        }
        if (_this.props.daysOfWeekDisabled.length > 0) classes.disabled = _this.props.daysOfWeekDisabled.indexOf(prevMonth.day()) !== -1;
        cells.push(_react2["default"].createElement(
          "td",
          { key: prevMonth.month() + "-" + prevMonth.date(), className: (0, _classnames2["default"])(classes), onClick: _this.props.setSelectedDate },
          prevMonth.date()
        ));
        if (prevMonth.weekday() === (0, _moment2["default"])().endOf("week").weekday()) {
          row = _react2["default"].createElement(
            "tr",
            { key: prevMonth.month() + "-" + prevMonth.date() },
            cells
          );
          html.push(row);
          cells = [];
        }
        prevMonth.add(1, "d");
      }
      return html;
    };
  }

  _createClass(DateTimePickerDays, [{
    key: "render",
    value: function render() {
      var weekdaysMin = _moment2["default"].weekdaysMin();
      var dow = _moment2["default"].localeData()._week.dow;
      weekdaysMin = weekdaysMin.concat(weekdaysMin.splice(0, dow));

      return _react2["default"].createElement(
        "div",
        { className: "datepicker-days", style: { display: "block" } },
        _react2["default"].createElement(
          "table",
          { className: "table-condensed" },
          _react2["default"].createElement(
            "thead",
            null,
            _react2["default"].createElement(
              "tr",
              null,
              _react2["default"].createElement(
                "th",
                { className: "prev", onClick: this.props.subtractMonth },
                "‹"
              ),
              _react2["default"].createElement(
                "th",
                { className: "switch", colSpan: "5", onClick: this.props.showMonths },
                _moment2["default"].months()[this.props.viewDate.month()],
                " ",
                this.props.viewDate.year()
              ),
              _react2["default"].createElement(
                "th",
                { className: "next", onClick: this.props.addMonth },
                "›"
              )
            ),
            _react2["default"].createElement(
              "tr",
              null,
              weekdaysMin.map(function (item, index) {
                return _react2["default"].createElement(
                  "th",
                  { className: "dow", key: index },
                  item
                );
              })
            )
          ),
          _react2["default"].createElement(
            "tbody",
            null,
            this.renderDays()
          )
        )
      );
    }
  }], [{
    key: "propTypes",
    value: {
      subtractMonth: _propTypes2["default"].func.isRequired,
      addMonth: _propTypes2["default"].func.isRequired,
      viewDate: _propTypes2["default"].object.isRequired,
      selectedDate: _propTypes2["default"].object.isRequired,
      showToday: _propTypes2["default"].bool,
      daysOfWeekDisabled: _propTypes2["default"].array,
      setSelectedDate: _propTypes2["default"].func.isRequired,
      showMonths: _propTypes2["default"].func.isRequired,
      minDate: _propTypes2["default"].object,
      maxDate: _propTypes2["default"].object
    },
    enumerable: true
  }, {
    key: "defaultProps",
    value: {
      showToday: true
    },
    enumerable: true
  }]);

  return DateTimePickerDays;
})(_react.Component);

exports["default"] = DateTimePickerDays;
module.exports = exports["default"];