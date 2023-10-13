import React from 'react'
import Header from './Header.js'
import Footer from './Footer.js'
import react, { Helmet } from 'react-helmet'

const Layout = ({ children, title, description, keywords, author }) => {
    return (
        <>
            <Helmet>
                <meta charSet='utf-8' />
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                < meta name="author" content={author} />
                <title>{title}</title>
            </Helmet>
            <Header />
            <main style={{ minHeight: "70vh" }}>
                {children}
            </main>
            <Footer />

        </>
    )
}

Layout.defaultProps = {
    title: "supra watches",
    description: "Luxury watches",
    author: "Jerry Mathew",
    keywords: "supra watches,supra"
}

export default Layout