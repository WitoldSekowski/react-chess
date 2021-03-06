"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ChessField = require("ChessField.jsx");

var _ChessField2 = _interopRequireDefault(_ChessField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import ChessPiece from './ChessPiece'

var ChessFields = [{
    row: 1,
    column: 1,
    color: "black",
    occupied: false,
    active: false,
    occupyingPiece: none
}, {
    row: 1,
    column: 2,
    color: "white",
    occupied: false,
    active: false,
    occupyingPiece: none
}, {
    row: 1,
    column: 3,
    color: "black",
    occupied: false,
    active: false,
    occupyingPiece: none
}, {
    row: 1,
    column: 4,
    color: "white",
    occupied: false,
    active: false,
    occupyingPiece: none
}, {
    row: 1,
    column: 5,
    color: "black",
    occupied: false,
    active: false,
    occupyingPiece: none
}, {
    row: 1,
    column: 6,
    color: "white",
    occupied: false,
    active: false,
    occupyingPiece: none
}, {
    row: 1,
    column: 7,
    color: "black",
    occupied: false,
    active: false,
    occupyingPiece: none
}, {
    row: 1,
    column: 8,
    color: "white",
    occupied: false,
    active: false,
    occupyingPiece: none
}];

var ChessBoard = function (_React$Component) {
    _inherits(ChessBoard, _React$Component);

    function ChessBoard() {
        _classCallCheck(this, ChessBoard);

        var _this = _possibleConstructorReturn(this, (ChessBoard.__proto__ || Object.getPrototypeOf(ChessBoard)).call(this));

        _this.state = {
            fields: []
        };
        return _this;
    }

    _createClass(ChessBoard, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.setState({ fields: chessFields });
        }
    }, {
        key: "render",
        value: function render() {
            var chessFields = fields.map(function (field) {
                return React.createElement(_ChessField2.default, { field: field, color: "black" });
            });
            return React.createElement(
                "div",
                null,
                chessFields
            );
        }
    }]);

    return ChessBoard;
}(React.Component);