import { useState } from "react";
import Typography from "./Typography";

function ShowOnHover({ title, children, className }) {

    const [show, setShow] = useState(false);

    const style = {
        textAlign: "center",
    };

    return (
        <div className={className} style={style} onPointerEnter={() => setShow(true)} onPointerLeave={() => setShow(false)}>
            {show ? children : <Typography size={3}>{title}</Typography>}
        </div>
    );
}

export default ShowOnHover;
