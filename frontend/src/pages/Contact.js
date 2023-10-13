import React from "react";
import Layout from "../components/Layout/Layout.js";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
    return (
        <Layout title={"Contact us"}>
            <div className="row contactus  ">
                <div className="col-md-6 ">
                    <img
                        className="rounded mt-10px"
                        src="/images/contactus.avif"
                        alt="contactus"
                        style={{ width: "100%" }}
                    />
                </div>
                <div className="col-md-4">
                    <h1 className="bg-dark p-2  mt-0 text-white text-center rounded">CONTACT US</h1>
                    <p className="text-justify m-4">We're here to help you find the perfect watch or answer any questions you may have about our products or services.
                    </p>
                    <p className="mt-3">
                        <BiMailSend /> : www.help@suprawatches.com
                    </p>
                    <p className="mt-3">
                        <BiPhoneCall /> : 012-3456789
                    </p>
                    <p className="mt-3">
                        <BiSupport /> : 1800-0000-0000 (toll free)
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default Contact;