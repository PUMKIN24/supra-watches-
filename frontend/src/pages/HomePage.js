import React from 'react'
import Layout from "../components/Layout/Layout.js"
import { useAuth } from "../context/auth"

const HomePage = () => {
    const [auth, setAuth] = useAuth()
    return (
        <Layout title={"supra watches"}>
            <h4>HomePage</h4>
            <pre>{JSON.stringify(auth, null, 4)}</pre>
        </Layout >
    )
}

export default HomePage