import { createElement } from "react";

function Boxicons({ icon, type, size = "sm", animationOnHover = "tada", variant, className }) {

    const base = String.fromCharCode(98) + String.fromCharCode(120);
    const fixedWidth = String.fromCharCode(102) + String.fromCharCode(119);

    animationOnHover = animationOnHover + String.fromCharCode(45) + "hover";

    let index = base + String.fromCharCode(32) + base;

    if (type) index += type.charAt(0);

    index += String.fromCharCode(45) + icon;

    if (variant) index += String.fromCharCode(32) + "text" + String.fromCharCode(45) + variant;

    [size, fixedWidth, animationOnHover].forEach(x => {

        index += String.fromCharCode(32) + base + String.fromCharCode(45) + x;

    });

    if (className) index += String.fromCharCode(32) + className;
    return createElement("i", { className: index });
}

export default Boxicons;
