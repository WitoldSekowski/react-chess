'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ChessBoard = require('ChessBoard.jsx');

var _ChessBoard2 = _interopRequireDefault(_ChessBoard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var contentNode = document.getElementById('contents');

var ChessGame = function (_React$Component) {
    _inherits(ChessGame, _React$Component);

    function ChessGame() {
        _classCallCheck(this, ChessGame);

        return _possibleConstructorReturn(this, (ChessGame.__proto__ || Object.getPrototypeOf(ChessGame)).apply(this, arguments));
    }

    _createClass(ChessGame, [{
        key: 'render',
        value: function render() {
            return React.createElement(_ChessBoard2.default, null);
        }
    }]);

    return ChessGame;
}(React.Component);

ReactDOM.render(React.createElement(ChessGame, null), contentNode);