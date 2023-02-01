import styles from "../styles/Newsletter.module.css";
import SectionTitle from "./SectionTitle";
import { useRef, createRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import axios from 'axios';

const Newsletter = () => {
    const emailRef = useRef();
    const recaptchaRef = useRef();
    const [loading, setLoading] = useState(false);
    const [done, setDone] = useState(false);

    return (
        <section>
            <div className={styles.newsletter}>
                <SectionTitle title="Newsletter" icon="newsletter" />
                <p className={styles.newsletterSlogan}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </p>
                <form
                    className={styles.form}
                    onSubmit={(e) => formSubmit(e, emailRef, recaptchaRef, setLoading, setDone)}
                >
                    <div className={styles.inputContainer}>
                        <input
                            type="email"
                            placeholder="Email address"
                            className={styles.emailInput}
                            ref={emailRef}
                            disabled={loading}
                        />
                        <svg
                            className={styles.inputIcon}
                            aria-hidden="true"
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                        >
                            <path d="m1 6 8 5 8-5V4L9 9 1 4c0-1.1.9-2 2-2h12c1.09 0 2 .91 2 2v10c0 1.09-.91 2-2 2H3c-1.09 0-2-.91-2-2V6Z"></path>
                        </svg>
                    </div>
                    <button type="submit" className={`${styles.submitButton} ${!loading ? undefined : styles.loading} ${done ? styles.done : undefined}`}>
                        {!loading ? 
                            <>
                                {done ? "Done" : "Subscribe"}
                            </>
                        : "Loading"}
                    </button>
                    <ReCAPTCHA
                        ref={recaptchaRef}
                        size="invisible"
                        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                        // real sitekey="6Lfpo_QjAAAAAON2uiE5fryrz_dqmr0IR26DwJeP"
                    />
                </form>
                <svg
                    className={styles.image}
                    aria-hidden="true"
                    width="238"
                    height="238"
                    viewBox="0 0 196 196"
                >
                    <path
                        d="m52.69 172.59.47.1c5.16 1.13 9.5 2.44 13.96 3.79 11.12 3.36 22.94 6.92 49.88 8.52 37.74 2.24 53.54-20.16 68-64 14.46-43.83-7.72-75.55-41.5-103-28.79-23.4-70.1-6.26-92.64 3.1-3.9 1.61-7.24 3-9.86 3.9-17.7 6.1-30.47 28.42-33.82 83.88-3.25 53.72 39.4 62.46 45.5 63.7ZM48 36a7 7 0 0 1 7-7h83a7 7 0 0 1 7 7v14h6a7 7 0 0 1 7 7v85a7 7 0 0 1-7 7H42a7 7 0 0 1-7-7V57a7 7 0 0 1 7-7h6V36Z"
                        opacity=".07"
                    ></path>
                    <path
                        d="m44 77.13 48.25 31.14a8 8 0 0 0 8.24-.07l50.21-33c5.41-3.3 12.29.66 12.29 7.06v65.51a8.18 8.18 0 0 1-8.11 8.24H52.1a8.18 8.18 0 0 1-8.11-8.24V77.13Z"
                        opacity=".2"
                    ></path>
                    <path d="M55 29a7 7 0 0 0-7 7v24a2 2 0 1 0 4 0V36a3 3 0 0 1 3-3h83a3 3 0 0 1 3 3v24a2 2 0 1 0 4 0V36a7 7 0 0 0-7-7H55Zm38 17a2 2 0 1 0 0 4h23a2 2 0 1 0 0-4H93Zm-49.24 8H42a3 3 0 0 0-3 3v5.92l57.5 37.69L154 62.92V57a3 3 0 0 0-3-3h-1.76a2 2 0 1 1 0-4H151a7 7 0 0 1 7 7v85a7 7 0 0 1-7 7H42a7 7 0 0 1-7-7V57a7 7 0 0 1 7-7h1.76a2 2 0 1 1 0 4ZM39 142a3 3 0 0 0 3 3h109a3 3 0 0 0 3-3V67.7l-41.95 27.5 33.34 32.36a2 2 0 1 1-2.78 2.88l-33.99-33-9.93 6.51a4 4 0 0 1-4.38 0l-9.93-6.5-32.97 32.96a2 2 0 0 1-2.82-2.82L80.96 95.2 39 67.7V142Zm52-83c0-1.1.9-2 2-2h36a2 2 0 1 1 0 4H93a2 2 0 0 1-2-2Zm0 11c0-1.1.9-2 2-2h23a2 2 0 1 1 0 4H93a2 2 0 0 1-2-2Zm75-40a2 2 0 0 1 2 2v4h4a2 2 0 1 1 0 4h-4v4a2 2 0 1 1-4 0v-4h-4a2 2 0 1 1 0-4h4v-4c0-1.1.9-2 2-2ZM44.48 166.79l4.24 4.24-4.24 4.24-4.25-4.24 4.25-4.24ZM19.17 40.34l8.49 8.49-8.49 8.48-8.48-8.48 8.48-8.49Zm-2.83 8.49 2.83 2.83L22 48.83 19.17 46l-2.83 2.83ZM77.23 42a4.5 4.5 0 0 0-4.16 3.77A4.77 4.77 0 0 0 68.7 42a4.43 4.43 0 0 0-3.52 1.54 4.82 4.82 0 0 0-1.13 3.8c0 4.4 5.5 8.47 7.8 10.18l.13.1c.61.51 1.49.51 2.1 0 .11-.1.23-.18.36-.28 2.3-1.75 7.57-5.76 7.57-10 0-2.35-.67-5.34-4.77-5.34Z"></path>
                </svg>
            </div>
        </section>
    );
};

async function formSubmit(e, emailRef, recaptchaRef, setLoading, setDone) {
    e.preventDefault();
    setLoading(true);

    const token = await recaptchaRef.current.executeAsync();

    axios.post("/api/addNewsletter", {
        email: emailRef.current.value,
        token: token,
    })
    .then((res) => {
        console.log(res)
        setLoading(false);
        setDone(true);
        emailRef.current.value = '';
    })
}

export default Newsletter;
