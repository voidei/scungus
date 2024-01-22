import { jsx as _jsx } from "react/jsx-runtime";
import { createRoot } from "react-dom/client";
import App from "./components/App";
var container = document.querySelector("#root");
// eslint-disable-next-line functional/no-conditional-statements
if (container) {
    var root = createRoot(container);
    root.render(/*#__PURE__*/ _jsx(App, {}));
}
