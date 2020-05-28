import React from 'react'
import { HashLink } from 'react-router-hash-link'

const Header = () => (
    <header className="header__navigation">
        <HashLink to="#home" className="header__navigation__link">Home</HashLink>
        <a href="https://github.com/danielbrog" className="header__navigation__link">GitHub</a>
        <HashLink to="#Projects" className="header__navigation__link">Projects</HashLink>
        <HashLink to="#Skills" className="header__navigation__link">Skills</HashLink>
        <HashLink to="#Courses" className="header__navigation__link">Courses</HashLink>
    </header>

)

export default Header