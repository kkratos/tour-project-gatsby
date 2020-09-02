import React from 'react'
import {Link} from 'gatsby'
import style from 'styled-components'
// import styles from './navbar.module.scss'

const StyledLinked = style(Link)`
    color: orange;
`;

const NavBar = () => {
    return (
        <div>
            <nav>
                <h2>KP</h2>
                <ul>
                    <li><StyledLinked to="/">Home</StyledLinked></li>
                    <li><StyledLinked to="/blog/">blog</StyledLinked></li>
                    <li><StyledLinked to="/products/">products</StyledLinked></li>
                    <li><StyledLinked to="/examples/">examples</StyledLinked></li>
                    <li><StyledLinked to="/images/">images</StyledLinked></li>
                    <li><StyledLinked to="/tours/">Tours</StyledLinked></li>

                </ul>
            </nav>
        </div>
    )
}

export default NavBar