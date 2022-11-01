import { Button, Col, FloatingLabel, Form, Modal, Offcanvas, Row, Tab, Table, Tabs } from "react-bootstrap";
import Background from "./Background";
import Typography from "./Typography";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, setSidebar } from "../app/features/cart";
import Boxicons from "./Boxicons";
import Space from "./Space";
import { useReducer, useState } from "react";
import axios from "axios";
import routes from "../routes";
import { checkoutMercadoPago } from "../libs/mercadopago";
import lang from "../lang";
import { toast } from "react-toastify";

const placeholder = String.fromCharCode(50);

function RegisterPayer() {
    const [validated, setValidated] = useState(false);
    const { items } = useSelector(state => state.cart.payload);
    const [data, setData] = useReducer((state, event) => {
        return {
            ...state,
            [event.name]: event.value
        };
    }, {});

    const handleChange = event => setData({ name: event.target.name, value: event.target.value });
    const handleSubmit = async event => {
        event.preventDefault();

        if (event.currentTarget.checkValidity() === true) {
            try {
                let { data: customer } = await axios.post(routes.registerCustomer, data);

                if (customer.data.customer_id) {
                    let { data: mercadopago } = await axios.post(routes.mercadopago, { email: data.email, items: items })
                    checkoutMercadoPago(mercadopago.data.preference_id);
                }

            } catch (error) {
                return toast.error(lang.sidebar_cart.payer_form.login.error);
            }
        }
        setValidated(true);
    };

    return (
        <Form noValidate={true} validated={validated} onSubmit={handleSubmit}>
            <Space>
                <Row className="g-3">
                    <Col xs={6}>
                        <FloatingLabel label={lang.sidebar_cart.payer_form.inputs.first_name}>
                            <Form.Control name="first_name" placeholder={placeholder} onChange={handleChange} required={true} />
                        </FloatingLabel>
                    </Col>
                    <Col>
                        <FloatingLabel label={lang.sidebar_cart.payer_form.inputs.last_name}>
                            <Form.Control name="last_name" placeholder={placeholder} onChange={handleChange} required={true} />
                        </FloatingLabel>
                    </Col>
                </Row>
            </Space>
            <Space>
                <FloatingLabel label={lang.sidebar_cart.payer_form.inputs.email}>
                    <Form.Control name="email" type="email" placeholder={placeholder} onChange={handleChange} required={true} />
                </FloatingLabel>
            </Space>
            <Space>
                <Space size={1}>
                    <Typography variant="muted">{lang.sidebar_cart.payer_form.phone}</Typography>
                </Space>
                <Row className="g-3">
                    <Col xs={4}>
                        <FloatingLabel label={lang.sidebar_cart.payer_form.inputs.phone.area_code}>
                            <Form.Control name="area_code" placeholder={placeholder} onChange={handleChange} required={true} />
                        </FloatingLabel>
                    </Col>
                    <Col>
                        <FloatingLabel label={lang.sidebar_cart.payer_form.inputs.phone.number}>
                            <Form.Control name="phone" placeholder={placeholder} onChange={handleChange} required={true} />
                        </FloatingLabel>
                    </Col>
                </Row>
            </Space>
            <Space size={1}>
                <Typography variant="muted">{lang.sidebar_cart.payer_form.address}</Typography>
            </Space>
            <Space>
                <FloatingLabel label={lang.sidebar_cart.payer_form.inputs.address.street_name}>
                    <Form.Control name="street_name" placeholder={placeholder} onChange={handleChange} required={true} />
                </FloatingLabel>
            </Space>
            <Space>
                <Row className="g-3">
                    <Col xs={6}>
                        <FloatingLabel label={lang.sidebar_cart.payer_form.inputs.address.street_number}>
                            <Form.Control name="street_number" type="number" placeholder={placeholder} onChange={handleChange} required={true} />
                        </FloatingLabel>
                    </Col>
                    <Col>
                        <FloatingLabel label={lang.sidebar_cart.payer_form.inputs.address.zip_code}>
                            <Form.Control name="zip_code" type="number" placeholder={placeholder} onChange={handleChange} required={true} />
                        </FloatingLabel>
                    </Col>
                </Row>
            </Space>
            <Space size={1} className="text-end">
                <Button type="submit">{lang.finish}</Button>
            </Space>
        </Form>
    );
}

function CheckoutPayer() {

    const [validated, setValidated] = useState(false);

    const { items } = useSelector(state => state.cart.payload);

    const [email, setEmail] = useState(null);

    const handleSubmit = async event => {
        event.preventDefault();

        if (event.currentTarget.checkValidity() === true) {
            try {
                let { data: mercadopago } = await axios.post(routes.mercadopago, { email: email, items: items })

                if (mercadopago.data.preference_id) {
                    checkoutMercadoPago(mercadopago.data.preference_id);
                }

            } catch (error) {
                return toast.error(lang.sidebar_cart.payer_form.register.error);
            }


        }

        setValidated(true);
    };

    return (
        <Form noValidate={true} validated={validated} onSubmit={handleSubmit}>
            <Space>
                <FloatingLabel label="Correo electrónico">
                    <Form.Control type="email" placeholder={placeholder} onChange={event => setEmail(event.target.value)} required={true} />
                </FloatingLabel>
            </Space>
            <Space size={1} className="text-end">
                <Button type="submit">{lang.finish}</Button>
            </Space>
        </Form>
    );
}

function PayerForm() {
    const [show, setShow] = useState(false);
    const [key, setKey] = useState(0);

    const { items } = useSelector(state => state.cart.payload);

    return (
        <>
            <Button onClick={() => setShow(true)} disabled={items.length === 0 ? true : false}>{lang.ok}</Button>
            <Modal show={show} onHide={() => setShow(false)}>
                <Background.Title title={lang.sidebar_cart.payer_form.title} />
                <Modal.Body>
                    <Tabs fill={true} className="mb-3" activeKey={key} onSelect={k => setKey(k)}>
                        <Tab eventKey={0} title={lang.sidebar_cart.payer_form.login.title}>
                            <CheckoutPayer />
                        </Tab>
                        <Tab eventKey={1} title={lang.sidebar_cart.payer_form.register.title}>
                            <RegisterPayer />
                        </Tab>
                        <Tab eventKey={2} title={lang.cancel}>
                            <Space size={1} className="text-center">
                                <Button onClick={() => setShow(false)}>{lang.cancel}</Button>
                            </Space>
                        </Tab>
                    </Tabs>
                </Modal.Body>
            </Modal>
        </>
    );
}

function CartSidebar() {

    const { items, sidebar, total_amount } = useSelector(state => state.cart.payload);

    const dispatch = useDispatch();

    return (
        <Offcanvas show={sidebar} placement="end" scroll={true} onHide={() => dispatch(setSidebar(false))}>
            <Background.Title title={lang.sidebar_cart.title} />
            <Offcanvas.Body>
                <Space size={1}>
                    <Typography variant="muted">{lang.sidebar_cart.products}</Typography>
                </Space>
                <Space>
                    <Table borderless={true}>
                        <tbody>
                            {items.map((product, index) => {
                                return (
                                    <tr key={index} className="align-items-center">
                                        <td>{index + 1}</td>
                                        <td>{product.name}</td>
                                        <td>${product.unit_price}</td>
                                        <td>
                                            <Button variant="link" onClick={() => dispatch(removeItem(product))}>
                                                <Boxicons icon="trash" variant="danger" />
                                            </Button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                </Space>
                <Space>
                    <Typography variant="muted">{lang.sidebar_cart.total_amount}</Typography>
                    <Typography size={5}>${total_amount.toFixed(2)}</Typography>
                </Space>
                <Space className="text-end">
                    <Button variant="link" className="text-muted" onClick={() => dispatch(setSidebar(false))}>{lang.cancel}</Button>
                    <PayerForm />
                </Space>
            </Offcanvas.Body>
        </Offcanvas>
    );
}

export default CartSidebar;