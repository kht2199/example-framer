// src/Button.tsx
import {
  createElement
} from "react";

// esbuild-css-modules-plugin-namespace:/var/folders/nn/0_g9yrbn2hz0pvlhmn8449200000gn/T/tmp-50741-cuB3nF3fh8YN/example-framer-esm-setup/src/Button.modules.css.js
var digest = "512aff8ab4039519303c8709c9a131eb2a4010d8b95c0ab3c4b7ccb104f43f15";
var css = `._button_kpmle_1 {
  background-color: #c8d5ff;
}
`;
(function() {
  if (!document.getElementById(digest)) {
    var ele = document.createElement("style");
    ele.id = digest;
    ele.textContent = css;
    document.head.appendChild(ele);
  }
})();
var Button_modules_css_default = { "button": "_button_kpmle_1" };

// src/Button.tsx
function Button({ title = "Title" }) {
  return /* @__PURE__ */ createElement("button", {
    className: Button_modules_css_default.button
  }, title);
}
export {
  Button
};
