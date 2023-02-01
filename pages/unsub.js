import Head from "next/head";
import styles from '../styles/Unsub.module.css';
import { robotoSlab } from "../components/fonts";
import axios from 'axios';
import { useRef } from "react";

export default function Unsub() {

    const emailRef = useRef();

    return (
        <>
            <Head>
                <title>Unsubscribe from newsletter - Francesco Barbieri</title>
            </Head>
            <div className={styles.container}>
                <h3 className={robotoSlab.className}>Francesco Barbieri</h3>
                <br/>
                <p>Please, insert your email here:</p>
                <br/>
                <form className={styles.form} onSubmit={(e) => handleSubmit(e, emailRef)}>
                    <input type="email" className={styles.emailInput} ref={emailRef}/>
                    <button type="submit" className={styles.submitButton}>Remove</button>
                </form>
            </div>
        </>
    );
}


function handleSubmit (e, emailRef) {
    e.preventDefault();

    axios.post('/api/removeNewsletter', {
        email: emailRef.current.value,
    })
    .then((response) => {
        console.log(response);
    })
}