import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'
import { HashRouter} from 'react-router-dom'

import Logo from '../components/logo/logo'
import Nav from '../components/navbar/nav-bar'
import Routes from './Routes'
import Footer from '../components/footer/footer'

export default props =>

    <HashRouter>
        <div className='app'>
            <Logo />
            <Nav />
            <Routes />
            <Footer />
        </div>
    </HashRouter>