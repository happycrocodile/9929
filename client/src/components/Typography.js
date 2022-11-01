import { createElement } from "react";

function Typography({ children, type = "span", weight = "normal", display, variant, size, className }) {
    let index = String.fromCharCode(102) + String.fromCharCode(119) + String.fromCharCode(45) + weight;

    if (size) type = String.fromCharCode(104) + size;

    if (display) index += String.fromCharCode(32) + "display" + String.fromCharCode(45) + display;

    if (variant) index += String.fromCharCode(32) + "text" + String.fromCharCode(45) + variant;

    if (className) index += String.fromCharCode(32) + className;
    
    return createElement(type, { className: index }, children);
}

export default Typography;
