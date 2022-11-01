import { Col, Container, Image, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import images from "../assets/images";
import { Link } from "react-router-dom";
import routes from "../routes";
import ShowOnHover from "../components/ShowOnHover";
import useSWR from "swr";
import Space from "../components/Space";
import Typography from "../components/Typography";
import Footer from "../components/Footer";
import Background from "../components/Background";
import { Suspense } from "react";
import lang from "../lang";

function Chip({ data }) {
    return (
        <Col md={6} lg={3}>
            <Background.Image src={images[data]} height={40}>
                <ShowOnHover title={lang.home.chips[data]}>
                    <Link className="btn btn-light" to={routes.products}>{lang.home.see_menu}</Link>
                </ShowOnHover>
            </Background.Image>
        </Col>
    );
}

function Chips() {
    const chips = ["perfect", "beautiful", "tasty", "irresistible"];

    return (
        <Row>
            {chips.map((chip, index) => <Chip data={chip} key={index} />)}
        </Row>
    );
}

function Store({ name, city, streetName, zipCode, businessHours }) {
    return (
        <Background.Image src={images.backgroundStore} height={60}>
            <ShowOnHover title={name}>
                <Space>
                    <Typography size={3}>{city}</Typography>
                </Space>
                <Space>
                    <Typography>{streetName}</Typography>
                    <Typography>{String.fromCharCode(40) + zipCode + String.fromCharCode(41)}</Typography>
                </Space>
                <Typography>{lang.home.stores.monday_to_friday}</Typography>
                <Typography size={6}>{businessHours.monday_to_friday_open_at} {lang.home.stores.to} {businessHours.monday_to_friday_closes_at}</Typography>
                <Typography>{lang.home.stores.saturday}</Typography>
                <Typography size={6}>{businessHours.saturday_open_at} {lang.home.stores.to} {businessHours.saturday_closes_at}</Typography>
            </ShowOnHover>
        </Background.Image>
    );
}

function Stores() {

    const breakpoints = {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 4,
        }

    };

    const { data: stores } = useSWR(routes.stores);

    return (
        <Swiper slidesPerView={1} loop={true} breakpoints={breakpoints} autoplay={{ autoplay: true, disableOnInteraction: false }} modules={[Autoplay]}>
            {stores.data.map((store, index) => {
                return (
                    <SwiperSlide key={index}>
                        <Store name={store.name} city={store.city} streetName={store.street_name} zipCode={store.zip_code} businessHours={store.business_hours} />
                    </SwiperSlide>
                )
            })}
        </Swiper>
    );
}

function Home() {
    return (
        <Container fluid={true}>
            <Background.Parallax bgImage={images.header} height={100}>
                <Space>
                    <Image src={images.logo} width={120} />
                </Space>
                <Space size={5}>
                    <Typography display={1}>{lang.home.header.title}</Typography>
                    <hr></hr>
                </Space>
                <Space>
                    <Link to={routes.products} className="btn btn-outline-light">{lang.home.see_menu}</Link>
                </Space>
                <Typography type="em" className="small">{lang.home.header.since}</Typography>
            </Background.Parallax>

            <Chips />

            <Background.Parallax bgImage={images.moreInfo}>
                <Row>
                    <Col xs={10} lg={6} className="mx-auto">
                        <Typography size={3}>{lang.home.stores.info.title}</Typography>
                        <Typography>{lang.home.stores.info.description}</Typography>
                    </Col>
                </Row>
            </Background.Parallax>

            <Suspense>
                <Stores />
            </Suspense>

            <Background.Parallax bgImage={images.suggestion}>
                <Row>
                    <Col xs={10} lg={6} className="mx-auto">
                        <Typography size={3}>Burger XXL &copy;</Typography>
                        <Typography>{lang.home.about.description}</Typography>
                    </Col>
                </Row>
            </Background.Parallax>

            <Background.Parallax bgImage={images.promotions}>
                <Space size={5}>
                    <Typography display={2}>{lang.home.redirect_to_products.title}</Typography>
                    <hr></hr>
                </Space>
                <Link to={routes.products} className="btn btn-outline-light">{lang.home.see_menu}</Link>
            </Background.Parallax>

            <Footer />

        </Container>
    );
}

export default Home;
