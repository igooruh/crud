import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'

import Logo from '../components/logo/logo'
import Nav from '../components/navbar/nav-bar'
import Main from '../components/main/main'
import Footer from '../components/footer/footer'

export default props =>

    <div className='app'>
        <Logo />
        <Main icon='home' title='Register User' subtitle='Second project of the chapter of React.' />
        <Nav />
        <Footer />
    </div>