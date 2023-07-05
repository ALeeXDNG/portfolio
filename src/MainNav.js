import React, { useState } from 'react';
import classes from "./NavStyle.module.css";
import logo from "./img/LOGO.png";
import Hamburger from 'hamburger-react';

function MainNav(props) {
    const { onClick } = props;
    const [isOpen, setIsOpen] = useState(false); 
    const toggleMenu = () => {
        setIsOpen(!isOpen);
        onClick();
    };

    return (
        <div>
            <div className={classes.navBar}>
                <div className={classes.menuIcon}>
                    <Hamburger
                        toggled={isOpen}
                        toggle={toggleMenu}
                        size={25}
                        onClick={toggleMenu}
                    />
                </div>
                <img src={logo} alt="Logo" />
                <div className={classes.navigationMenu}>
                    <p>Home</p>
                    <p>About</p>
                    <p>Contact</p>
                </div>
            </div>
        </div>
    );
}

export default MainNav;
