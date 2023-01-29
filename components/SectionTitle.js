import styles from '../styles/SectionTitle.module.css';
import { robotoSlab } from './fonts';

// icon = 'contacts' | 'latest' | 'newsletter' | 'about' | 'reading';

const SectionTitle = ({title, icon}) => {

    return (
        <div className={styles.sectionTitle}>
            {printIcon(icon)}
            <h2 className={robotoSlab.className}>{title}</h2>
        </div>
    );
}

function printIcon (icon) {
    switch(icon){
        case 'contacts':
            return (<svg aria-hidden="true" width="48" height="48" viewBox="0 0 48 48"><circle opacity=".2" cx="25.5" cy="25.5" r="18.5"></circle><path d="M24.81 5.09C11.88 3.73 4.68 13.19 4.14 21.87c-.55 8.57 4.5 18.96 15.96 20.89a18.78 18.78 0 0 0 12.42-2.08 1 1 0 0 0-.91-1.77 16.8 16.8 0 0 1-11.18 1.88c-10.19-1.72-14.8-10.95-14.3-18.8C6.62 14.25 13 5.86 24.6 7.08A16.57 16.57 0 0 1 39.97 24.9c-.28 2.75-1.14 4.68-2.16 5.87-1.01 1.19-2.15 1.6-3.1 1.5-1.58-.18-2.5-.86-3.08-1.8-.6-1-.86-2.37-.85-4 .03-3.23 1.14-6.99 1.95-9.25a1 1 0 0 0-1.88-.68c-.4 1.11-.88 2.6-1.28 4.26a6.67 6.67 0 0 0-5.63-4.74c-2.9-.3-8.42.8-8.99 8-.56 7.22 4.06 9.25 7.12 9.7 2.45.37 5.4-.78 6.94-4.67.18.87.47 1.69.91 2.42.91 1.5 2.4 2.5 4.56 2.75 1.76.2 3.51-.62 4.85-2.19 1.34-1.57 2.31-3.92 2.63-6.96A18.57 18.57 0 0 0 24.81 5.1Zm3.08 20.28c-.4 3-1.42 4.64-2.4 5.5a3.82 3.82 0 0 1-3.12.92 6.8 6.8 0 0 1-3.8-1.76c-.99-.98-1.87-2.68-1.62-5.8.24-3.05 1.46-4.52 2.69-5.3a6.68 6.68 0 0 1 4.09-.89c.98.1 2.18.61 3.04 1.67.82 1.02 1.5 2.76 1.12 5.66Z"></path></svg>);
            break;
        case 'newsletter':
            return(<svg aria-hidden="true" width="48" height="48" viewBox="0 0 48 48"><path opacity=".2" d="m4 20.5 17.47 10.11a3 3 0 0 0 3.05-.02l17.94-11.36A3 3 0 0 1 47 21.8V44a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V20.5Z"></path><path d="M8 13a1 1 0 1 1-2 0V4a3 3 0 0 1 3-3h28a3 3 0 0 1 3 3v9a1 1 0 1 1-2 0V4a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v9Zm8.16-7c-.8.04-1.48.62-1.62 1.41-.2-.8-.9-1.37-1.71-1.4a1.76 1.76 0 0 0-1.81 2c0 1.64 2.14 3.17 3.04 3.8l.05.04c.24.2.58.2.82 0l.14-.1c.9-.66 2.95-2.16 2.95-3.75 0-.88-.26-2-1.86-2ZM41 10a1 1 0 0 0 1 1 1 1 0 0 1 1 1v2L23.96 26.2a2 2 0 0 1-2.07 0L3 14.1V12a1 1 0 0 1 1-1 1 1 0 1 0 0-2 3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h38a3 3 0 0 0 3-3V12a3 3 0 0 0-3-3 1 1 0 0 0-1 1ZM4 43a1 1 0 0 1-1-1V16.43l14.01 9.14L6.3 37.3a1 1 0 1 0 1.42 1.42l11-12a1 1 0 0 0 .06-.07l2.08 1.26a4 4 0 0 0 4.15 0l2.18-1.32a1 1 0 0 0 .11.13l12 12a1 1 0 0 0 1.42-1.42L28.93 25.52 43 16.34V42a1 1 0 0 1-1 1H4ZM21 8a1 1 0 0 0 1 1h8a1 1 0 1 0 0-2h-8a1 1 0 0 0-1 1Zm1 6a1 1 0 1 1 0-2h13a1 1 0 1 1 0 2H22Zm-1 4a1 1 0 0 0 1 1h8a1 1 0 1 0 0-2h-8a1 1 0 0 0-1 1Z"></path></svg>);
            break;
        case 'latest':
            return(<svg aria-hidden="true" width="48" height="48" viewBox="0 0 48 48"><path d="M16 30.33 21.14 35l12.87-12.93 3.34-3.35 4.57-5.02L44 7l-6.65 2.64-5.2 4.62L16 30.33ZM8.08 47.7 15 40.57 10.43 36l-7.14 7.12c-.39.32-.39.95 0 1.34L6.7 47.7c.3.4.98.4 1.37 0Z" opacity=".2"></path><path d="M46.92 2.4a1 1 0 0 0-1.22-1.35l-7.47 2.32a1 1 0 0 0-.4.24l-5.37 5.33.2-.7a1 1 0 0 0-.57-1.19l-5.46-2.3a1 1 0 0 0-1.25.4L23.3 8.64a15 15 0 0 0-2.92 0l-1.97-3.5a1 1 0 0 0-1.25-.44L11.7 6.92a1 1 0 0 0-.6 1.19l1.04 3.86a14.5 14.5 0 0 0-2.1 2.07l-3.88-1.08a1 1 0 0 0-1.2.57l-2.31 5.5a1 1 0 0 0 .42 1.25l3.49 2.03c-.09.99-.09 1.97 0 2.93l-3.5 1.97a1 1 0 0 0-.44 1.25l2.22 5.47a1 1 0 0 0 1.18.6l.93-.25-4.65 4.68a1 1 0 0 0 .02 1.42l4.5 4.34a1 1 0 0 0 1.38 0l3.92-3.77 4.83 2.03a1 1 0 0 0 1.25-.41l2.03-3.49c.94.1 1.87.16 2.83.1l2.24 3.5a1 1 0 0 0 1.25.38l2.6-1.17 2.64-1.14a1 1 0 0 0 .58-1.13l-.82-3.88c.77-.63 1.39-1.34 1.97-2.07l3.9 1.06a1 1 0 0 0 1.18-.58l1.14-2.72.02-.05 1-2.78a1 1 0 0 0-.43-1.19l-3.4-2.05c.11-.9.21-1.82.16-2.8l3.44-2.27a1 1 0 0 0 .38-1.21l-1.05-2.58a1 1 0 0 0-.05-.1l-.92-1.7a1.03 1.03 0 0 0-.06-.1l4.89-4.9a1 1 0 0 0 .2-.3l3-7ZM30.5 8.54l-.99 3.4-1.8 1.81a1 1 0 0 0-.38-.38A11 11 0 1 0 33 23c0-.6-.03-.99-.17-1.38l-.15-.37-.03-.07a6.94 6.94 0 0 1-.13-.3l3.19-3.17 1.64-1.64.67 1.24.71 1.76-3.25 2.15a1 1 0 0 0-.44.96c.14 1.1 0 2.1-.17 3.4l-.02.17a1 1 0 0 0 .47.99l3.27 1.96-.71 1.98-.8 1.89-3.69-1a1 1 0 0 0-1.05.35 11.76 11.76 0 0 1-2.48 2.59 1 1 0 0 0-.4 1.03l.77 3.7-1.9.82h-.01l-1.8.82-2.1-3.3a1 1 0 0 0-.98-.45c-1.17.15-2.3.06-3.62-.12a1 1 0 0 0-1 .5L16.9 40.8l-3.87-1.64 1.02-3.67a1 1 0 0 0-.35-1.05 12.52 12.52 0 0 1-2.6-2.66 1 1 0 0 0-1.08-.39l-3.67.98-1.56-3.85 3.3-1.86a1 1 0 0 0 .51-1c-.15-1.22-.16-2.5 0-3.75a1 1 0 0 0-.48-1L4.82 19l1.64-3.88 3.67 1.02a1 1 0 0 0 1.06-.34c.8-1.03 1.66-1.92 2.65-2.6a1 1 0 0 0 .4-1.08l-.98-3.68 3.84-1.56 1.86 3.31a1 1 0 0 0 1 .5 14.5 14.5 0 0 1 3.73 0 1 1 0 0 0 1-.48l1.96-3.28 3.85 1.62Zm.48 13.86c0 .1.02.27.02.59a9 9 0 0 1-9.64 8.98l9.62-9.57Zm-11.93 9.1a9.02 9.02 0 0 1-3.74-2.5 1 1 0 0 0 .4-.24L31 13.3l2.88-2.94 4.05-4.02L41.1 9.5l-6.8 6.8-15.07 15a1 1 0 0 0-.17.2Zm-4.86-4.03a9 9 0 0 1 12.17-12.35L14.3 27.36l-.1.12Zm-6.46 8.84 2.45-2.46c.54.63 1.14 1.2 1.77 1.73l-1.05 3.74-.09.09a1 1 0 0 0-.1-.13l-2.98-2.97ZM42.36 7.95 39.5 5.07l4.74-1.47-1.87 4.35ZM9.3 40.7l.1.08-1.89 1.82-3.07-2.96 1.9-1.91L9.3 40.7Z"></path></svg>);
            break;
        case 'about':
            return(<svg aria-hidden="true" class="svg-spot spotForYou" width="48" height="48" viewBox="0 0 48 48"><path d="M28.88 25.03a6.24 6.24 0 1 0-4.78-.05c-7.1.96-7.1 6.95-7.1 14l7 1.52 7-1.52c1.5-.98 5.23-3.48 5.23-3.48-.17-5.47-1.21-9.59-7.35-10.47Z" opacity=".2"></path><path d="M22.9 3a1 1 0 0 1 1-1h.2a1 1 0 0 1 0 2h-.2a1 1 0 0 1-1-1Zm19.91 9.61a1 1 0 0 0-1.7 1.05A19.6 19.6 0 0 1 44 24c0 9.55-6.77 17.6-15.71 19.55a1 1 0 1 0 .42 1.95A22.07 22.07 0 0 0 46 24a21.6 21.6 0 0 0-3.19-11.39ZM23.92 44a1 1 0 1 0 0 2h.14a1 1 0 1 0 0-2h-.14Zm-4.2-39.54a1 1 0 0 0-.44-1.95A22.03 22.03 0 0 0 2 24a21.6 21.6 0 0 0 3.19 11.38 1 1 0 0 0 1.7-1.04A19.6 19.6 0 0 1 4 24c0-9.55 6.7-17.54 15.72-19.54ZM7.42 23a1 1 0 0 1 1 1 15.58 15.58 0 0 0 31.16 0 1 1 0 0 1 2 0 17.58 17.58 0 1 1-35.16 0 1 1 0 0 1 1-1ZM24 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm-5 7a5 5 0 1 1 10 0 5 5 0 0 1-10 0Zm-6 20a1 1 0 1 0 2 0h-2Zm10.64-13-.02 1 .02-1ZM32 37a1 1 0 0 0 2 0h-2Zm1-5.55h1v-.07l-.01-.08-.99.15ZM23.62 25c3.2.06 5.11.8 6.3 1.87 1.17 1.08 1.79 2.64 2.09 4.72l1.98-.29c-.33-2.28-1.06-4.38-2.73-5.9-1.68-1.53-4.13-2.33-7.6-2.4l-.04 2ZM34 37v-5.55h-2V37h2Zm-19 0v-.25l-.02-.1a1.88 1.88 0 0 0-.5-.67c-.72-.1-1.39.46-1.44.6a1.78 1.78 0 0 0-.04.21v.29c.03.1.9.87 1.88.36A1.96 1.96 0 0 0 15 37v-.18l-2-.01v.13-.08c0-.03.05-.23.13-.4.96-.5 1.85.27 1.86.37v.07l.01.03v.01-.07.05a1.91 1.91 0 0 1-.04.2c-.05.15-.72.7-1.44.61a2 2 0 0 1-.5-.67l-.01-.1v-.08c0-.01 0-.02 0 0V37h2Zm0-.18c.01-3.66.16-6.63 1.28-8.7a5.21 5.21 0 0 1 2.43-2.3c1.15-.54 2.72-.86 4.91-.82l.04-2c-2.38-.04-4.3.3-5.8 1.02a7.2 7.2 0 0 0-3.34 3.15c-1.4 2.58-1.5 6.1-1.52 9.64h2Zm0 .18v-.19h-2V37h2Z"></path></svg>);
            break;
        case 'readings':
            return(<svg aria-hidden="true" class="svg-spot spotSchool" width="48" height="48" viewBox="0 0 48 48"><path d="M23.16 9.55 5.28 16.7c-.3.12-.3.53-.02.66l17.88 8.08c.1.05.2.05.3 0L38.5 18.5l3.23-1.51a.36.36 0 0 0-.03-.66L23.41 9.55a.36.36 0 0 0-.25 0Zm-1.54 31.36L5.69 32.6a.36.36 0 0 1-.19-.32v-8.2c0-.27.28-.44.51-.33l15.62 7.67c.1.05.21.05.32 0l15.03-7.66c.24-.12.52.06.52.32v8.2c0 .14-.07.26-.19.32l-15.36 8.31a.36.36 0 0 1-.33 0Zm20.52-6.46-1.08 3.09a1 1 0 0 0 1.12 1.3l2-.35a1 1 0 0 0 .78-1.3l-.93-2.73a1 1 0 0 0-1.9 0Z" opacity=".2"></path><path d="M21.01 9.07 5.02 15.56 21 22.9l14.58-6.8a1 1 0 1 1 .84 1.8l-14.85 6.94c-.36.16-.78.17-1.14 0l-17.6-8.09a1.36 1.36 0 0 1 .06-2.49l17.6-7.13c.32-.13.67-.14 1-.02l19.63 7.37c.53.2.88.7.88 1.27V27a1 1 0 1 1-2 0V16.2L21.01 9.06ZM4 21.07c0-1 1.05-1.66 1.96-1.21l15.32 7.52 14.75-7.5c.9-.47 1.97.19 1.97 1.2v8.2c0 .5-.27.96-.71 1.2l-15.36 8.3c-.4.22-.88.23-1.28.02L4.73 30.49c-.45-.24-.73-.7-.73-1.2v-8.22Zm2 1.04v6.78l15.28 7.98L36 28.9v-6.77l-14.1 7.18c-.38.2-.83.2-1.22 0L6 22.12Zm36.44 8.33a1.43 1.43 0 0 0-2.7 0L37.8 36a1.43 1.43 0 0 0 1.6 1.88l3.62-.65a1.43 1.43 0 0 0 1.1-1.87l-1.68-4.92ZM40 35.74l1.07-3.08.93 2.72-2 .36Z"></path></svg>);
            break;
        case 'archiveArticles':
            return(<svg aria-hidden="true" width="48" height="48" viewBox="0 0 48 48"><path opacity=".2" d="M4 15.76c0-.46.36-.76.72-.76h37.56c.36 0 .72.3.72.76v6.48c0 .46-.36.76-.72.76H4.72a.74.74 0 0 1-.72-.76v-6.48Z"></path><path d="M37 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM7 7c0-1.1.9-2 2-2h35a2 2 0 0 1 2 2v33a2 2 0 0 1-2 2h-2v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h5v-1H2a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h5v-2H2a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h5V7Zm37 33V11H9v1h32a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H9v2h32a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H9v1h32a1 1 0 0 1 1 1v4h2ZM9 9h8V7H9v2Zm10 0h25V7H19v2ZM3 14v6h37v-6H3Zm0 12v6h37v-6H3Zm0 11v6h37v-6H3Z"></path></svg>)
            break;
        case 'search':
            return(<svg aria-hidden="true" width="48" height="48" viewBox="0 0 48 48"><path opacity=".2" d="M29.22 38.1a3.4 3.4 0 0 1 4.81-4.82l8.81 8.81a3.4 3.4 0 0 1-4.81 4.81l-8.81-8.8Z"></path><path d="M18.5 5a1 1 0 1 0 0 2c.63 0 1.24.05 1.84.15a1 1 0 0 0 .32-1.98A13.6 13.6 0 0 0 18.5 5Zm7.02 1.97a1 1 0 1 0-1.04 1.7 11.5 11.5 0 0 1 5.44 8.45 1 1 0 0 0 1.98-.24 13.5 13.5 0 0 0-6.38-9.91ZM18.5 0a18.5 18.5 0 1 0 10.76 33.55c.16.57.46 1.12.9 1.57L40 44.94A3.5 3.5 0 1 0 44.94 40l-9.82-9.82c-.45-.45-1-.75-1.57-.9A18.5 18.5 0 0 0 18.5 0ZM2 18.5a16.5 16.5 0 1 1 33 0 16.5 16.5 0 0 1-33 0Zm29.58 15.2a1.5 1.5 0 1 1 2.12-2.12l9.83 9.83a1.5 1.5 0 1 1-2.12 2.12l-9.83-9.83Z"></path></svg>)
            break;
        default:
            return ('');
            break;
    }
}

export default SectionTitle;