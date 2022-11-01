import { createElement } from "react";
import { Parallax } from "react-parallax";
import images from "../assets/images";
import Typography from "./Typography";

function ParallaxImage({ bgImage, className, children, height = 60 }) {

    const style = {
        height: height + "vh",
        width: "auto",
        color: "white",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    };

    return (
        <Parallax bgImage={bgImage}>
            <div style={style}>
                <div className={className}>{children}</div>
            </div>
        </Parallax>
    );
}

function Image({ src, className, darken = 3, children, height = 100 }) {

    let linearGradient = "rgba(0, 0, 0, darken)".replace("darken", darken * 0.1);

    linearGradient += String.fromCharCode(44) + linearGradient;

    const style = {
        height: height + "vh",
        width: "auto",
        background: "linear-gradient" + String.fromCharCode(40) + linearGradient + String.fromCharCode(41) + String.fromCharCode(44) + "url" + String.fromCharCode(40) + src + String.fromCharCode(41),
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    };

    return createElement("div", { style: style, className: className }, <div>{children}</div>);
}

function Title({ title }) {
    return (
        <Image src={images.backgroundDefault} height={25}>
            <Typography size={3}>{title}</Typography>
            <hr></hr>
        </Image>
    );
}

function Background({ children, className }) {
    return (
        <div className={className}>{children}</div>
    );
}

export default Object.assign(Background, {
    Parallax: ParallaxImage,
    Image: Image,
    Title: Title,
});
