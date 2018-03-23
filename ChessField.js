"use strict";

var ChessField = function ChessField(props) {
    return React.createElement(
        "div",
        { className: "{this.props.color}" },
        "chess field"
    );
};