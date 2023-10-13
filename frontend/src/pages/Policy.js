import React from "react";
import Layout from "../components/Layout/Layout.js";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            className="rounded mt-10"
            src="/images/privacy.avif"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">

          <h1 className="bg-dark p-2 m-2 text-white text-center rounded ">PRIVACY POLICY</h1>
          <p className="m-4">We respect your privacy and are committed to protecting your personal information. We collect and use your personal information to provide you with the best possible shopping experience. We will never sell or share your personal information without your consent.</p>
        </div>
      </div>
    </Layout >
  );
};

export default Policy;