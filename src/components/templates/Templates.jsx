import React from 'react'
import Header from '../organisms/header/Header'
import { Outlet, useNavigation } from 'react-router-dom'
import Footer from '../organisms/footer/Footer'

const Templetas = () => {
    const navigation = useNavigation()

    return (
        <div className='templetes'>
          <Header />
            <main className="container">
                {navigation.state === "loading" && (
                    <div className="alert alert-info my-5">Loading...</div>
                )}
            </main >
            <Outlet />
            <Footer />
        </div>
    )
}

export default Templetas
