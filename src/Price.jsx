import React from "react";

function Price({ oldPrice, newPrice }) {
    return (
      
        <div>
            <span>Old Price: {oldPrice}</span>
            &nbsp; &nbsp;
            <span>New Price: {newPrice}</span>
        </div>
    );
}

export default Price;
