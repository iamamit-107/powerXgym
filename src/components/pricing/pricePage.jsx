import React from "react";
import "./pricePage.scss";

const PricePage = ({ data }) => {
    return (
        <div className="col-md-4 text-center">
            <div
                className="pricePage"
                style={{ backgroundImage: `url(${data.background})` }}
            >
                <h5 className="text-warning">billed monthly</h5>
                <h2 className="text-light"> {data.title} </h2>
                <h1 className="text-warning"> ${data.price} </h1>
                <p>
                    <i class="fas fa-check"></i> {data.feature1}
                </p>
                <p>
                    <i class="fas fa-check"></i> {data.feature2}
                </p>
                <p>
                    <i class="fas fa-check"></i> {data.feature3}
                </p>
                <p>
                    <i class="fas fa-check"></i> {data.feature4}
                </p>
                <p>
                    <i class="fas fa-check"></i> {data.feature5}
                </p>
                <button className="btn btn-warning">PURCHASE</button>
            </div>
        </div>
    );
};

export default PricePage;
