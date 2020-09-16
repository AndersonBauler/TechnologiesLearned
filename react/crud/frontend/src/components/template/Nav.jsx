import './Nav.css'
import NavItem from './NavItem'
import React from 'react'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <NavItem icon="home" link="" navName="Início" />
            <NavItem icon="users" link="users" navName="Usuários" />
        </nav>
    </aside>