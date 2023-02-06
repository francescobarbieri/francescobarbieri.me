import Head from "next/head";
import styles from "../styles/Unsub.module.css";
import axios from "axios";
import { useRef, useState } from "react";
import { Alert } from "@mui/material";

export default function Unsub() {
    const [loading, setLoading] = useState(false);
    const [done, setDone] = useState(false);
    const [errMsg, setErrMsg] = useState(false);

    const [emailState, setEmailState] = useState();

    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta http-equiv="x-ua-compatible" content="ie=edge" />
                <meta
                    http-equip="content-language"
                    content="en-US"
                    data-react-helmet="true"
                />

                <meta name="robots" content="noindex,nofollow" />

                <link
                    rel="canonical"
                    href="https://francescobarbieri.blog/unsub"
                />
                <link
                    rel="sitemap"
                    type="application/xml"
                    href="/sitemap.xml"
                />

                <meta
                    name="description"
                    content="Unsubscribe from the newsletter."
                    key="desc"
                />

                <title>Unsubscribe | Francesco Barbieri's Blog</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.container}>
                <h3>Francesco Barbieri</h3>
                <br />
                <p>Please, insert your email here:</p>
                <br />
                <form
                    className={styles.form}
                    onSubmit={(e) =>
                        handleSubmit(
                            e,
                            emailState,
                            setLoading,
                            setDone,
                            setErrMsg
                        )
                    }
                >
                    {done ? (
                        <Alert
                            severity="success"
                            onClose={() => setDone(false)}
                        >
                            It's hard to let you go, but your email has been
                            removed.
                        </Alert>
                    ) : (
                        <>
                            <div>
                                <input
                                    type="email"
                                    className={`${styles.emailInput} ${
                                        errMsg ? styles.error : undefined
                                    }`}
                                    onChange={(item) =>
                                        setEmailState(item.target.value)
                                    }
                                    placeholder="Type your email"
                                />
                                {errMsg ? (
                                    <p className={styles.errorText}>
                                        Email not found
                                    </p>
                                ) : undefined}
                            </div>
                            <button
                                type="submit"
                                className={`${styles.submitButton} ${
                                    !loading ? undefined : styles.loading
                                }`}
                            >
                                {!loading ? "Remove" : "Loading"}
                            </button>
                        </>
                    )}
                </form>
            </div>
        </>
    );
}

function handleSubmit(e, emailState, setLoading, setDone, setErrMsg) {
    e.preventDefault();

    axios
        .post("/api/removeNewsletter", {
            email: emailState,
        })
        .then((response) => {
            console.log(response);
            setLoading(false);
            setDone(true);
            emailState = "";
        })
        .catch((error) => {
            console.log(error);
            setErrMsg(true);
        });
}
