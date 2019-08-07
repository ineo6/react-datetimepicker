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

var _reactFa = require("react-fa");

var _reactFa2 = _interopRequireDefault(_reactFa);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _DateTimePickerDateJs = require("./DateTimePickerDate.js");

var _DateTimePickerDateJs2 = _interopRequireDefault(_DateTimePickerDateJs);

var _DateTimePickerTimeJs = require("./DateTimePickerTime.js");

var _DateTimePickerTimeJs2 = _interopRequireDefault(_DateTimePickerTimeJs);

var _ConstantsJs = require("./Constants.js");

var _ConstantsJs2 = _interopRequireDefault(_ConstantsJs);

var DateTimePicker = (function (_Component) {
    _inherits(DateTimePicker, _Component);

    function DateTimePicker() {
        var _this = this;

        _classCallCheck(this, DateTimePicker);

        _get(Object.getPrototypeOf(DateTimePicker.prototype), "constructor", this).apply(this, arguments);

        this.renderDatePicker = function () {
            if (_this.props.showDatePicker) {
                return _react2["default"].createElement(
                    "li",
                    null,
                    _react2["default"].createElement(_DateTimePickerDateJs2["default"], {
                        addDecade: _this.props.addDecade,
                        addMonth: _this.props.addMonth,
                        addYear: _this.props.addYear,
                        daysOfWeekDisabled: _this.props.daysOfWeekDisabled,
                        maxDate: _this.props.maxDate,
                        minDate: _this.props.minDate,
                        selectedDate: _this.props.selectedDate,
                        setSelectedMonth: _this.props.setSelectedMonth,
                        setSelectedDate: _this.props.setSelectedDate,
                        setViewMonth: _this.props.setViewMonth,
                        setViewYear: _this.props.setViewYear,
                        showToday: _this.props.showToday,
                        subtractDecade: _this.props.subtractDecade,
                        subtractMonth: _this.props.subtractMonth,
                        subtractYear: _this.props.subtractYear,
                        viewDate: _this.props.viewDate,
                        viewMode: _this.props.viewMode,
                        mode: _this.props.mode
                    })
                );
            }
        };

        this.renderTimePicker = function () {
            if (_this.props.showTimePicker) {
                return _react2["default"].createElement(
                    "li",
                    null,
                    _react2["default"].createElement(_DateTimePickerTimeJs2["default"], {
                        addHour: _this.props.addHour,
                        addMinute: _this.props.addMinute,
                        mode: _this.props.mode,
                        selectedDate: _this.props.selectedDate,
                        setSelectedHour: _this.props.setSelectedHour,
                        setSelectedMinute: _this.props.setSelectedMinute,
                        subtractHour: _this.props.subtractHour,
                        subtractMinute: _this.props.subtractMinute,
                        togglePeriod: _this.props.togglePeriod,
                        viewDate: _this.props.viewDate
                    })
                );
            }
        };

        this.renderSwitchButton = function () {
            return _this.props.mode === _ConstantsJs2["default"].MODE_DATETIME ? _react2["default"].createElement(
                "li",
                null,
                _react2["default"].createElement(
                    "span",
                    { className: "btn picker-switch", style: { width: "100%" }, onClick: _this.props.togglePicker },
                    _react2["default"].createElement(_reactFa2["default"], {
                        name: _this.props.showTimePicker ? "calendar" : "clock-o" })
                )
            ) : null;
        };
    }

    _createClass(DateTimePicker, [{
        key: "render",
        value: function render() {
            return _react2["default"].createElement(
                "div",
                { className: (0, _classnames2["default"])(this.props.widgetClasses), style: this.props.widgetStyle },
                _react2["default"].createElement(
                    "ul",
                    { className: "list-unstyled" },
                    this.renderDatePicker(),
                    this.renderSwitchButton(),
                    this.renderTimePicker()
                )
            );
        }
    }], [{
        key: "propTypes",
        value: {
            showDatePicker: _propTypes2["default"].bool,
            showTimePicker: _propTypes2["default"].bool,
            subtractMonth: _propTypes2["default"].func.isRequired,
            addMonth: _propTypes2["default"].func.isRequired,
            viewDate: _propTypes2["default"].object.isRequired,
            selectedDate: _propTypes2["default"].object.isRequired,
            showToday: _propTypes2["default"].bool,
            viewMode: _propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].number]),
            mode: _propTypes2["default"].oneOf([_ConstantsJs2["default"].MODE_DATE, _ConstantsJs2["default"].MODE_MONTH, _ConstantsJs2["default"].MODE_DATETIME, _ConstantsJs2["default"].MODE_TIME]),
            daysOfWeekDisabled: _propTypes2["default"].array,
            setSelectedMonth: _propTypes2["default"].func.isRequired,
            setSelectedDate: _propTypes2["default"].func.isRequired,
            subtractYear: _propTypes2["default"].func.isRequired,
            addYear: _propTypes2["default"].func.isRequired,
            setViewMonth: _propTypes2["default"].func.isRequired,
            setViewYear: _propTypes2["default"].func.isRequired,
            subtractHour: _propTypes2["default"].func.isRequired,
            addHour: _propTypes2["default"].func.isRequired,
            subtractMinute: _propTypes2["default"].func.isRequired,
            addMinute: _propTypes2["default"].func.isRequired,
            addDecade: _propTypes2["default"].func.isRequired,
            subtractDecade: _propTypes2["default"].func.isRequired,
            togglePeriod: _propTypes2["default"].func.isRequired,
            minDate: _propTypes2["default"].object,
            maxDate: _propTypes2["default"].object,
            widgetClasses: _propTypes2["default"].object,
            widgetStyle: _propTypes2["default"].object,
            togglePicker: _propTypes2["default"].func,
            setSelectedHour: _propTypes2["default"].func,
            setSelectedMinute: _propTypes2["default"].func
        },
        enumerable: true
    }]);

    return DateTimePicker;
})(_react.Component);

exports["default"] = DateTimePicker;
module.exports = exports["default"];