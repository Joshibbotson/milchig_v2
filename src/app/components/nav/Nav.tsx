"use client";
import React, { useState } from "react";
import styles from "./nav.module.scss";
import Link from "next/link";

const Nav = () => {
    const [isActive, setIsActive] = useState(false);

    function handleClick() {
        setIsActive(!isActive);
    }

    return (
        <>
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
                    href="/contact"
                >
                    Contact / Maps
                </Link>
            </div>
        </>
    );
};

export default Nav;
