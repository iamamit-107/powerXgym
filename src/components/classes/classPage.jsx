import React from "react";
import "./classPage.scss";
import { Link } from "react-router-dom";

const ClassPage = ({ Data }) => {
    return (
        <div className="col-md-4 mt-3 mb-3">
            <img src={Data.img} alt="" className="img-fluid cls-img" />
            <div className="cls-title btn text-center">
                <Link to={"/class/" + Data.url} Data={Data}>
                    <h2>{Data.title}</h2>
                    <span>
                        <i className="fas fa-arrow-right ml-3"></i>
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default ClassPage;
