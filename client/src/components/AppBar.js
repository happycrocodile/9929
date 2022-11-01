import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import images from "../assets/images";
import Background from "./Background";
import Space from "./Space";
import routes from "../routes";
import lang from "../lang";

function AppBar() {
    const links = ["home", "products", "contact"];

    return (
        <Background.Image src={images.header} height={50}>
            <Navbar expand="lg" variant="dark">
                <Container>
                    <Space>
                        <Space>
                            <Image src={images.logo} width={70} />
                        </Space>
                        <Navbar.Toggle className="shadow-none" />
                        <Space>
                            <Navbar.Collapse>
                                <Nav>
                                    {links.map((link, index) => {
                                        return (
                                            <Nav.Item key={index}>
                                                <Link className="nav-link" to={routes[link]}>{lang.app_bar.links[link]}</Link>
                                            </Nav.Item>
                                        )
                                    })}
                                </Nav>
                            </Navbar.Collapse>
                        </Space>
                    </Space>
                </Container>
            </Navbar>
        </Background.Image>
    );
}

export default AppBar;