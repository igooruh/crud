import './nav-bar.css'
import React from 'react'

export default props =>

    <aside className='menu-area'>
        <nav className='menu'>
            {/* Refactoring at home */}
            <a href='#/'>
                <i className='fa fa-home'></i> Início
            </a>
            <a href='#/users'>
                <i className='fa fa-users'></i> Usuários
            </a>
        </nav>
    </aside>