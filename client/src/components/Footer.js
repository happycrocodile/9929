import { Image, Nav } from "react-bootstrap";
import images from "../assets/images";
import Background from "./Background";
import Space from "./Space";
import Typography from "./Typography";
import Boxicons from "./Boxicons";
import lang from "../lang";

function Footer() {

    const social = [
        {
            icon: "instagram",
            href: "#"
        },
        {
            icon: "facebook",
            href: "#"
        },
        {
            icon: "twitter",
            href: "#"
        },
    ];

    return (
        <Background.Image src={images.footer} height={60}>
            <Space>
                <Image src={images.logo} width={80} />
            </Space>
            <Space>
                <Typography size={5}>{lang.home.header.title}</Typography>
                <Typography>info@burgerxxl.com / rrhh@burgerxxl.com</Typography>
            </Space>
            <Space>
                <Nav className="justify-content-center">
                    {social.map((x, index) => {
                        return (
                            <Nav.Link key={index} href={x.href} target="_blank">
                                <Boxicons type="logo" size="md" variant="white" icon={x.icon} />
                            </Nav.Link>
                        )
                    })}
                </Nav>
            </Space>
            <Typography>Burger XXL &copy;</Typography>
        </Background.Image>
    );
}

export default Footer;
