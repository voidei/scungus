//import { LoadScungus, SaveScungus } from 'src/hooks/StoreScungus';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { LoadScungus } from "dist/hooks/StoreScungus";
import ClickScungus from "../hooks/ScungusButton";
import "./app.css";
var App = function() {
    return /*#__PURE__*/ _jsxs("div", {
        className: "root",
        style: {
            display: "flex",
            width: "100%"
        },
        children: [
            /*#__PURE__*/ _jsxs("div", {
                className: "side left",
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        className: "title-text heading",
                        children: /*#__PURE__*/ _jsx("h1", {
                            children: "this is scungus:)"
                        })
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        className: "text center top",
                        children: [
                            "you can click on scungus:)",
                            /*#__PURE__*/ _jsx("br", {}),
                            "doing so will increase your scungus:)",
                            /*#__PURE__*/ _jsx("br", {}),
                            "try it~!"
                        ]
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "button scungus padding",
                        children: /*#__PURE__*/ _jsx(ClickScungus, {})
                    })
                ]
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: "side right",
                children: [
                    /*#__PURE__*/ _jsx("br", {}),
                    /*#__PURE__*/ _jsx(LoadScungus, {})
                ]
            })
        ]
    });
};
export default App;
