import React from 'react'
import { NavLink } from 'react-router-dom'

const AdminMenu = () => {
    return (
        <>
            <div className='text-center'>
                <ul className="list-group">
                    <h4>Admin Panel</h4>
                    <NavLink to='/dashboard/admin/create-category' className="list-group-item " aria-current="true">Create New Category</NavLink>
                    <NavLink to='/dashboard/admin/create-product' className="list-group-item">Create New Product</NavLink>
                    <NavLink to='/dashboard/admin/products' className="list-group-item">All Products</NavLink>
                    <NavLink to='/dashboard/admin/orders' className="list-group-item">All Orders</NavLink>
                </ul>
            </div >

        </>
    )
}

export default AdminMenu