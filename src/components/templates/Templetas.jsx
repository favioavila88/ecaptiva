import React from 'react'
import MainHeader from '../organisms/MainHeader'
import { Outlet, useNavigation } from 'react-router-dom'
import Footer from '../organisms/Footer'

const Templetas = () => {
    const navigation = useNavigation()

    return (
        <>
          <MainHeader />
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
