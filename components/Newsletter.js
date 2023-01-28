import styles from '../styles/Newsletter.module.css';
import SectionTitle from './SectionTitle';

const Newsletter = () => {

    return (
        <section>
            <div className={styles.newsletter}>
                <SectionTitle
                    title="Newsletter"
                    icon="newsletter"
                />
                <p className={styles.newsletterSlogan}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <form className={styles.form}>
                    <div className={styles.inputContainer}>
                        <input
                            type="email"
                            placeholder='Email address'
                            className={styles.emailInput}
                        />
                        <svg className={styles.inputIcon} aria-hidden="true" width="18" height="18" viewBox="0 0 18 18">
                            <path d="m1 6 8 5 8-5V4L9 9 1 4c0-1.1.9-2 2-2h12c1.09 0 2 .91 2 2v10c0 1.09-.91 2-2 2H3c-1.09 0-2-.91-2-2V6Z"></path>
                        </svg>
                    </div>
                    <button
                        type='submit'
                        className={styles.submitButton}
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </section>
    );
}
 
export default Newsletter;