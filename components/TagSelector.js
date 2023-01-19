import styles from '../styles/TagSelector.module.css';
import { robotoSlab } from './fonts';

const TagSelector = ({setTag, currentTag, tags}) => {

    return (
        <div className={styles.tagWrapper}>
            <p className={[styles.sectiontitle, robotoSlab.className].join(" ")}>Filter articles by tag</p>
            <div>
                <p className={styles.tag} onClick={() => setTag('All')}>All</p>
                { tags ? tags.map( () => {

                }) : ''              
                }
            </div>
            <p className={[styles.sectiontitle, robotoSlab.className].join(" ")}>{currentTag} articles</p>
        </div>
    );
}
 
export default TagSelector;