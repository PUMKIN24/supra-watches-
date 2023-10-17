import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Spinner = () => {
    const [count, setCount] = useState(3)
    const navigate = useNavigate()

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevValue) => --prevValue)
        }, 1000)
        count === 0 && navigate('/login')
        return () => clearInterval(interval)
    }, [count, navigate])

    return (
        <>
            <div className="d-flex flex-column justify-content-center align-items-center"
                style={{ height: '70vh' }}>
                <h1 className='text-center'>
                    Redirecting in {count} seconds
                </h1>
                <div className="spinner-border" role="status">
                    <span >   sup</span >
                </div >
            </div >
        </>
    )
}

export default Spinner