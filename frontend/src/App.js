import { Routes, Route } from "react-router-dom"
import HomePage from "../src/pages/HomePage.js"
import About from "../src/pages/About.js"
import Policy from "../src/pages/Policy.js"
import Contact from "../src/pages/Contact.js"
import PageNotFound from "../src/pages/PageNotFound.js"
import Register from "./pages/Auth/Register.js"
import Login from "./pages/Auth/Login.js"
import Dashboard from "./pages/user/Dashboard.js"
import PrivateRoute from "./components/Routes/PrivateRoute.js"
import ForgotPassword from "./pages/Auth/ForgotPassword.js"
import AdminRoute from "./components/Routes/AdminRoute.js"
import AdminDashboard from "./pages/Admin/AdminDashboard.js"
import CreateCategory from "./pages/Admin/CreateCategory.js"
import CreateProduct from "./pages/Admin/CreateProduct.js"
import Users from "./pages/Admin/Users.js"
import Orders from "./pages/user/Orders.js"
import Profile from "./pages/user/Profile.js"


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/users" element={<Users />} />


        </Route>
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/orders" element={<Orders />} />
          <Route path="user/profile" element={<Profile />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/about" element={<About />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes >

    </>
  );
}

export default App;
