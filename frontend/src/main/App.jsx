import './App.css'
import React from 'react'

import Logo from '../components/logo/logo'
import Nav from '../components/navbar/nav-bar'
import Main from '../components/main/main'
import Footer from '../components/footer/footer'

export default props =>

    <div className='app'>
        <Logo />
        <Nav />
        <Main />
        <Footer />
    </div>