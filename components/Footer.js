import Link from 'next/link';
import styles from '../styles/Footer.module.css';
import {robotoSlab} from '../components/fonts';

const Footer = () => {

    const year = new Date().getFullYear();

    return ( 
        <footer className={styles.footer}>
            <div className={styles.footerHeader}>
                <h4 className={robotoSlab.className}>Francesco Barbieri</h4>
                <p>© {year} francescobarbieri.me<br/>Thank you for visiting my blog! 🙏🏻</p>
            </div>
            <div className={styles.footerList}>
                <h4 className={robotoSlab.className}>Navigation</h4>
                <Link href="/">Latest</Link><br/>
                <Link href="/archive">Archive</Link><br/>
                <Link href="/about">About</Link><br/>
            </div>
            <div className={styles.footerList}>
                <h4 className={robotoSlab.className}>Policies</h4>
                <a href="#" target="_blank">Privacy Policy</a><br/>
                <a href="#" target="_blank">Cookie Policy</a><br/>
            </div>
            <div className={styles.footerList}>
                <h4 className={robotoSlab.className}>Contacts</h4>
                <a href="mailto:fbarbieri.business@gmail.com" target="_blank">Email</a><br/>
                <a href="https://github.com/francescobarbieri" target="_blank">GitHub</a><br/>
                <a href="https://www.linkedin.com/in/barbieri-francesco/" target="_blank">LinkedIn</a><br/>
                <a href="https://instagram.com/fraabarbieri/" target="_blank">Instagram</a><br/>
            </div>
        </footer>
    );
}
 
export default Footer;