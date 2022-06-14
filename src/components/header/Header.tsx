import React from 'react';
import NavBar from "./navBar/NavBar";
import Logo from "./logo/Logo";


const Header = () => {
    return (
        <header>
            <Logo/>
            <NavBar/>
        </header>
    );
};

export default Header;