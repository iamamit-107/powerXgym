import React from "react";
import "./specificClass.scss";
import { useParams } from "react-router-dom";
import { classesData } from "../../Data/classData";
import Header from "../home/header";
import CommonHero from "../commonHero/commonHero";
import Footer from "../home/footer";

const SpecificClass = ({ Data }) => {
    const { specific } = useParams();

    const data = classesData.find((item) => item.url === specific);

    console.log(data);

    return (
        <>
            <Header />
            <CommonHero title={data.title.toUpperCase()} />
            <div className="specificClass">
                <div className="container mt-5 mb-5">
                    <div className="row">
                        <div className="col-lg-6">
                            <img src={data.img} alt="" className="img-fluid" />
                            <p className="mt-4">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Beatae doloremque repudiandae
                                doloribus voluptas laborum, reiciendis
                                distinctio illum dolorem praesentium incidunt
                                molestias debitis! Aliquid temporibus optio,
                                facere veniam fuga, distinctio exercitationem ad
                                corrupti deleniti eum quas repudiandae repellat
                                sed tempore sint recusandae obcaecati odio,
                                expedita dolores cum? Ad voluptatum iure at!
                            </p>
                        </div>
                        <div className="col-lg-6">
                            <h2>
                                CLASS
                                <span className="text-dark"> SCHEDULE</span>
                            </h2>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="schedule">
                                        <h5>Monday</h5>
                                        <p>12.00 - 2.00</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="schedule">
                                        <h5>Monday</h5>
                                        <p>12.00 - 2.00</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="schedule">
                                        <h5>Monday</h5>
                                        <p>12.00 - 2.00</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="schedule">
                                        <h5>Monday</h5>
                                        <p>12.00 - 2.00</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="schedule">
                                        <h5>Monday</h5>
                                        <p>12.00 - 2.00</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="schedule">
                                        <h5>Monday</h5>
                                        <p>12.00 - 2.00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-6">
                            <p>
                                <span className="yellow-icon">
                                    <i class="fas fa-check-square"></i>
                                </span>
                                Getting Stronger Body{" "}
                            </p>
                            <p>
                                <span className="yellow-icon">
                                    <i class="fas fa-check-square"></i>
                                </span>
                                Getting Stronger Body{" "}
                            </p>
                            <p>
                                <span className="yellow-icon">
                                    <i class="fas fa-check-square"></i>
                                </span>
                                Getting Stronger Body{" "}
                            </p>
                            <p>
                                <span className="yellow-icon">
                                    <i class="fas fa-check-square"></i>
                                </span>
                                Getting Stronger Body{" "}
                            </p>
                            <p>
                                <span className="yellow-icon">
                                    <i class="fas fa-check-square"></i>
                                </span>
                                Getting Stronger Body{" "}
                            </p>
                            <p>
                                <span className="yellow-icon">
                                    <i class="fas fa-check-square"></i>
                                </span>
                                Getting Stronger Body{" "}
                            </p>
                        </div>
                        <div className="col-md-6">
                            <div className="joinBtn">
                                <button className="btn btn-join">
                                    JOIN US
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default SpecificClass;
