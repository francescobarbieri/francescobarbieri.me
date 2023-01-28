import Link from 'next/link';
import styles from '../styles/Footer.module.css';
import {robotoSlab} from '../components/fonts';
import SectionTitle from './SectionTitle';

const Footer = () => {

    const year = new Date().getFullYear();

    return ( 
        <footer className={styles.footer}>
            <SectionTitle title="Contacts" icon='contacts' />
            <div className={styles.contactsContainer}>
                <div className={styles.contactsRow}>
                    <svg className={styles.contactsIcon} aria-hidden="true" width="24" height="24" viewBox="0 0 18 18">
                        <path d="m1 6 8 5 8-5V4L9 9 1 4c0-1.1.9-2 2-2h12c1.09 0 2 .91 2 2v10c0 1.09-.91 2-2 2H3c-1.09 0-2-.91-2-2V6Z"></path>
                    </svg>
                    <a href="mailto:info@francescobarbieri.blog" target="_blank">
                        info@francescobarbieri.blog
                    </a>
                </div>
                <div className={styles.contactsRow}>
                    <svg className={styles.contactsIcon} aria-hidden="true" width="24" height="24" viewBox="0 0 18 18">
                        <path d="M9 1a8 8 0 0 0-2.53 15.59c.4.07.55-.17.55-.38l-.01-1.49c-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.42 7.42 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48l-.01 2.2c0 .21.15.46.55.38A8.01 8.01 0 0 0 9 1Z" fill="#010101"></path>
                    </svg>
                    <a href="https://github.com/francescobarbieri" target="_blank">
                        @francescobarbieri
                    </a>
                </div>
                <div className={styles.contactsRow}>
                    <svg className={styles.contactsIcon} aria-hidden="true" width="24" height="24" viewBox="0 0 18 18">
                        <path d="M15 1a2 2 0 0 1 2 1.85V15a2 2 0 0 1-1.85 2H3a2 2 0 0 1-2-1.85V3a2 2 0 0 1 1.85-2H15Zm-3.21 5.8c-1.09 0-1.83.56-2.19 1.13l-.06.11h-.03V7H7.23v7.63H9.6v-3.77c0-1 .2-1.96 1.43-1.96 1.16 0 1.23 1.04 1.23 1.9v3.83h2.37v-4.19c0-2.05-.44-3.63-2.84-3.63ZM5.75 7H3.37v7.63h2.38V7Zm-1.2-3.8a1.38 1.38 0 1 0 0 2.75 1.38 1.38 0 0 0 0-2.75Z" fill="#1178B3"></path>
                    </svg>
                    <a href="https://www.linkedin.com/in/barbieri-francesco" target="_blank">
                        Francesco Barbieri
                    </a>
                </div>
                <div className={styles.contactsRow}>
                    <svg className={styles.contactsIcon} aria-hidden="true" width="24" height="24" viewBox="0 0 18 18">
                        <path d="M17 4.04c-.59.26-1.22.44-1.88.52a3.3 3.3 0 0 0 1.44-1.82c-.64.37-1.34.64-2.09.79a3.28 3.28 0 0 0-5.6 2.99A9.3 9.3 0 0 1 2.12 3.1a3.28 3.28 0 0 0 1.02 4.38 3.28 3.28 0 0 1-1.49-.4v.03a3.29 3.29 0 0 0 2.64 3.22 3.34 3.34 0 0 1-1.48.06 3.29 3.29 0 0 0 3.07 2.28 6.58 6.58 0 0 1-4.85 1.36 9.33 9.33 0 0 0 5.04 1.47c6.04 0 9.34-5 9.34-9.33v-.42a6.63 6.63 0 0 0 1.63-1.7L17 4.04Z" fill="#2AA3EF"></path>
                    </svg>
                    <a href="https://twitter.com/fraaabarbieri" target="_blank">
                        @fraaabarbieri
                    </a>
                </div>
            </div>
            <p className={styles.copyright}>
                Thank you for visiting my blog!<br/>
                © Francesco Barbieri {year}
            </p>
        </footer>
    );
}
 
export default Footer;