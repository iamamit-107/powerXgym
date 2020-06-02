import React, { useState, useEffect } from "react";
import "./mainPrice.scss";
import Header from "../home/header";
import CommonHero from "../commonHero/commonHero";
import Footer from "../home/footer";
import { PriceData } from "../../Data/priceData";
import PricePage from "./pricePage";

const MainPrice = () => {
    const [prices, setPrices] = useState();

    useEffect(() => {
        fetch("http://power-x-gym-backend.herokuapp.com/pricings")
            .then((res) => res.json())
            .then((data) => {
                setPrices(data);
            });
    }, []);

    console.log(prices);

    return (
        <>
            <Header />
            <CommonHero title="PRICING PLANS" />
            <div className="mainPrice">
                <div className="container mt-5 mb-5">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2>
                                Choose the offer
                                <span className="text-dark">
                                    {" "}
                                    that suits you
                                </span>
                            </h2>
                            <p className="mb-3">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quidem molestias <br />{" "}
                                debitis non, libero excepturi facere.
                            </p>
                        </div>
                    </div>
                    <div className="row mt-5">
                        {PriceData.map((price) => (
                            <PricePage key={price.id} data={price} />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default MainPrice;
