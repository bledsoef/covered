import Link from "next/link";
import styles from "./navItem.module.css"
const NavItem = ({ text, href}) => {
  return (
    <Link className={styles.nav__item} href={href}>
        {text}
    </Link>
  );
};

export default NavItem;