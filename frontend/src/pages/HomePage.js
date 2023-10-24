import React, { useEffect, useState } from 'react'
import Layout from "../components/Layout/Layout.js"
import axios from 'axios';
import { Checkbox, Radio } from "antd";
import { Prices } from '../components/Prices.js';
const HomePage = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [checked, setChecked] = useState([]);
    const [radio, setRadio] = useState([]);

    //get all cat
    const getAllCategory = async () => {
        try {
            const { data } = await axios.get("/api/v1/category/get-category");
            if (data?.success) {
                setCategories(data?.category);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAllCategory();
    }, []);
    //get products
    const getAllProducts = async () => {
        try {
            const { data } = await axios.get(`/api/v1/product/product-list`);
            setProducts(data.products);
        } catch (error) {
            console.log(error);
        }
    };


    useEffect(() => {
        loadProducts();
    }, []);


    //load products
    const loadProducts = async () => {
        try {
            const { data } = await axios.get(`/api/v1/product/product-list`);
            //console.log(data, 'dataaaaaaaaaaa')
            setProducts([...products, ...data?.products]);
        } catch (error) {
            console.log(error);
        }
    };

    // filter by cat
    const handleFilter = (value, id) => {
        let all = [...checked];
        if (value) {
            all.push(id);
        } else {
            all = all.filter((c) => c !== id);
        }
        setChecked(all);
    };
    useEffect(() => {
        if (!checked.length || !radio.length) getAllProducts();
    }, [checked.length, radio.length]);

    useEffect(() => {
        if (checked.length || radio.length) filterProduct();
    }, [checked, radio]);

    //get filterd product
    const filterProduct = async () => {
        try {
            const { data } = await axios.post("/api/v1/product/product-filters", {
                checked,
                radio,
            });
            setProducts(data?.products);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <Layout title={"ALl Products - Best offers "}>
            <div className="container-fluid row mt-3">
                <div className="col-md-3">
                    <h6 className="text-center">Filter By Category</h6>
                    <div className="d-flex flex-column">
                        {categories?.map((c) => (
                            <Checkbox
                                key={c._id}
                                onChange={(e) => handleFilter(e.target.checked, c._id)}
                            >
                                {c.name}
                            </Checkbox>
                        ))}
                    </div>
                    {/* price filter */}
                    <h6 className="text-center mt-4">Filter By Price</h6>
                    <div className="d-flex flex-column">
                        <Radio.Group onChange={(e) => setRadio(e.target.value)}>
                            {Prices?.map((p) => (
                                <div key={p._id}>
                                    <Radio value={p.array}>{p.name}</Radio>
                                </div>
                            ))}
                        </Radio.Group>
                    </div>
                    <div className="d-flex flex-column">
                        <button
                            className="btn btn-danger"
                            onClick={() => window.location.reload()}
                        >
                            RESET FILTERS
                        </button>
                    </div>
                </div>
                <div className="col-md-9">
                    {/* <h1 className="text-center">All Products</h1> */}
                    <div className="d-flex flex-wrap">
                        {products?.map((p) => (
                            <div className="card m-1" style={{ width: "14rem", height: '21rem', overflow: 'hidden' }}>
                                <img
                                    src={`/api/v1/product/product-photo/${p._id}`}
                                    className="m-1" style={{
                                        height: '10rem',
                                        width: '6rem'
                                    }}
                                    alt={p.name}
                                />

                                <h6 className='p-1'>{p.name}</h6>
                                <p className='p-1'> {p.description.substring(0, 20)}...</p>
                                <p className='p-1'> RS {p.price}</p>
                                <div className='d-flex'>
                                    <button className="btn btn-primary ms-1">More Details</button>
                                    <button className="btn btn-secondary ms-1">ADD TO CART</button>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
            </div>
        </Layout >
    );
};

export default HomePage;