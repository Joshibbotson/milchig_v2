"use client";
import React, { useState } from "react";
import styles from "./nav.module.scss";
import Link from "next/link";

const Nav = () => {
    const [isActive, setIsActive] = useState(false);

    function handleClick() {
        setIsActive(!isActive);
    }

    function closeMenu() {
        setIsActive(false);
    }

    return (
        <>
            <header className={styles.header}>
                <Link onClick={closeMenu} href="/">
                    MILCHIG
                </Link>
                <h3>PARAGON ARCADE</h3>
            </header>
            <nav className={styles.nav}>
                <div
                    className={`${styles.hamburgerBtn} ${
                        isActive ? styles.activeHamburger : ""
                    }`}
                    onClick={handleClick}
                >
                    <div className={styles.line1}></div>
                    <div className={styles.line2}></div>
                    <div className={styles.line3}></div>
                    <div className={styles.diagonalLine1}></div>
                    <div className={styles.diagonalLine2}></div>
                </div>
            </nav>

            <div
                className={`${styles.dropDownMenu} ${
                    isActive ? styles.activeDropDownMenu : ""
                }`}
            >
                <Link
                    onClick={handleClick}
                    className={styles.link}
                    href="/opening-times"
                >
                    Opening Times
                </Link>
                <Link
                    onClick={handleClick}
                    className={styles.link}
                    href="/menu"
                >
                    Menu
                </Link>{" "}
                <Link
                    onClick={handleClick}
                    className={styles.link}
                    href="/find-us"
                >
                    Find Us
                </Link>
                <Link
                    onClick={handleClick}
                    className={styles.link}
                    href="/contact"
                >
                    Contact Us
                </Link>
            </div>
        </>
    );
};

export default Nav;
