import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import useCategory from "../Hooks/useCategory";
const Categories = () => {
    const categories = useCategory();
    return (
        <Layout title={"All Categories"}>
            <div className="container">
                <div className="row m-5">
                    {categories.map((c) => (
                        <div className="d-grid gap-2 m-2" key={c._id}>
                            <Link className="btn btn-warning" to={`/category/${c.slug}`} >
                                {c.name}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default Categories;