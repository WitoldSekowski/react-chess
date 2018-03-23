'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_express2.default.static('static'));

var chessField = [];

var chessPiece = [];

app.listen(3067, function () {
    console.log('server started on port 3067');
});