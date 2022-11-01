import useSWR from "swr";
import routes from "../routes";
import axios from "axios";
import Space from "../components/Space";
import Typography from "../components/Typography";
import Boxicons from "../components/Boxicons";
import { Row, Col, Button, Modal } from "react-bootstrap";
import { Suspense, useState } from "react";
import { addItem, setSidebar } from "../app/features/cart";
import { useDispatch, useSelector } from "react-redux";
import Background from "../components/Background";
import lang from "../lang";

function MoreInfo({ imagesBaseUrl, name, image, description, unitPrice }) {

    const [show, setShow] = useState(false);

    return (
        <>
            <Button variant="link" onClick={() => setShow(true)}>
                <Boxicons icon="info-circle" size="md" />
            </Button>
            <Modal show={show} centered={true} onHide={() => setShow(false)}>
                <Background.Image src={imagesBaseUrl + image} height={20}>
                    <Typography size={3}>{name}</Typography>
                    <hr></hr>
                </Background.Image>
                <Modal.Body>
                    <Space>
                        <Typography variant="muted" className="small">{lang.products.description}</Typography>
                        <Typography type="p">{description}</Typography>
                    </Space>
                    <Space>
                        <Typography>${unitPrice}</Typography>
                    </Space>
                    <Space size={1} className="text-end">
                        <Button onClick={() => setShow(false)}>{lang.ok}</Button>
                    </Space>
                </Modal.Body>
            </Modal>
        </>
    );
}

function ToggleSidebar() {
    const dispatch = useDispatch();

    const { items, total_amount } = useSelector(state => state.cart.payload);

    return (
        <Space className="fixed-bottom text-center">
            <Button size="lg" onClick={() => dispatch(setSidebar(true))}>
                <Typography>{items.length}</Typography>
                <Boxicons icon="cart" />
                <Typography> ${total_amount.toFixed(2)}</Typography>
            </Button>
        </Space>
    );
}

function Product({ data }) {

    const imagesBaseUrl = axios.defaults.baseURL.replace("api", "images") + String.fromCharCode(47);

    const dispatch = useDispatch();

    return (
        <Col lg={4}>
            <Background.Image src={imagesBaseUrl + data.image} height={50}>
                <Space size={5}>
                    <Typography size={5}>{data.name}</Typography>
                    <Typography>${data.unit_price}</Typography>
                </Space>
                <MoreInfo imagesBaseUrl={imagesBaseUrl} name={data.name} image={data.image} unitPrice={data.unit_price} description={data.description} />
                <Button variant="link" onClick={() => dispatch(addItem(data))}>
                    <Boxicons icon="cart-add" size="md" />
                </Button>
            </Background.Image>
        </Col>
    );
}

function Products() {

    const { data: categories } = useSWR(routes.products);

    return (
        <>
            {categories.data.map((category, index) => {
                return (
                    <div key={index}>
                        <Background.Title title={lang.products.categories[category.name]} />
                        <Row>
                            {category.products.map((product, index) => <Product key={index} data={product} />)}
                        </Row>
                    </div>
                )
            })}
            <ToggleSidebar />
        </>
    );
}

function IsSuspense() {
    return (
        <Suspense>
            <Products />
        </Suspense>
    );
}

export default IsSuspense;
