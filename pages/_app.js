import '../styles/globals.css'
import {sourceSans} from '../components/fonts';

export default function App ({Component, pageProps}) {
    return (
    <main className={sourceSans.className}>
        <Component {...pageProps} />
    </main>
    ) 
}