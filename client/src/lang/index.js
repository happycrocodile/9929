
const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim sed mi quis facilisis. Proin quis congue dui. Sed sed leo";

const home = {
    see_menu: "Ver menú",
    header: {
        title: "Las hamburguesas mas grandes del mundo",
        since: "Desde 2014 junto a vos"
    },
    chips: {
        perfect: "Perfectas",
        beautiful: "Hermosas",
        tasty: "Sabrosas",
        irresistible: "Irresistibles"
    },
    stores: {
        monday_to_friday: "Lunes a viernes",
        saturday: "Sábados",
        to: "a",
        info: {
            title: "¿Donde encontrarnos?",
            description: loremIpsum,
        }
    },
    about: {
        description: loremIpsum
    },
    redirect_to_products: {
        title: "¡No te quedes con las ganas!"
    },
};

const products = {
    categories: {
        burgers: "Hamburguesas",
        sodas: "Bebidas",
        promotions: "Promociones"
    },
    description: "Descripcion",
};

const contact = {
    info: {
        title: "¿Tienes alguna consulta?",
        description: loremIpsum
    },
    rrhh: {
        title: "Trabaja con nosotros",
        description: loremIpsum
    },
    help: {
        title: "Soporte tecnico",
        description: loremIpsum
    },
};

const sidebarCart = {
    title: "Pedido",
    products: "Productos",
    total_amount: "Total a pagar",
    payer_form: {
        title: "Informacion de contacto",
        address: "Dirección",
        phone: "Teléfono",
        login: {
            title: "Tengo cuenta",
            error: "El correo no esta registrado",
        },
        register: {
            title: "Registrarme",
            error: "El correo ya fue registrado"
        },
        inputs: {
            first_name: "Nombre",
            last_name: "Apellido",
            email: "Correo electrónico",
            phone: {
                area_code: "Código de área",
                number: "Número",
            },
            address: {
                street_name: "Calle",
                street_number: "Número",
                zip_code: "Codigo postal",
            }
        }
    }
};

const appBar = {
    links: {
        home: "Inicio",
        products: "Productos",
        contact: "Contacto"
    },
};

const feedbacks = {
    title: "Estado del pedido",
    payment: "Número del pedido",
    status: {
        approved: {
            title: "Pedido aprobado",
            description: loremIpsum
        },
        in_process: {
            title: "Pedido pendiente",
            description: loremIpsum
        },
        rejected: {
            title: "Pedido rechazado",
            description: loremIpsum
        },
        pending: {
            title: "Pedido pendiente de pago",
            description: loremIpsum
        },
        null: {
            title: "Pedido cancelado",
            description: loremIpsum
        },
    }
}

const lang = {
    ok: "Aceptar",
    finish: "Finalizar",
    cancel: "Cancelar",
    home: home,
    products: products,
    contact: contact,
    sidebar_cart: sidebarCart,
    app_bar: appBar,
    feedbacks: feedbacks,
};

export default lang;
