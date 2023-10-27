import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useAuth } from '../../context/auth'
import toast from 'react-hot-toast'
import SearchInput from '../Form/searchInput'
import useCategory from './../../Hooks/useCategory';

const Header = () => {
    const [auth, setAuth] = useAuth()
    const categories = useCategory()
    const handleLogout = () => {
        setAuth({
            ...auth,
            user: null,
            token: ''
        })
        localStorage.removeItem('auth')
        toast.success("Logout Success")
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/" className=" nav   bar-brand px-5" >supra watches</Link >

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <SearchInput />
                        <li className="nav-item ">
                            <NavLink to="/" className="nav-link"> Home <span className="sr-only"></span></NavLink >
                        </li>


                        <li className="nav-item dropdown">
                            <Link
                                className="nav-link dropdown-toggle"
                                to={"/categories"}
                                data-bs-toggle="dropdown"
                            >
                                Categories
                            </Link>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link className="dropdown-item" to={"/categories"}>
                                        All Categories
                                    </Link>
                                </li>
                                {categories?.map((c) => (
                                    <li>
                                        <Link
                                            className="dropdown-item"
                                            to={`/category/${c.slug}`}
                                        >
                                            {c.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                        {!auth.user ? (
                            <>
                                <li className="nav-item">
                                    <NavLink to="/register" className="nav-link" >Register  </NavLink >
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/login" className="nav-link" >Login  </NavLink >
                                </li>
                            </>) : (

                            <>
                                <li className="nav-item dropdown">
                                    <NavLink
                                        className="nav-link dropdown-toggle"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        style={{ border: "none" }}
                                    >
                                        {auth?.user?.name}
                                    </NavLink>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <NavLink to={
                                                `/dashboard/${auth?.user?.role === 1 ? 'admin' : 'user'}`
                                            } className="dropdown-item" >Dashboard</NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                onClick={handleLogout}
                                                to="/login"
                                                className="dropdown-item">
                                                Logout
                                            </NavLink>
                                        </li>
                                    </ul>
                                </li>
                            </>
                        )}
                        <li className="nav-item">
                            <NavLink to="/cart" className="nav-link" >Cart(0)  </NavLink >
                        </li>

                    </ul >

                </div >
            </nav >
        </>
    )
}

export default Header