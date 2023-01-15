import '../styles/globals.css'
import {sourceSans} from '../components/fonts';
import { ThemeProvider } from 'next-themes';

export default function App ({Component, pageProps}) {
    return (
    <main className={sourceSans.className}>
        <ThemeProvider>
            <Component {...pageProps} />
        </ThemeProvider>
    </main>
    ) 
}