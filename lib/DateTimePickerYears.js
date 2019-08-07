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

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var DateTimePickerYears = (function (_Component) {
  _inherits(DateTimePickerYears, _Component);

  function DateTimePickerYears() {
    var _this = this;

    _classCallCheck(this, DateTimePickerYears);

    _get(Object.getPrototypeOf(DateTimePickerYears.prototype), "constructor", this).apply(this, arguments);

    this.renderYears = function () {
      var classes, i, year, years;
      years = [];
      year = parseInt(_this.props.viewDate.year() / 10, 10) * 10;
      year--;
      i = -1;
      while (i < 11) {
        classes = {
          year: true,
          old: i === -1 | i === 10,
          active: _this.props.selectedDate.year() === year
        };
        years.push(_react2["default"].createElement(
          "span",
          { key: year, className: (0, _classnames2["default"])(classes), onClick: _this.props.setViewYear },
          year
        ));
        year++;
        i++;
      }
      return years;
    };
  }

  _createClass(DateTimePickerYears, [{
    key: "render",
    value: function render() {
      var year;
      year = parseInt(this.props.viewDate.year() / 10, 10) * 10;
      return _react2["default"].createElement(
        "div",
        { className: "datepicker-years", style: { display: "block" } },
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
                { className: "prev", onClick: this.props.subtractDecade },
                "‹"
              ),
              _react2["default"].createElement(
                "th",
                { className: "switch", colSpan: "5" },
                year,
                " - ",
                year + 9
              ),
              _react2["default"].createElement(
                "th",
                { className: "next", onClick: this.props.addDecade },
                "›"
              )
            )
          ),
          _react2["default"].createElement(
            "tbody",
            null,
            _react2["default"].createElement(
              "tr",
              null,
              _react2["default"].createElement(
                "td",
                { colSpan: "7" },
                this.renderYears()
              )
            )
          )
        )
      );
    }
  }], [{
    key: "propTypes",
    value: {
      subtractDecade: _propTypes2["default"].func.isRequired,
      addDecade: _propTypes2["default"].func.isRequired,
      viewDate: _propTypes2["default"].object.isRequired,
      selectedDate: _propTypes2["default"].object.isRequired,
      setViewYear: _propTypes2["default"].func.isRequired
    },
    enumerable: true
  }]);

  return DateTimePickerYears;
})(_react.Component);

exports["default"] = DateTimePickerYears;
module.exports = exports["default"];