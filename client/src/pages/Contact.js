import { Col, Row } from "react-bootstrap";
import images from "../assets/images";
import Typography from "../components/Typography";
import Boxicons from "../components/Boxicons";
import Space from "../components/Space";
import Background from "../components/Background";
import lang from "../lang";

function Contact() {

    const contacts = [
        {
            bgImage: "suggestion",
            title: lang.contact.info.title,
            description: lang.contact.info.description,
            icon: "help-circle",
            email: "info@burgerxxl.com",
        },
        {
            bgImage: "moreInfo",
            title: lang.contact.rrhh.title,
            description: lang.contact.rrhh.description,
            icon: "briefcase",
            email: "rrhh@burgerxxl.com"
        },
        {
            bgImage: "perfect",
            title: lang.contact.help.title,
            description: lang.contact.help.description,
            icon: "headphone",
            email: "help@burgerxxl.com",
        },
    ];

    return (
        <Row>
            {contacts.map((contact, index) => {
                return (
                    <Col lg={4} key={index}>
                        <Background.Parallax className="p-5" height={100} bgImage={images[contact.bgImage]}>
                            <Space>
                                <Boxicons icon={contact.icon} size="md" />
                            </Space>
                            <Space size={4}>
                                <Typography size={4}>{contact.title}</Typography>
                                <Typography size={6}>{contact.description}</Typography>
                            </Space>
                            <Boxicons icon="envelope" />
                            <Typography>{contact.email}</Typography>
                        </Background.Parallax>
                    </Col>
                )
            })}
        </Row>
    );
}

export default Contact;
