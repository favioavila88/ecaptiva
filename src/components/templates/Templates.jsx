import React from 'react'
import Header from '../organisms/Header'
import { Outlet, useNavigation } from 'react-router-dom'
import Footer from '../organisms/Footer'

const Templetas = () => {
    const navigation = useNavigation()

    return (
        <>
          <Header />
            <main className="container">
                {navigation.state === "loading" && (
                    <div className="alert alert-info my-5">Loading...</div>
                )}
            </main >
            <Outlet />
            <Footer />
        </>
    )
}

export default Templetas
