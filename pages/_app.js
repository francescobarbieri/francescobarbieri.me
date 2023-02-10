import "../styles/globals.css";
import { sourceSans } from "../components/fonts";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@500&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <main className={sourceSans.className}>
                <ThemeProvider>
                    <Component {...pageProps} />
                    <Analytics />
                </ThemeProvider>
            </main>
        </>
    );
}
