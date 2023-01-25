import styles from '../styles/TagSelector.module.css';
import { robotoSlab } from './fonts';

const TagSelector = ({setTag, tags}) => {

    console.log(tags)

    return (
        <div className={styles.tagWrapper}>
            <p className={[styles.sectiontitle, robotoSlab.className].join(" ")}>Filter articles by tag</p>
            <div className={styles.tagContainer}>
                <p className={styles.tag} onClick={() => setTag('All')}>All</p>
                {
                    tags.map( (tag) => (
                        <p className={styles.tag} onClick={() => setTag(tag)}>{tag}</p>
                    ))
                }
            </div>
        </div>
    );
}
 
export default TagSelector;