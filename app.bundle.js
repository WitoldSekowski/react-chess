/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ChessBoard = __webpack_require__(1);

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
            return React.createElement(
                'div',
                { className: 'chess-board-wrapper' },
                React.createElement(_ChessBoard2.default, null)
            );
        }
    }]);

    return ChessGame;
}(React.Component);

ReactDOM.render(React.createElement(ChessGame, null), contentNode);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ChessField = __webpack_require__(2);

var _ChessField2 = _interopRequireDefault(_ChessField);

var _PlayerTurn = __webpack_require__(4);

var _PlayerTurn2 = _interopRequireDefault(_PlayerTurn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChessBoard = function (_React$Component) {
    _inherits(ChessBoard, _React$Component);

    function ChessBoard() {
        _classCallCheck(this, ChessBoard);

        var _this = _possibleConstructorReturn(this, (ChessBoard.__proto__ || Object.getPrototypeOf(ChessBoard)).call(this));

        _this.state = {
            fields: [],
            playerTurn: ""
        };

        _this.initializeChessPieces = _this.initializeChessPieces.bind(_this);
        _this.iterateTeam = _this.iterateTeam.bind(_this);
        _this.moveSelected = _this.moveSelected.bind(_this);
        _this.movePattern = _this.movePattern.bind(_this);
        _this.displayChessFields = _this.displayChessFields.bind(_this);
        // this.checkmate = this.checkmate.bind(this)
        return _this;
    }

    _createClass(ChessBoard, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.setState({ fields: chessFields });
        }
    }, {
        key: 'initializeChessPieces',
        value: function initializeChessPieces() {
            this.setState({
                fields: this.iterateTeam(),
                playerTurn: "white"
            });
        }
    }, {
        key: 'iterateTeam',
        value: function iterateTeam() {
            var fields = this.state.fields.slice();
            var changedFields = [];

            fields.map(function (field) {
                field.occupyingPiece = "none";
                field.active = false;
                field.team = "none";
                if (field.row == 7) {
                    field.occupyingPiece = "pawn-white";
                    field.team = "white";
                }
                if (field.row == 8) {
                    switch (field.column) {
                        case 1:
                            field.occupyingPiece = "tower-white";
                            field.team = "white";
                            break;
                        case 2:
                            field.occupyingPiece = "horse-white";
                            field.team = "white";
                            break;
                        case 3:
                            field.occupyingPiece = "bishop-white";
                            field.team = "white";
                            break;
                        case 4:
                            field.occupyingPiece = "king-white";
                            field.team = "white";
                            break;
                        case 5:
                            field.occupyingPiece = "queen-white";
                            field.team = "white";

                            break;
                        case 6:
                            field.occupyingPiece = "bishop-white";
                            field.team = "white";
                            break;
                        case 7:
                            field.occupyingPiece = "horse-white";
                            field.team = "white";
                            break;
                        case 8:
                            field.occupyingPiece = "tower-white";
                            field.team = "white";
                            break;
                    }
                }
                if (field.row == 1) {
                    switch (field.column) {
                        case 1:
                            field.occupyingPiece = "tower-black";
                            field.team = "black";
                            break;
                        case 2:
                            field.occupyingPiece = "horse-black";
                            field.team = "black";
                            break;
                        case 3:
                            field.occupyingPiece = "bishop-black";
                            field.team = "black";
                            break;
                        case 4:
                            field.occupyingPiece = "king-black";
                            field.team = "black";
                            break;
                        case 5:
                            field.occupyingPiece = "queen-black";
                            field.team = "black";
                            break;
                        case 6:
                            field.occupyingPiece = "bishop-black";
                            field.team = "black";
                            break;
                        case 7:
                            field.occupyingPiece = "horse-black";
                            field.team = "black";

                            break;
                        case 8:
                            field.occupyingPiece = "tower-black";
                            field.team = "black";
                            break;
                    }
                }
                if (field.row == 2) {
                    field.occupyingPiece = "pawn-black";
                    field.team = "black";
                }
                changedFields.push(field);
            });

            return changedFields;
        }
    }, {
        key: 'checkmate',
        value: function checkmate(theField, activeField) {
            // var temporaryFields = this.state.fields.slice()
            // const pieces = ["queen-black"]
            // temporaryFields = temporaryFields.map((y) => {
            //     if (y.column == theField.column && y.row == theField.row) {
            //         return y.team = "white"
            //     }
            //     else {
            //         return y
            //     }
            // })

            // for (var i = 0; i < pieces.length; i++) {
            //     var szach = this.movePattern(temporaryFields.find((x) => x.column == theField.column && x.row == theField.row && x.occupyingPiece == "king-white"), temporaryFields.find((x) => x.occupyingPiece == pieces[i]))
            //     console.log(szach)
            // }

            // var keks = this.movePattern(theField, activeField, temporaryFields)

            // if (keks == false) {
            //     console.log('moze ruszac')
            //     return false
            // } else {
            //     console.log('jestes pod szachem')
            //     return true
            // }


        }
    }, {
        key: 'movePattern',
        value: function movePattern(theField, activeField, stateFields) {

            if (activeField.occupyingPiece == "bishop-white" || activeField.occupyingPiece == "bishop-black") {
                if (theField.column - activeField.column == theField.row - activeField.row || theField.column - activeField.column == -(theField.row - activeField.row)) {

                    if (activeField.column < theField.column) {
                        if (activeField.row > theField.row) {
                            var plow = stateFields.find(function (x) {
                                return x.column > activeField.column && x.row > theField.row && x.column - activeField.column == activeField.row - x.row && x.team != "none";
                            });
                        } else if (activeField.row < theField.row) {
                            var plow = stateFields.find(function (x) {
                                return x.column > activeField.column && x.row < theField.row && x.column - activeField.column == x.row - activeField.row && x.team != "none";
                            });
                        }
                    } else if (activeField.column > theField.column) {
                        if (activeField.row > theField.row) {
                            var plow = stateFields.find(function (x) {
                                return x.column < activeField.column && x.row > theField.row && activeField.column - x.column == activeField.row - x.row && x.team != "none";
                            });
                        } else if (activeField.row < theField.row) {
                            var plow = stateFields.find(function (x) {
                                return x.column < activeField.column && x.row < theField.row && activeField.column - x.column == x.row - activeField.row && x.team != "none";
                            });
                        }
                    }

                    if (plow != undefined) {
                        return false;
                    } else {
                        return true;
                    }
                }
            }

            if (activeField.occupyingPiece == "horse-white" || activeField.occupyingPiece == "horse-black") {
                if (theField.row == activeField.row - 2 && theField.column == activeField.column - 1 || theField.row == activeField.row - 2 && theField.column == activeField.column + 1 || theField.row == activeField.row + 2 && theField.column == activeField.column + 1 || theField.row == activeField.row + 2 && theField.column == activeField.column - 1 || theField.row == activeField.row - 1 && theField.column == activeField.column - 2 || theField.row == activeField.row - 1 && theField.column == activeField.column + 2 || theField.row == activeField.row + 1 && theField.column == activeField.column + 2 || theField.row == activeField.row + 1 && theField.column == activeField.column - 2) {
                    return true;
                }
            }

            if (activeField.occupyingPiece == "tower-white" || activeField.occupyingPiece == "tower-black") {
                if (theField.column == activeField.column || theField.row == activeField.row) {
                    if (activeField.column > theField.column) {
                        var plow = stateFields.find(function (x) {
                            return x.column > theField.column && x.column < activeField.column && x.row == activeField.row && x.team != "none";
                        });
                    }
                    if (activeField.column < theField.column) {
                        var plow = stateFields.find(function (x) {
                            return x.column < theField.column && x.column > activeField.column && x.row == activeField.row && x.team != "none";
                        });
                    }
                    if (activeField.row > theField.row) {
                        var plow = stateFields.find(function (x) {
                            return x.row > theField.row && x.row < activeField.row && x.column == activeField.column && x.team != "none";
                        });
                    }
                    if (activeField.row < theField.row) {
                        var plow = stateFields.find(function (x) {
                            return x.row < theField.row && x.row > activeField.row && x.column == activeField.column && x.team != "none";
                        });
                    }
                    if (plow != undefined) {
                        return false;
                    } else {
                        return true;
                    }
                }
            }

            if (activeField.occupyingPiece == "king-white" || activeField.occupyingPiece == "king-black") {
                if (theField.column == activeField.column + 1 && theField.row == activeField.row + 1 || theField.column == activeField.column + 1 && theField.row == activeField.row - 1 || theField.column == activeField.column - 1 && theField.row == activeField.row + 1 || theField.column == activeField.column - 1 && theField.row == activeField.row - 1 || (theField.column == activeField.column || theField.row == activeField.row) && (theField.row == activeField.row - 1 || theField.row == activeField.row + 1 || theField.column == activeField.column + 1 || theField.column == activeField.column - 1)) {
                    return true;
                }
            }

            if (activeField.occupyingPiece == "queen-white" || activeField.occupyingPiece == "queen-black") {
                if (theField.column - activeField.column == theField.row - activeField.row || theField.column - activeField.column == -(theField.row - activeField.row)) {

                    if (activeField.column < theField.column) {
                        if (activeField.row > theField.row) {
                            var plow = stateFields.find(function (x) {
                                return x.column > activeField.column && x.row > theField.row && x.column - activeField.column == activeField.row - x.row && x.team != "none";
                            });
                        } else if (activeField.row < theField.row) {
                            var plow = stateFields.find(function (x) {
                                return x.column > activeField.column && x.row < theField.row && x.column - activeField.column == x.row - activeField.row && x.team != "none";
                            });
                        }
                    } else if (activeField.column > theField.column) {
                        if (activeField.row > theField.row) {
                            var plow = stateFields.find(function (x) {
                                return x.column < activeField.column && x.row > theField.row && activeField.column - x.column == activeField.row - x.row && x.team != "none";
                            });
                        } else if (activeField.row < theField.row) {
                            var plow = stateFields.find(function (x) {
                                return x.column < activeField.column && x.row < theField.row && activeField.column - x.column == x.row - activeField.row && x.team != "none";
                            });
                        }
                    }
                    if (plow != undefined) {
                        return false;
                    } else {
                        return true;
                    }
                }

                if (theField.column == activeField.column || theField.row == activeField.row) {
                    if (activeField.column > theField.column) {
                        var plow = stateFields.find(function (x) {
                            return x.column > theField.column && x.column < activeField.column && x.row == activeField.row && x.team != "none";
                        });
                    }
                    if (activeField.column < theField.column) {
                        var plow = stateFields.find(function (x) {
                            return x.column < theField.column && x.column > activeField.column && x.row == activeField.row && x.team != "none";
                        });
                    }
                    if (activeField.row > theField.row) {
                        var plow = stateFields.find(function (x) {
                            return x.row > theField.row && x.row < activeField.row && x.column == activeField.column && x.team != "none";
                        });
                    }
                    if (activeField.row < theField.row) {
                        var plow = stateFields.find(function (x) {
                            return x.row < theField.row && x.row > activeField.row && x.column == activeField.column && x.team != "none";
                        });
                    }
                    if (plow != undefined) {
                        return false;
                    } else {
                        return true;
                    }
                }
            }

            if (activeField.occupyingPiece == "pawn-white") {
                if (theField.team == "black") {
                    if (activeField.column - theField.column == activeField.row - theField.row || theField.column - activeField.column == activeField.row - theField.row) {
                        return true;
                    }
                } else {
                    if (activeField.row == 7) {
                        if (theField.row == activeField.row - 1 && theField.column == activeField.column || theField.row == activeField.row - 2 && theField.column == activeField.column) {
                            return true;
                        }
                    } else {
                        if (theField.row == activeField.row - 1 && theField.column == activeField.column) {
                            return true;
                        }
                    }
                }
            }

            if (activeField.occupyingPiece == "pawn-black") {
                if (theField.team == "white") {
                    if (activeField.column - theField.column == theField.row - activeField.row || activeField.column - theField.column == activeField.row - theField.row) {
                        return true;
                    }
                } else {

                    if (activeField.row == 2) {
                        if (theField.row - 1 == activeField.row && theField.column == activeField.column || theField.row - 2 == activeField.row && theField.column == activeField.column) {
                            return true;
                        }
                    } else {
                        if (theField.row - 1 == activeField.row && theField.column == activeField.column) {
                            return true;
                        }
                    }
                }
            }
        }
    }, {
        key: 'moveSelected',
        value: function moveSelected(fieldSelected) {
            var fields = this.state.fields.slice();
            var field = fields.findIndex(function (x) {
                return x.column == fieldSelected.column && x.row == fieldSelected.row;
            });

            var theField = fields[field];
            var activeField = {};
            activeField = fields.find(function (x) {
                return x.active == true;
            });
            if (activeField == undefined) {
                activeField = {};
                activeField.team = "none";
            }

            // selecting chess piece
            if (theField.occupyingPiece != "none" && theField.active == false) {
                fields.forEach(function (elem) {
                    elem.active = false;
                });
                if (theField.team == this.state.playerTurn) {
                    theField.active = true;
                }
            }
            // breaking pawns
            if (theField.team == "black" && activeField.team == "white" || theField.team == "white" && activeField.team == "black") {
                if (this.movePattern(theField, activeField, this.state.fields) == true) {
                    theField.team = activeField.team;
                    theField.occupyingPiece = activeField.occupyingPiece;
                    fields.forEach(function (elem) {
                        elem.active = false;
                    });
                    // set previously selected field with chess piece to none, as it doesnt have any chess piece now
                    activeField.occupyingPiece = "none";
                    activeField.team = "none";
                    // set new field with a chess piece to active
                    theField.active = true;
                    var changePlayer = this.state.playerTurn == "white" ? "black" : "white";
                    this.setState({ playerTurn: changePlayer });
                    fields.forEach(function (elem) {
                        elem.active = false;
                    });
                }
            } else if (theField.team != activeField.team) {
                //find active field in array

                // set clicked empty field to have chess piece that was selected previously


                if (this.movePattern(theField, activeField, this.state.fields) == true) {

                    // if () {d

                    // } else if (theField.team == "white" && activeField == "black") {
                    //     theField.team == "black"
                    //     theField.occupyingPiece == "none"
                    // }

                    theField.occupyingPiece = activeField.occupyingPiece;
                    // set all fields active to false to deselect fields
                    var activeFieldTeam = activeField.team;

                    activeField.team = "none";
                    fields.forEach(function (elem) {
                        elem.active = false;
                    });
                    // set previously selected field with chess piece to none, as it doesnt have any chess piece now
                    activeField.occupyingPiece = "none";

                    // set new field with a chess piece to active

                    theField.team = activeFieldTeam;

                    theField.active = true;

                    var changePlayer = this.state.playerTurn == "white" ? "black" : "white";
                    this.setState({ playerTurn: changePlayer });
                    fields.forEach(function (elem) {
                        elem.active = false;
                    });
                }
            }
            this.setState({ fields: fields });
        }
    }, {
        key: 'displayChessFields',
        value: function displayChessFields() {
            console.log(JSON.stringify(this.state.fields));
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var chessFields = this.state.fields.map(function (field, key) {
                var color = "normal";
                if (field.active == true) {
                    color = "green";
                }

                return React.createElement(_ChessField2.default, { fieldColor: color, field: field, key: key, selected: _this2.moveSelected });
            });

            return React.createElement(
                'div',
                null,
                chessFields,
                React.createElement(
                    'button',
                    { onClick: this.initializeChessPieces },
                    'Start the game '
                ),
                React.createElement(
                    'button',
                    { onClick: this.displayChessFields },
                    'display '
                ),
                React.createElement(
                    'div',
                    null,
                    React.createElement(_PlayerTurn2.default, { playerTurn: this.state.playerTurn })
                )
            );
        }
    }]);

    return ChessBoard;
}(React.Component);

exports.default = ChessBoard;


var chessFields = [{
    row: 1,
    column: 1,
    occupied: false,
    active: false,
    occupyingPiece: "none",
    team: "black"
}, {
    row: 1,
    column: 2,
    occupied: false,
    active: false,
    occupyingPiece: "none",
    team: "black"
}, {
    row: 1,
    column: 3,
    occupied: false,
    active: false,
    occupyingPiece: "none",
    team: "black"
}, {
    row: 1,
    column: 4,
    occupied: false,
    active: false,
    occupyingPiece: "none",
    team: "black"
}, {
    row: 1,
    column: 5,
    occupied: false,
    active: false,
    occupyingPiece: "none",
    team: "black"
}, {
    row: 1,
    column: 6,
    occupied: false,
    active: false,
    occupyingPiece: "none",
    team: "black"
}, {
    row: 1,
    column: 7,
    occupied: false,
    active: false,
    occupyingPiece: "none",
    team: "black"
}, {
    row: 1,
    column: 8,
    occupied: false,
    active: false,
    occupyingPiece: "none",
    team: "black"
}, {
    row: 2,
    column: 1,
    occupied: false,
    active: false,
    occupyingPiece: "none",
    team: "black"
}, {
    row: 2,
    column: 2,
    occupied: false,
    active: false,
    occupyingPiece: "none",
    team: "black"
}, {
    row: 2,
    column: 3,
    occupied: false,
    active: false,
    occupyingPiece: "none",
    team: "black"
}, {
    row: 2,
    column: 4,
    occupied: false,
    active: false,
    occupyingPiece: "none",
    team: "black"
}, {
    row: 2,
    column: 5,
    occupied: false,
    active: false,
    occupyingPiece: "none",
    team: "black"
}, {
    row: 2,
    column: 6,
    occupied: false,
    active: false,
    occupyingPiece: "none",
    team: "black"
}, {
    row: 2,
    column: 7,
    occupied: false,
    active: false,
    occupyingPiece: "none",
    team: "black"
}, {
    row: 2,
    column: 8,
    occupied: false,
    active: false,
    occupyingPiece: "none",
    team: "black"
}, {
    row: 3,
    column: 1,
    occupied: false,
    active: false,
    occupyingPiece: "none",
    team: "none"
}, {
    row: 3,
    column: 2,
    occupied: false,
    active: false,
    occupyingPiece: "none",
    team: "none"
}, {
    row: 3,
    column: 3,
    occupied: false,
    active: false,
    occupyingPiece: "none",
    team: "none"
}, {
    row: 3,
    column: 4,
    occupied: false,
    active: false,
    occupyingPiece: "none",
    team: "none"
}, {
    row: 3,
    column: 5,
    occupied: false,
    active: false,
    occupyingPiece: "none",
    team: "none"
}, {
    row: 3,
    column: 6,
    occupied: false,
    active: false,
    occupyingPiece: "none",
    team: "none"
}, {
    row: 3,
    column: 7,
    occupied: false,
    active: false,
    occupyingPiece: "none",
    team: "none"
}, {
    row: 3,
    column: 8,
    occupied: false,
    active: false,
    occupyingPiece: "none",
    team: "none"
}, {
    row: 4,
    column: 1,
    occupied: false,
    active: false,
    occupyingPiece: "none",
    team: "none"
}, {
    row: 4,
    column: 2,
    occupied: false,
    active: false,
    occupyingPiece: "none",
    team: "none"
}, {
    row: 4,
    column: 3,
    occupied: false,
    active: false,
    occupyingPiece: "none",
    team: "none"
}, {
    row: 4,
    column: 4,
    occupied: false,
    active: false,
    occupyingPiece: "none",
    team: "none"
}, {
    row: 4,
    column: 5,
    occupied: false,
    active: false,
    occupyingPiece: "none",
    team: "none"
}, {
    row: 4,
    column: 6,
    occupied: false,
    active: false,
    occupyingPiece: "none",
    team: "none"
}, {
    row: 4,
    column: 7,
    occupied: false,
    active: false,
    occupyingPiece: "none",
    team: "none"
}, {
    row: 4,
    column: 8,
    occupied: false,
    active: false,
    occupyingPiece: "none",
    team: "none"
}, {
    row: 5,
    column: 1,
    occupied: false,
    active: false,
    occupyingPiece: "none",
    team: "none"
}, {
    row: 5,
    column: 2,
    occupied: false,
    active: false,
    occupyingPiece: "none",
    team: "none"
}, {
    row: 5,
    column: 3,
    occupied: false,
    active: false,
    occupyingPiece: "none",
    team: "none"
}, {
    row: 5,
    column: 4,
    occupied: false,
    active: false,
    occupyingPiece: "none",
    team: "none"
}, {
    row: 5,
    column: 5,
    occupied: false,
    active: false,
    occupyingPiece: "none",
    team: "none"
}, {
    row: 5,
    column: 6,
    occupied: false,
    active: false,
    occupyingPiece: "none",
    team: "none"
}, {
    row: 5,
    column: 7,
    occupied: false,
    active: false,
    occupyingPiece: "none",
    team: "none"
}, {
    row: 5,
    column: 8,
    occupied: false,
    active: false,
    occupyingPiece: "none",
    team: "none"
}, {
    row: 6,
    column: 1,
    occupied: false,
    active: false,
    occupyingPiece: "none",
    team: "none"
}, {
    row: 6,
    column: 2,
    occupied: false,
    active: false,
    occupyingPiece: "none",
    team: "none"
}, {
    row: 6,
    column: 3,
    occupied: false,
    active: false,
    occupyingPiece: "none",
    team: "none"
}, {
    row: 6,
    column: 4,
    occupied: false,
    active: false,
    occupyingPiece: "none",
    team: "none"
}, {
    row: 6,
    column: 5,
    occupied: false,
    active: false,
    occupyingPiece: "none",
    team: "none"
}, {
    row: 6,
    column: 6,
    occupied: false,
    active: false,
    occupyingPiece: "none",
    team: "none"
}, {
    row: 6,
    column: 7,
    occupied: false,
    active: false,
    occupyingPiece: "none",
    team: "none"
}, {
    row: 6,
    column: 8,
    occupied: false,
    active: false,
    occupyingPiece: "none",
    team: "none"
}, {
    row: 7,
    column: 1,
    occupied: false,
    active: false,
    occupyingPiece: "none",
    team: "white"
}, {
    row: 7,
    column: 2,
    occupied: false,
    active: false,
    occupyingPiece: "none",
    team: "white"
}, {
    row: 7,
    column: 3,
    occupied: false,
    active: false,
    occupyingPiece: "none",
    team: "white"
}, {
    row: 7,
    column: 4,
    occupied: false,
    active: false,
    occupyingPiece: "none",
    team: "white"
}, {
    row: 7,
    column: 5,
    occupied: false,
    active: false,
    occupyingPiece: "none",
    team: "white"
}, {
    row: 7,
    column: 6,
    occupied: false,
    active: false,
    occupyingPiece: "none",
    team: "white"
}, {
    row: 7,
    column: 7,
    occupied: false,
    active: false,
    occupyingPiece: "none",
    team: "white"
}, {
    row: 7,
    column: 8,
    occupied: false,
    active: false,
    occupyingPiece: "none",
    team: "white"
}, {
    row: 8,
    column: 1,
    occupied: false,
    active: false,
    occupyingPiece: "none",
    team: "white"
}, {
    row: 8,
    column: 2,
    occupied: false,
    active: false,
    occupyingPiece: "none",
    team: "white"
}, {
    row: 8,
    column: 3,
    occupied: false,
    active: false,
    occupyingPiece: "none",
    team: "white"
}, {
    row: 8,
    column: 4,
    occupied: false,
    active: false,
    occupyingPiece: "none",
    team: "white"
}, {
    row: 8,
    column: 5,
    occupied: false,
    active: false,
    occupyingPiece: "none",
    team: "white"
}, {
    row: 8,
    column: 6,
    occupied: false,
    active: false,
    occupyingPiece: "none",
    team: "white"
}, {
    row: 8,
    column: 7,
    occupied: false,
    active: false,
    occupyingPiece: "none",
    team: "white"
}, {
    row: 8,
    column: 8,
    occupied: false,
    active: false,
    occupyingPiece: "none",
    team: "white"
}];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ChessPiece = __webpack_require__(3);

var _ChessPiece2 = _interopRequireDefault(_ChessPiece);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChessField = function (_React$Component) {
    _inherits(ChessField, _React$Component);

    function ChessField(props) {
        _classCallCheck(this, ChessField);

        var _this = _possibleConstructorReturn(this, (ChessField.__proto__ || Object.getPrototypeOf(ChessField)).call(this));

        _this.fieldSelected = _this.fieldSelected.bind(_this);
        return _this;
    }

    _createClass(ChessField, [{
        key: 'fieldSelected',
        value: function fieldSelected() {
            this.props.selected(this.props.field);
        }
    }, {
        key: 'render',
        value: function render() {
            var cssClass = '';
            if (this.props.field.row % 2 != 0 && this.props.field.column % 2 != 0) {
                cssClass = 'black';
            } else if (this.props.field.row % 2 != 0 && this.props.field.column % 2 == 0) {
                cssClass = 'white';
            } else if (this.props.field.row % 2 == 0 && this.props.field.column % 2 != 0) {
                cssClass = 'white';
            } else if (this.props.field.row % 2 == 0 && this.props.field.column % 2 == 0) {
                cssClass = 'black';
            }
            return React.createElement(
                'div',
                { className: 'chess-field-overlay ' + this.props.fieldColor },
                React.createElement(
                    'div',
                    { className: 'chess-field ' + cssClass, onClick: this.fieldSelected },
                    React.createElement(_ChessPiece2.default, { field: this.props.field })
                )
            );
        }
    }]);

    return ChessField;
}(React.Component);

exports.default = ChessField;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var chessPiece = [{
    type: "pawn-white",
    imagePath: "images/pawn-white.png"
}, {
    type: "pawn-black",
    imagePath: "images/pawn-black.png"
}, {
    type: "tower-white",
    imagePath: "images/tower-white.png"
}, {
    type: "tower-black",
    imagePath: "images/tower-black.png"
}, {
    type: "horse-white",
    imagePath: "images/horse-white.png"
}, {
    type: "horse-black",
    imagePath: "images/horse-black.png"
}, {
    type: "bishop-white",
    imagePath: "images/bishop-white.png"
}, {
    type: "bishop-black",
    imagePath: "images/bishop-black.png"
}, {
    type: "queen-white",
    imagePath: "images/queen-white.png"
}, {
    type: "queen-black",
    imagePath: "images/queen-black.png"
}, {
    type: "king-white",
    imagePath: "images/king-white.png"
}, {
    type: "king-black",
    imagePath: "images/king-black.png"
}];

function ChessPiece(props) {
    var blobs = chessPiece.find(function (x) {
        return x.type == props.field.occupyingPiece;
    });
    var image = blobs == undefined ? ' ' : React.createElement("img", { src: blobs.imagePath });
    return React.createElement(
        "span",
        null,
        image
    );
}

exports.default = ChessPiece;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});


var PlayerTurn = function PlayerTurn(props) {
    return React.createElement(
        "h1",
        null,
        props.playerTurn == "white" ? "White pieces turn" : "",
        props.playerTurn == "black" ? "Black pieces turn" : ""
    );
};

exports.default = PlayerTurn;

/***/ })
/******/ ]);