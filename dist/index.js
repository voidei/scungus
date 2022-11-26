import { jsx as _jsx } from "react/jsx-runtime";
import { createRoot } from "react-dom/client";
import App from "./components/App";
var container = document.getElementById("root");
if (container) {
    var root = createRoot(container);
    root.render(/*#__PURE__*/ _jsx(App, {}));
}
