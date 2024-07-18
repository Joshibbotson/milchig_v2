import React from "react";
import styles from "./header.module.scss";
import Link from "next/link";
const Header = () => {
    return (
        <header className={styles.header}>
            <Link href="/">MILCHIG</Link>
            <h3>PARAGON ARCADE</h3>
        </header>
    );
};

export default Header;
