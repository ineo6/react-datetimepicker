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

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

var _momentLocaleZhCn = require("moment/locale/zh-cn");

var _momentLocaleZhCn2 = _interopRequireDefault(_momentLocaleZhCn);

var _reactFa = require("react-fa");

var _reactFa2 = _interopRequireDefault(_reactFa);

var _DateTimePickerJs = require("./DateTimePicker.js");

var _DateTimePickerJs2 = _interopRequireDefault(_DateTimePickerJs);

var _ConstantsJs = require("./Constants.js");

var _ConstantsJs2 = _interopRequireDefault(_ConstantsJs);

_moment2["default"].locale("zh_cn");

var DateTimeField = (function (_Component) {
    _inherits(DateTimeField, _Component);

    function DateTimeField() {
        var _this = this;

        _classCallCheck(this, DateTimeField);

        _get(Object.getPrototypeOf(DateTimeField.prototype), "constructor", this).apply(this, arguments);

        this.resolvePropsInputFormat = function () {
            if (_this.props.inputFormat) {
                return _this.props.inputFormat;
            }
            switch (_this.props.mode) {
                case _ConstantsJs2["default"].MODE_TIME:
                    return "h:mm A";
                case _ConstantsJs2["default"].MODE_DATE:
                    return "MM/DD/YY";
                case _ConstantsJs2["default"].MODE_MONTH:
                    return "MM/YY";
                default:
                    return "MM/DD/YY h:mm A";
            }
        };

        this.state = {
            showDatePicker: this.props.mode !== _ConstantsJs2["default"].MODE_TIME,
            showTimePicker: this.props.mode === _ConstantsJs2["default"].MODE_TIME,
            inputFormat: this.resolvePropsInputFormat(),
            buttonIcon: this.props.mode === _ConstantsJs2["default"].MODE_TIME ? "clock-o" : "calendar",
            widgetStyle: {
                display: "block",
                position: "absolute",
                left: -9999,
                zIndex: "9999 !important"
            },
            viewDate: (0, _moment2["default"])(this.props.dateTime, this.props.format, true).startOf("month"),
            selectedDate: (0, _moment2["default"])(this.props.dateTime, this.props.format, true),
            inputValue: typeof this.props.defaultText !== "undefined" ? this.props.defaultText : (0, _moment2["default"])(this.props.dateTime, this.props.format, true).format(this.resolvePropsInputFormat())
        };

        this.componentWillReceiveProps = function (nextProps) {
            var state = {};
            if (nextProps.inputFormat !== _this.props.inputFormat) {
                state.inputFormat = nextProps.inputFormat;
                state.inputValue = (0, _moment2["default"])(nextProps.dateTime, nextProps.format, true).format(nextProps.inputFormat);
            }

            if (nextProps.dateTime !== _this.props.dateTime && (0, _moment2["default"])(nextProps.dateTime, nextProps.format, true).isValid()) {
                state.viewDate = (0, _moment2["default"])(nextProps.dateTime, nextProps.format, true).startOf("month");
                state.selectedDate = (0, _moment2["default"])(nextProps.dateTime, nextProps.format, true);
                state.inputValue = (0, _moment2["default"])(nextProps.dateTime, nextProps.format, true).format(nextProps.inputFormat ? nextProps.inputFormat : _this.state.inputFormat);
            }
            return _this.setState(state);
        };

        this.onChange = function (event) {
            var value = event.target == null ? event : event.target.value;
            if ((0, _moment2["default"])(value, _this.state.inputFormat, true).isValid()) {
                _this.setState({
                    selectedDate: (0, _moment2["default"])(value, _this.state.inputFormat, true),
                    viewDate: (0, _moment2["default"])(value, _this.state.inputFormat, true).startOf("month")
                });
            }

            return _this.setState({
                inputValue: value
            }, function () {
                return this.props.onChange((0, _moment2["default"])(this.state.inputValue, this.state.inputFormat, true).format(this.props.format), value);
            });
        };

        this.getValue = function () {
            return (0, _moment2["default"])(_this.state.inputValue, _this.props.inputFormat, true).format(_this.props.format);
        };

        this.setSelectedMonth = function (e) {
            var target = e.target;

            if (target.className && !target.className.match(/disabled/g)) {
                return _this.setState({
                    selectedDate: (0, _moment2["default"])(_this.state.viewDate.clone().toDate()).month(e.target.innerHTML).date(1).hour(_this.state.selectedDate.hours()).minute(_this.state.selectedDate.minutes())
                }, function () {
                    this.closePicker();
                    this.props.onChange(this.state.selectedDate.format(this.props.format));
                    return this.setState({
                        inputValue: this.state.selectedDate.format(this.state.inputFormat)
                    });
                });
            }
        };

        this.setSelectedDate = function (e) {
            var target = e.target;

            if (target.className && !target.className.match(/disabled/g)) {
                var month = undefined;
                if (target.className.indexOf("new") >= 0) month = _this.state.viewDate.month() + 1;else if (target.className.indexOf("old") >= 0) month = _this.state.viewDate.month() - 1;else month = _this.state.viewDate.month();
                return _this.setState({
                    selectedDate: _this.state.viewDate.clone().month(month).date(parseInt(e.target.innerHTML)).hour(_this.state.selectedDate.hours()).minute(_this.state.selectedDate.minutes())
                }, function () {
                    this.closePicker();
                    this.props.onChange(this.state.selectedDate.format(this.props.format));
                    return this.setState({
                        inputValue: this.state.selectedDate.format(this.state.inputFormat)
                    });
                });
            }
        };

        this.setSelectedHour = function (e) {
            return _this.setState({
                selectedDate: _this.state.selectedDate.clone().hour(parseInt(e.target.innerHTML)).minute(_this.state.selectedDate.minutes())
            }, function () {
                this.closePicker();
                this.props.onChange(this.state.selectedDate.format(this.props.format));
                return this.setState({
                    inputValue: this.state.selectedDate.format(this.state.inputFormat)
                });
            });
        };

        this.setSelectedMinute = function (e) {
            return _this.setState({
                selectedDate: _this.state.selectedDate.clone().hour(_this.state.selectedDate.hours()).minute(parseInt(e.target.innerHTML))
            }, function () {
                this.closePicker();
                this.props.onChange(this.state.selectedDate.format(this.props.format));
                return this.setState({
                    inputValue: this.state.selectedDate.format(this.state.inputFormat)
                });
            });
        };

        this.setViewMonth = function (month) {
            return _this.setState({
                viewDate: _this.state.viewDate.clone().month(month)
            });
        };

        this.setViewYear = function (year) {
            return _this.setState({
                viewDate: _this.state.viewDate.clone().year(year)
            });
        };

        this.addMinute = function () {
            return _this.setState({
                selectedDate: _this.state.selectedDate.clone().add(1, "minutes")
            }, function () {
                this.props.onChange(this.state.selectedDate.format(this.props.format));
                return this.setState({
                    inputValue: this.state.selectedDate.format(this.resolvePropsInputFormat())
                });
            });
        };

        this.addHour = function () {
            return _this.setState({
                selectedDate: _this.state.selectedDate.clone().add(1, "hours")
            }, function () {
                this.props.onChange(this.state.selectedDate.format(this.props.format));
                return this.setState({
                    inputValue: this.state.selectedDate.format(this.resolvePropsInputFormat())
                });
            });
        };

        this.addMonth = function () {
            return _this.setState({
                viewDate: _this.state.viewDate.add(1, "months")
            });
        };

        this.addYear = function () {
            return _this.setState({
                viewDate: _this.state.viewDate.add(1, "years")
            });
        };

        this.addDecade = function () {
            return _this.setState({
                viewDate: _this.state.viewDate.add(10, "years")
            });
        };

        this.subtractMinute = function () {
            return _this.setState({
                selectedDate: _this.state.selectedDate.clone().subtract(1, "minutes")
            }, function () {
                _this.props.onChange(_this.state.selectedDate.format(_this.props.format));
                return _this.setState({
                    inputValue: _this.state.selectedDate.format(_this.resolvePropsInputFormat())
                });
            });
        };

        this.subtractHour = function () {
            return _this.setState({
                selectedDate: _this.state.selectedDate.clone().subtract(1, "hours")
            }, function () {
                _this.props.onChange(_this.state.selectedDate.format(_this.props.format));
                return _this.setState({
                    inputValue: _this.state.selectedDate.format(_this.resolvePropsInputFormat())
                });
            });
        };

        this.subtractMonth = function () {
            return _this.setState({
                viewDate: _this.state.viewDate.subtract(1, "months")
            });
        };

        this.subtractYear = function () {
            return _this.setState({
                viewDate: _this.state.viewDate.subtract(1, "years")
            });
        };

        this.subtractDecade = function () {
            return _this.setState({
                viewDate: _this.state.viewDate.subtract(10, "years")
            });
        };

        this.togglePeriod = function () {
            if (_this.state.selectedDate.hour() > 12) {
                return _this.onChange(_this.state.selectedDate.clone().subtract(12, "hours").format(_this.state.inputFormat));
            } else {
                return _this.onChange(_this.state.selectedDate.clone().add(12, "hours").format(_this.state.inputFormat));
            }
        };

        this.togglePicker = function () {
            return _this.setState({
                showDatePicker: !_this.state.showDatePicker,
                showTimePicker: !_this.state.showTimePicker
            });
        };

        this.onClick = function () {
            var classes = undefined,
                gBCR = undefined,
                offset = undefined,
                placePosition = undefined,
                scrollTop = undefined,
                styles = undefined;
            if (_this.state.showPicker) {
                return _this.closePicker();
            } else {
                _this.setState({
                    showPicker: true
                });
                gBCR = _this.refs.dtpbutton.getBoundingClientRect();
                classes = {
                    "bootstrap-datetimepicker-widget": true,
                    "dropdown-menu": true
                };
                offset = {
                    top: gBCR.top + window.pageYOffset - document.documentElement.clientTop,
                    left: gBCR.left + window.pageXOffset - document.documentElement.clientLeft
                };
                offset.top = offset.top + _this.refs.datetimepicker.offsetHeight;
                scrollTop = window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
                placePosition = _this.props.direction === "up" ? "top" : _this.props.direction === "bottom" ? "bottom" : _this.props.direction === "auto" ? offset.top + _this.refs.widget.offsetHeight > window.offsetHeight + scrollTop && _this.refs.widget.offsetHeight + _this.refs.datetimepicker.offsetHeight > offset.top ? "top" : "bottom" : void 0;
                if (placePosition === "top") {
                    offset.top = -_this.refs.widget.offsetHeight - _this.clientHeight - 2;
                    classes.top = true;
                    classes.bottom = false;
                    classes["pull-left"] = true;
                } else {
                    offset.top = 40;
                    classes.top = false;
                    classes.bottom = true;
                    classes["pull-left"] = true;
                }
                styles = {
                    display: "block",
                    position: "absolute",
                    top: offset.top,
                    left: "auto",
                    right: "auto"
                };
                classes.aLeft = _this.props.pickerAlign == "left" ? true : false;
                classes.aRight = _this.props.pickerAlign == "right" ? true : false;
                return _this.setState({
                    widgetStyle: styles,
                    widgetClasses: classes
                });
            }
        };

        this.closePicker = function () {
            var style = Object.assign({}, _this.state.widgetStyle);
            style.left = -9999;
            style.display = "none";
            return _this.setState({
                showPicker: false,
                widgetStyle: style
            });
        };

        this.size = function () {
            switch (_this.props.size) {
                case _ConstantsJs2["default"].SIZE_SMALL:
                    return "form-group-sm";
                case _ConstantsJs2["default"].SIZE_LARGE:
                    return "form-group-lg";
            }

            return "";
        };

        this.renderOverlay = function () {
            var styles = {
                position: "fixed",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: "999"
            };
            if (_this.state.showPicker) {
                return _react2["default"].createElement("div", { onClick: _this.closePicker, style: styles });
            } else {
                return _react2["default"].createElement("span", null);
            }
        };
    }

    _createClass(DateTimeField, [{
        key: "render",
        value: function render() {
            return _react2["default"].createElement(
                "div",
                { style: { display: "inline-block", position: "relative" } },
                this.renderOverlay(),
                _react2["default"].createElement(_DateTimePickerJs2["default"], {
                    addDecade: this.addDecade,
                    addHour: this.addHour,
                    addMinute: this.addMinute,
                    addMonth: this.addMonth,
                    addYear: this.addYear,
                    daysOfWeekDisabled: this.props.daysOfWeekDisabled,
                    maxDate: this.props.maxDate,
                    minDate: this.props.minDate,
                    mode: this.props.mode,
                    ref: "widget",
                    selectedDate: this.state.selectedDate,
                    setSelectedDate: this.setSelectedDate,
                    setSelectedMonth: this.setSelectedMonth,
                    setSelectedHour: this.setSelectedHour,
                    setSelectedMinute: this.setSelectedMinute,
                    setViewMonth: this.setViewMonth,
                    setViewYear: this.setViewYear,
                    showDatePicker: this.state.showDatePicker,
                    showTimePicker: this.state.showTimePicker,
                    showToday: this.props.showToday,
                    subtractDecade: this.subtractDecade,
                    subtractHour: this.subtractHour,
                    subtractMinute: this.subtractMinute,
                    subtractMonth: this.subtractMonth,
                    subtractYear: this.subtractYear,
                    togglePeriod: this.togglePeriod,
                    togglePicker: this.togglePicker,
                    viewDate: this.state.viewDate,
                    viewMode: this.props.viewMode,
                    widgetClasses: this.state.widgetClasses,
                    widgetStyle: this.state.widgetStyle
                }),
                _react2["default"].createElement(
                    "div",
                    { className: "input-group date " + this.size(), ref: "datetimepicker" },
                    _react2["default"].createElement("input", _extends({ className: "form-control", onChange: this.onChange, type: "text",
                        value: this.state.inputValue }, this.props.inputProps)),
                    _react2["default"].createElement(
                        "span",
                        { className: "input-group-addon", onBlur: this.onBlur, onClick: this.onClick, ref: "dtpbutton" },
                        _react2["default"].createElement(_reactFa2["default"], { name: this.state.buttonIcon })
                    )
                )
            );
        }
    }], [{
        key: "defaultProps",
        value: {
            dateTime: (0, _moment2["default"])().format("x"),
            format: "x",
            showToday: true,
            viewMode: "days",
            daysOfWeekDisabled: [],
            size: _ConstantsJs2["default"].SIZE_MEDIUM,
            pickerAlign: "left",
            mode: _ConstantsJs2["default"].MODE_DATETIME,
            onChange: function onChange(x) {
                //console.log(x);
            }
        },
        enumerable: true
    }, {
        key: "propTypes",
        value: {
            dateTime: _propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].number]),
            onChange: _propTypes2["default"].func,
            format: _propTypes2["default"].string,
            inputProps: _propTypes2["default"].object,
            inputFormat: _propTypes2["default"].string,
            defaultText: _propTypes2["default"].string,
            mode: _propTypes2["default"].oneOf([_ConstantsJs2["default"].MODE_DATE, _ConstantsJs2["default"].MODE_MONTH, _ConstantsJs2["default"].MODE_DATETIME, _ConstantsJs2["default"].MODE_TIME]),
            minDate: _propTypes2["default"].object,
            maxDate: _propTypes2["default"].object,
            direction: _propTypes2["default"].string,
            pickerAlign: _propTypes2["default"].string,
            showToday: _propTypes2["default"].bool,
            viewMode: _propTypes2["default"].string,
            size: _propTypes2["default"].oneOf([_ConstantsJs2["default"].SIZE_SMALL, _ConstantsJs2["default"].SIZE_MEDIUM, _ConstantsJs2["default"].SIZE_LARGE]),
            daysOfWeekDisabled: _propTypes2["default"].arrayOf(_propTypes2["default"].number)
        },
        enumerable: true
    }]);

    return DateTimeField;
})(_react.Component);

exports["default"] = DateTimeField;
module.exports = exports["default"];
/*<div className={"input-group date " + this.size()} ref="datetimepicker">
<input className="form-control" onChange={this.onChange} type="text" value={this.state.inputValue} {...this.props.inputProps}/>
<span className="input-group-addon" onBlur={this.onBlur} onClick={this.onClick} ref="dtpbutton">
<Icon name={this.state.buttonIcon} />
</span>
</div>*/