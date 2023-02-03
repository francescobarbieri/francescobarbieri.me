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
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta http-equiv="x-ua-compatible" content="ie=edge" />
                <meta http-equip="content-language" content="en-US" data-react-helmet="true"/>
                
                <meta name="robots" content="noindex,nofollow" />

                <link rel="canonical" href="https://francescobarbieri.blog/unsub"/>
                <link rel="sitemap" type="application/xml" href="/sitemap.xml" />

                <meta name="description" content="Unsubscribe from the newsletter." key="desc" />

                <title>Unsubscribe | Francesco Barbieri's Blog</title>
                <link rel="icon" href="/favicon.ico" />
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