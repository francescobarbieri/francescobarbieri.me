import styles from '../styles/Navbar.module.css';
import {robotoSlab} from '../components/fonts';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Navbar = () => {

    const router = useRouter();

    useEffect( () => {
        if(router.pathname === "/")
            document.getElementById("latest-link").classList.add(styles.currentRoute);
        else if (router.pathname === "/archive")
            document.getElementById("archive-link").classList.add(styles.currentRoute);
        else if (router.pathname === "/about")
            document.getElementById("about-link").classList.add(styles.currentRoute);
    })


    return (
        <header className={styles.header}>
            <div className={styles.navHeader}>
                <h1 className={[robotoSlab.className, styles.logo].join(" ")}>Francesco Barbieri</h1>
                <p className={styles.slogan}>Where innovation inspires to build a better future</p>
            </div>
            <nav className={styles.navRoutes}>
                <Link className={styles.navLink} href="/" id="latest-link">Latest</Link>
                <Link className={styles.navLink} href="/archive" id="archive-link">Archive</Link>
                <Link className={styles.navLink} href="/about" id="about-link">About</Link>
                <button className={styles.themeButton}>
                    <svg aria-hidden="true" width="24" height="24" viewBox="0 0 18 18">
                    <path d="M3.34 14.66A8 8 0 1 0 14.66 3.34 8 8 0 0 0 3.34 14.66Zm9.9-1.42a6 6 0 0 1-8.48 0l8.48-8.48a6 6 0 0 1 0 8.48Z"></path>
                    </svg>
                </button>
            </nav>
        </header>
    );
}
 
export default Navbar;