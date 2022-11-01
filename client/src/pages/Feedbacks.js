import { Link, useSearchParams } from "react-router-dom";
import Background from "../components/Background";
import Space from "../components/Space";
import Boxicons from "../components/Boxicons";
import lang from "../lang";
import images from "../assets/images";
import routes from "../routes";
import { Row, Col } from "react-bootstrap";
import Typography from "../components/Typography";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clean } from "../app/features/cart";

function Feedbacks() {

    const [searchParams] = useSearchParams();

    const dispatch = useDispatch();

    const status = searchParams.get("status");

    const statusIcons = {
        approved: "check-circle",
        pending: "stop-circle",
        in_process: "help-circle",
        rejected: "x-circle",
        null: "x-circle",
    };

    useEffect(() => {
        dispatch(clean());
    }, []);

    return (
        <>
            <Background.Title title={lang.feedbacks.title} />
            <Background.Parallax bgImage={images.suggestion} height={100}>
                <Row>
                    <Col xs={10} lg={6} className="mx-auto">
                        <Space>
                            <Boxicons size="lg" icon={statusIcons[status]} />
                        </Space>
                        <Space>
                            <Typography size={3}>{lang.feedbacks.status[status].title}</Typography>
                            <hr></hr>
                        </Space>
                        <Space size={4}>
                            <Typography>{lang.feedbacks.status[status].description}</Typography>
                        </Space>
                        <Space size={5}>
                            <Typography type="p">{lang.feedbacks.payment}</Typography>
                            <Typography size={3}>{searchParams.get("payment_id")}</Typography>
                        </Space>
                        <Link to={routes.home} className="btn btn-outline-light">{lang.ok}</Link>
                    </Col>
                </Row>
            </Background.Parallax>
        </>
    );
}

export default Feedbacks;
