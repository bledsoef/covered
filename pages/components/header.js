import Link from "next/link"
import styles from "./header.module.css"
export default function Header() {
    return (
    <div>
        <ul className={styles.nav}>
            <li>
                <Link href="">
                    Home
                </Link>
            </li>
            <li>
                <Link href="">
                    My Letters
                </Link>
            </li>
            <li>
                <Link href="">
                    My Applications
                </Link>
            </li>
            <li>
                <Link href="">
                    About Us
                </Link>
            </li>
        </ul>
    </div>)}