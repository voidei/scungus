import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as material from "@mui/material";
var scungus = 0;
var pressButton = function pressButton() {
    scungus++;
    console.log(scungus);
};
export function Button() {
    return /*#__PURE__*/ _jsxs("div", {
        className: "btn",
        children: [
            /*#__PURE__*/ _jsx(material.Button, {
                onClick: pressButton,
                variant: "outlined",
                color: "success",
                size: "large",
                children: "scungus:)"
            }),
            /*#__PURE__*/ _jsx("br", {}),
            /*#__PURE__*/ _jsxs("div", {
                className: "text scungus",
                children: [
                    "scungus = ",
                    scungus.toString()
                ]
            })
        ]
    });
}
