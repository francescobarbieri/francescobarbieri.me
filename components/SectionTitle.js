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
            return (<svg aria-hidden="true" class="svg-spot spotMention" width="48" height="48" viewBox="0 0 48 48"><circle opacity=".2" cx="25.5" cy="25.5" r="18.5"></circle><path d="M24.81 5.09C11.88 3.73 4.68 13.19 4.14 21.87c-.55 8.57 4.5 18.96 15.96 20.89a18.78 18.78 0 0 0 12.42-2.08 1 1 0 0 0-.91-1.77 16.8 16.8 0 0 1-11.18 1.88c-10.19-1.72-14.8-10.95-14.3-18.8C6.62 14.25 13 5.86 24.6 7.08A16.57 16.57 0 0 1 39.97 24.9c-.28 2.75-1.14 4.68-2.16 5.87-1.01 1.19-2.15 1.6-3.1 1.5-1.58-.18-2.5-.86-3.08-1.8-.6-1-.86-2.37-.85-4 .03-3.23 1.14-6.99 1.95-9.25a1 1 0 0 0-1.88-.68c-.4 1.11-.88 2.6-1.28 4.26a6.67 6.67 0 0 0-5.63-4.74c-2.9-.3-8.42.8-8.99 8-.56 7.22 4.06 9.25 7.12 9.7 2.45.37 5.4-.78 6.94-4.67.18.87.47 1.69.91 2.42.91 1.5 2.4 2.5 4.56 2.75 1.76.2 3.51-.62 4.85-2.19 1.34-1.57 2.31-3.92 2.63-6.96A18.57 18.57 0 0 0 24.81 5.1Zm3.08 20.28c-.4 3-1.42 4.64-2.4 5.5a3.82 3.82 0 0 1-3.12.92 6.8 6.8 0 0 1-3.8-1.76c-.99-.98-1.87-2.68-1.62-5.8.24-3.05 1.46-4.52 2.69-5.3a6.68 6.68 0 0 1 4.09-.89c.98.1 2.18.61 3.04 1.67.82 1.02 1.5 2.76 1.12 5.66Z"></path></svg>)
            break;
        default:
            return ('');
            break;
    }
}

export default SectionTitle;