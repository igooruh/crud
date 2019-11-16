import './main.css'
import React from 'react'
import Header from '../header/header'

export default props =>

    <React.Fragment>
        <Header {...props} />
        <main className='content'>
            conteúdo
        </main>
    </React.Fragment>  