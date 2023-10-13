import React, { useState } from 'react'
import Layout from "../../components/Layout/Layout";
import { toast } from 'react-toastify'

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [answer, setAnswer] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name, email, password, phone, address)
        toast.success("registration success")
    }
    return (
        < Layout title="Register-supra" >
            <div className='register'>
                <h1>Register Page</h1>
                <form onSubmit={handleSubmit} className='mt-2' >
                    <div className="form-group ">
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)} className="form-control"
                            id="exampleInputEmail1"
                            placeholder="Name"
                            required />

                    </div> <div className="form-group mt-1">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control"
                            id="exampleInputEmail1"
                            placeholder="Email"
                            required />

                    </div>
                    <div className="form-group mt-1">
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Password"
                            required />
                    </div>
                    <div className="form-group mt-1">
                        <input type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="form-control"
                            id="exampleInputEmail1"
                            placeholder="Phone"
                            required />

                    </div>
                    <div className="form-group mt-1">
                        <input
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="form-control"
                            id="exampleInputEmail1"
                            placeholder="Address"
                            required />

                    </div>

                    <button type=" submit" className="btn btn-primary mt-2">Submit</button>
                </form>
            </div>
        </Layout >
    )
}

export default Register