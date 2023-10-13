import React from 'react'
import Header from './Header.js'
import Footer from './Footer.js'

const Layout = (props) => {
    return (
        <>
            <Header/>
            <main style={{minHeight:"80vh"}}>
            {props.children}
            </main>
            <Footer/>
            
        </>
    )
}

export default Layout