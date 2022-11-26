import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./app.css";
import { Chucky } from "./Chucky";
import { dog } from "./test";
import Button from "../hooks/Button";
var App = function() {
    dog();
    return /*#__PURE__*/ _jsxs("div", {
        className: "root",
        children: [
            /*#__PURE__*/ _jsx("h1", {
                children: "this is chucky"
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "text center top",
                children: "chucky can spin"
            }),
            /*#__PURE__*/ _jsx(Chucky, {}),
            /*#__PURE__*/ _jsx("br", {}),
            /*#__PURE__*/ _jsx("h1", {
                children: "and this is scungus:)"
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: "text center top",
                children: [
                    "you can click on scungus:)",
                    /*#__PURE__*/ _jsx("br", {}),
                    "doing so will increase your scungus:)",
                    /*#__PURE__*/ _jsx("br", {}),
                    "try it~!",
                    /*#__PURE__*/ _jsx("br", {}),
                    /*#__PURE__*/ _jsx(Button, {}),
                    /*#__PURE__*/ _jsx("img", {
                        className: "scungus",
                        "aria-label": "scungus:)",
                        src: "./scungus.gif"
                    })
                ]
            })
        ]
    });
};
export default App;
