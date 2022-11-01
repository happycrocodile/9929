export const checkoutMercadoPago = preferenceId => {

    const createCheckoutScript = callback => {
        let script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://sdk.mercadopago.com/js/v2";
        script.onload = () => callback();
        document.getElementsByTagName("head")[0].appendChild(script);
    };

    const __init__ = () => {
        const publicKey = "TEST-43cb0457-c060-4374-839f-d98c1fbb325c";
        const mercadopago = new window.MercadoPago(publicKey, {
            locale: "es-AR"
        });
        mercadopago.checkout({
            preference: {
                id: preferenceId
            },
            autoOpen: true
        });
    };

    createCheckoutScript(__init__);
};
