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

var _ConstantsJs = require("./Constants.js");

var _ConstantsJs2 = _interopRequireDefault(_ConstantsJs);

var DateTimePickerHours = (function (_Component) {
  _inherits(DateTimePickerHours, _Component);

  function DateTimePickerHours() {
    var _this = this;

    _classCallCheck(this, DateTimePickerHours);

    _get(Object.getPrototypeOf(DateTimePickerHours.prototype), "constructor", this).apply(this, arguments);

    this.renderSwitchButton = function () {
      return _this.props.mode === _ConstantsJs2["default"].MODE_TIME ? _react2["default"].createElement(
        "ul",
        { className: "list-unstyled" },
        _react2["default"].createElement(
          "li",
          null,
          _react2["default"].createElement(
            "span",
            { className: "btn picker-switch", style: { width: "100%" }, onClick: _this.props.onSwitch },
            _react2["default"].createElement(_reactFa2["default"], { name: "clock-o" })
          )
        )
      ) : null;
    };
  }

  _createClass(DateTimePickerHours, [{
    key: "render",
    value: function render() {
      return _react2["default"].createElement(
        "div",
        { className: "timepicker-hours", "data-action": "selectHour", style: { display: "block" } },
        this.renderSwitchButton(),
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
                { className: "hour", onClick: this.props.setSelectedHour },
                "01"
              ),
              _react2["default"].createElement(
                "td",
                { className: "hour", onClick: this.props.setSelectedHour },
                "02"
              ),
              _react2["default"].createElement(
                "td",
                { className: "hour", onClick: this.props.setSelectedHour },
                "03"
              ),
              _react2["default"].createElement(
                "td",
                { className: "hour", onClick: this.props.setSelectedHour },
                "04"
              )
            ),
            _react2["default"].createElement(
              "tr",
              null,
              _react2["default"].createElement(
                "td",
                { className: "hour", onClick: this.props.setSelectedHour },
                "05"
              ),
              _react2["default"].createElement(
                "td",
                { className: "hour", onClick: this.props.setSelectedHour },
                "06"
              ),
              _react2["default"].createElement(
                "td",
                { className: "hour", onClick: this.props.setSelectedHour },
                "07"
              ),
              _react2["default"].createElement(
                "td",
                { className: "hour", onClick: this.props.setSelectedHour },
                "08"
              )
            ),
            _react2["default"].createElement(
              "tr",
              null,
              _react2["default"].createElement(
                "td",
                { className: "hour", onClick: this.props.setSelectedHour },
                "09"
              ),
              _react2["default"].createElement(
                "td",
                { className: "hour", onClick: this.props.setSelectedHour },
                "10"
              ),
              _react2["default"].createElement(
                "td",
                { className: "hour", onClick: this.props.setSelectedHour },
                "11"
              ),
              _react2["default"].createElement(
                "td",
                { className: "hour", onClick: this.props.setSelectedHour },
                "12"
              )
            ),
            _react2["default"].createElement(
              "tr",
              null,
              _react2["default"].createElement(
                "td",
                { className: "hour", onClick: this.props.setSelectedHour },
                "13"
              ),
              _react2["default"].createElement(
                "td",
                { className: "hour", onClick: this.props.setSelectedHour },
                "14"
              ),
              _react2["default"].createElement(
                "td",
                { className: "hour", onClick: this.props.setSelectedHour },
                "15"
              ),
              _react2["default"].createElement(
                "td",
                { className: "hour", onClick: this.props.setSelectedHour },
                "16"
              )
            ),
            _react2["default"].createElement(
              "tr",
              null,
              _react2["default"].createElement(
                "td",
                { className: "hour", onClick: this.props.setSelectedHour },
                "17"
              ),
              _react2["default"].createElement(
                "td",
                { className: "hour", onClick: this.props.setSelectedHour },
                "18"
              ),
              _react2["default"].createElement(
                "td",
                { className: "hour", onClick: this.props.setSelectedHour },
                "19"
              ),
              _react2["default"].createElement(
                "td",
                { className: "hour", onClick: this.props.setSelectedHour },
                "20"
              )
            ),
            _react2["default"].createElement(
              "tr",
              null,
              _react2["default"].createElement(
                "td",
                { className: "hour", onClick: this.props.setSelectedHour },
                "21"
              ),
              _react2["default"].createElement(
                "td",
                { className: "hour", onClick: this.props.setSelectedHour },
                "22"
              ),
              _react2["default"].createElement(
                "td",
                { className: "hour", onClick: this.props.setSelectedHour },
                "23"
              ),
              _react2["default"].createElement(
                "td",
                { className: "hour", onClick: this.props.setSelectedHour },
                "24"
              )
            )
          )
        )
      );
    }
  }], [{
    key: "propTypes",
    value: {
      setSelectedHour: _propTypes2["default"].func.isRequired,
      onSwitch: _propTypes2["default"].func.isRequired,
      mode: _propTypes2["default"].string.isRequired
    },
    enumerable: true
  }]);

  return DateTimePickerHours;
})(_react.Component);

exports["default"] = DateTimePickerHours;
module.exports = exports["default"];