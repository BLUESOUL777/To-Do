import React from "react";
import "./Productgrp.css";
import Price from "./Price.jsx";

function Product({title , idx}) {
    let oldPrice = ["12,495" , "11,900" , "1,599" , "599"];
    let newPrice = ["8,999" , "9,199" , "899" , "278"];
    let description = ["8000 DPI" , "intutive display" , "designed for ipad pro" , "wireless"]
    return (
        <div className="card" >
            <h4>{title}</h4>
            <p>{description[idx]}</p>
            <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
        </div>
    );
}

export default Product;
