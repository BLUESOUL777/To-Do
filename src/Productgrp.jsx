import React from "react";
import Product from "./Product.jsx";
import "./Productgrp.css"

function Productgrp() {
    return (
        <div>
            <Product title="Logitech MX Master" idx={0} />
            <Product title="Apple Pencil" idx={1} />
            <Product title="Zebronics Zeb-Transformer" idx={2} />
            <Product title="Petronics Toad 22" idx={3} />
        </div>
    );
}

export default Productgrp;
