import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Default from "./layouts/Default";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Feedbacks from "./pages/Feedbacks";
import routes from "./routes";
import { ToastContainer } from "react-toastify";
import { useLayoutEffect } from "react";

function ScrollToTop({ children }) {
    const location = useLocation();
    useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0);

    }, [location.pathname]);

    return children;
}

function App() {
    return (
        <BrowserRouter>
            <ScrollToTop>
                <Routes>
                    <Route path={routes.home} element={<Home />} />
                    <Route element={<Default />}>
                        <Route path={routes.products} element={<Products />} />
                        <Route path={routes.contact} element={<Contact />} />
                        <Route path={routes.feedbacks} element={<Feedbacks />} />
                    </Route>
                </Routes>
            </ScrollToTop>
            <ToastContainer position="top-left" toastStyle={{ borderRadius: 0 }} />
        </BrowserRouter>
    );
}

export default App;