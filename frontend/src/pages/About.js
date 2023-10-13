import React from "react";
import Layout from "../components/layout/Layout.js";

const About = () => {
    return (
        <Layout title={"About us - Ecommer app"}>
            <div className="row contactus ">
                <div className="col-md-6 ">
                    <img
                        className="rounded"
                        src="/images/contact.avif"
                        alt="contactus"
                        style={{ width: "100%" }}
                    />
                </div>
                <div className="col-md-4">
                    <h1 className="bg-dark m-2 p-2 text-white text-center rounded">ABOUT US</h1>
                    <p className="text-justify m-4">
                        Supra Watches is a luxury watch store offering a wide selection of high-end timepieces from the world's leading brands. We are committed to providing our customers with the best possible shopping experience, with knowledgeable staff and a variety of services to ensure that your watch is always in top condition.


                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default About;