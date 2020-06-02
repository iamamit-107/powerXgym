import React, { useState, useEffect } from "react";
import "./mainClass.scss";
import Header from "../home/header";
import Footer from "../home/footer";
import CommonHero from "../commonHero/commonHero";

import ClassPage from "./classPage";
import { classesData } from "../../Data/classData";

const MainClass = () => {
    const datas = classesData;

    const [classes, setClasses] = useState();

    useEffect(() => {
        fetch("http://power-x-gym-backend.herokuapp.com/classes")
            .then((res) => res.json())
            .then((data) => {
                setClasses(data);
            });
    }, []);

    console.log(classes);

    return (
        <>
            <Header />
            <CommonHero title="OUR CLASSES" />
            <div className="mainClass">
                <div className="container mt-5 mb-5">
                    <div className="row">
                        {datas.map((data) => (
                            <ClassPage key={data.img} Data={data} />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default MainClass;
