import { Routes, Route } from "react-router-dom"
import HomePage from "../src/pages/HomePage.js"
import About from "../src/pages/About.js"
import Policy from "../src/pages/Policy.js"
import Contact from "../src/pages/Contact.js"
import PageNotFound from "../src/pages/PageNotFound.js"
import Register from "./pages/Auth/Register.js"
import Login from "./pages/Auth/Login.js"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from "./pages/user/Dashboard.js"
import PrivateRoute from "./components/Routes/Private.js"
import ForgotPassword from "./pages/Auth/ForgotPassword.js"


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="" element={<Dashboard />} />
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
