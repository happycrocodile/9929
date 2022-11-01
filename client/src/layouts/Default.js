import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import AppBar from "../components/AppBar";
import Footer from "../components/Footer";
import CartSidebar from "../components/CartSidebar";

function Default() {
    return (
        <>
            <AppBar />
            <Container fluid={true}>
                <Outlet />
                <Footer />
            </Container>
            <CartSidebar />
        </>
    );
}

export default Default;
