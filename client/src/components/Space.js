import { createElement } from "react";

function Space({ size = 3, horizontal, children, className }) {
    let index = String.fromCharCode(109) + (horizontal ? String.fromCharCode(101) : String.fromCharCode(98)) + String.fromCharCode(45) + size;

    if (className) index += String.fromCharCode(32) + className;
    
    return createElement("div", { className: index }, children);
}

export default Space;
