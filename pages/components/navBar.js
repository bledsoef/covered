import Link from "next/link";
import React, { useState } from "react";
import NavItem from "./navItem";
import styles from "./navItem.module.css"

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "My Cover Letters", href: "/"},
  { text: "About Us", href: "/about" },
  { text: "Contact", href: "/contact" },
];

const Navbar = () => {
  return (
    <header>
      <nav className={styles.nav}>
        <Link href={"/"}>
            <h1 className="logo">Covered</h1>
        </Link>
        <div
          className={styles["nav__menu-bar"]}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={styles["nav__menu-list"]}>
          {MENU_LIST.map((menu, idx) => (
            <div key={menu.text}>
              <NavItem {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;