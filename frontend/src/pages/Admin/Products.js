import React from 'react'
import AdminMenu from '../../components/Layout/AdminMenu'
import Layout from '../../components/Layout/Layout'

const Products = () => {
    return (
        <Layout title={"Products"}>
            < div className="row" >
                <div className="col-md-3">
                    <AdminMenu />
                </div>
                <div className="col-md-9">
                    <div className="text-center">All Products List</div>
                </div>
            </div >
        </Layout >
    )
}

export default Products