import React from 'react';

import Logo from "./logo/Logo";
import NavBar from "./navBar/NavBar";
import styles from "./header.module.css";


const Header = () => (
    <div className={styles.wrapper}>
        <Logo/>
        <NavBar/>
    </div>
);

export default Header;