"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactFa = require("react-fa");

var _reactFa2 = _interopRequireDefault(_reactFa);

var _DateTimePickerMinutes = require("./DateTimePickerMinutes");

var _DateTimePickerMinutes2 = _interopRequireDefault(_DateTimePickerMinutes);

var _DateTimePickerHours = require("./DateTimePickerHours");

var _DateTimePickerHours2 = _interopRequireDefault(_DateTimePickerHours);

var _ConstantsJs = require("./Constants.js");

var _ConstantsJs2 = _interopRequireDefault(_ConstantsJs);

var DateTimePickerTime = (function (_Component) {
  _inherits(DateTimePickerTime, _Component);

  function DateTimePickerTime() {
    var _this = this;

    _classCallCheck(this, DateTimePickerTime);

    _get(Object.getPrototypeOf(DateTimePickerTime.prototype), "constructor", this).apply(this, arguments);

    this.state = {
      minutesDisplayed: false,
      hoursDisplayed: false
    };

    this.goBack = function () {
      return _this.setState({
        minutesDisplayed: false,
        hoursDisplayed: false
      });
    };

    this.showMinutes = function () {
      return _this.setState({
        minutesDisplayed: true
      });
    };

    this.showHours = function () {
      return _this.setState({
        hoursDisplayed: true
      });
    };

    this.renderMinutes = function () {
      if (_this.state.minutesDisplayed) {
        return _react2["default"].createElement(_DateTimePickerMinutes2["default"], _extends({}, _this.props, { onSwitch: _this.goBack }));
      } else {
        return null;
      }
    };

    this.renderHours = function () {
      if (_this.state.hoursDisplayed) {
        return _react2["default"].createElement(_DateTimePickerHours2["default"], _extends({}, _this.props, { onSwitch: _this.goBack }));
      } else {
        return null;
      }
    };

    this.renderPicker = function () {
      if (!_this.state.minutesDisplayed && !_this.state.hoursDisplayed) {
        return _react2["default"].createElement(
          "div",
          { className: "timepicker-picker" },
          _react2["default"].createElement(
            "table",
            { className: "table-condensed" },
            _react2["default"].createElement(
              "tbody",
              null,
              _react2["default"].createElement(
                "tr",
                null,
                _react2["default"].createElement(
                  "td",
                  null,
                  _react2["default"].createElement(
                    "a",
                    { className: "btn", onClick: _this.props.addHour },
                    _react2["default"].createElement(_reactFa2["default"], { name: "chevron-up" })
                  )
                ),
                _react2["default"].createElement("td", { className: "separator" }),
                _react2["default"].createElement(
                  "td",
                  null,
                  _react2["default"].createElement(
                    "a",
                    { className: "btn", onClick: _this.props.addMinute },
                    _react2["default"].createElement(_reactFa2["default"], { name: "chevron-up" })
                  )
                ),
                _react2["default"].createElement("td", { className: "separator" })
              ),
              _react2["default"].createElement(
                "tr",
                null,
                _react2["default"].createElement(
                  "td",
                  null,
                  _react2["default"].createElement(
                    "span",
                    { className: "timepicker-hour", onClick: _this.showHours },
                    _this.props.selectedDate.format("h")
                  )
                ),
                _react2["default"].createElement(
                  "td",
                  { className: "separator" },
                  ":"
                ),
                _react2["default"].createElement(
                  "td",
                  null,
                  _react2["default"].createElement(
                    "span",
                    { className: "timepicker-minute", onClick: _this.showMinutes },
                    _this.props.selectedDate.format("mm")
                  )
                ),
                _react2["default"].createElement("td", { className: "separator" }),
                _react2["default"].createElement(
                  "td",
                  null,
                  _react2["default"].createElement(
                    "button",
                    { className: "btn btn-primary", onClick: _this.props.togglePeriod, type: "button" },
                    _this.props.selectedDate.format("A")
                  )
                )
              ),
              _react2["default"].createElement(
                "tr",
                null,
                _react2["default"].createElement(
                  "td",
                  null,
                  _react2["default"].createElement(
                    "a",
                    { className: "btn", onClick: _this.props.subtractHour },
                    _react2["default"].createElement(_reactFa2["default"], { name: "chevron-down" })
                  )
                ),
                _react2["default"].createElement("td", { className: "separator" }),
                _react2["default"].createElement(
                  "td",
                  null,
                  _react2["default"].createElement(
                    "a",
                    { className: "btn", onClick: _this.props.subtractMinute },
                    _react2["default"].createElement(_reactFa2["default"], { name: "chevron-down" })
                  )
                ),
                _react2["default"].createElement("td", { className: "separator" })
              )
            )
          )
        );
      } else {
        return "";
      }
    };
  }

  _createClass(DateTimePickerTime, [{
    key: "render",
    value: function render() {
      return _react2["default"].createElement(
        "div",
        { className: "timepicker" },
        this.renderPicker(),
        this.renderHours(),
        this.renderMinutes()
      );
    }
  }], [{
    key: "propTypes",
    value: {
      setSelectedHour: _propTypes2["default"].func.isRequired,
      setSelectedMinute: _propTypes2["default"].func.isRequired,
      subtractHour: _propTypes2["default"].func.isRequired,
      addHour: _propTypes2["default"].func.isRequired,
      subtractMinute: _propTypes2["default"].func.isRequired,
      addMinute: _propTypes2["default"].func.isRequired,
      viewDate: _propTypes2["default"].object.isRequired,
      selectedDate: _propTypes2["default"].object.isRequired,
      togglePeriod: _propTypes2["default"].func.isRequired,
      mode: _propTypes2["default"].oneOf([_ConstantsJs2["default"].MODE_DATE, _ConstantsJs2["default"].MODE_DATETIME, _ConstantsJs2["default"].MODE_TIME])
    },
    enumerable: true
  }]);

  return DateTimePickerTime;
})(_react.Component);

exports["default"] = DateTimePickerTime;

module.exports = DateTimePickerTime;
module.exports = exports["default"];