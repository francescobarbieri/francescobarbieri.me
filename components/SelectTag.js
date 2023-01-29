import styles from "../styles/SelectTag.module.css";

const SelectTag = (props) => {
    const { handle, tags, tag, pageHandler } = props;

    tags.unshift("All");

    return (
        <div className={styles.tagContainer}>
            {tags.map((item) => {
                if (item === tag) {
                    return (
                        <button
                            className={[styles.tag, styles.selected].join(" ")}
                            onClick={() => {
                                handle(item);
                                pageHandler(1);
                            }}
                            key={item}
                        >
                            {item}
                        </button>
                    );
                } else {
                    return (
                        <button
                            className={styles.tag}
                            onClick={() => {
                                handle(item);
                                pageHandler(1);
                            }}
                            key={item}
                        >
                            {item}
                        </button>
                    );
                }
            })}
        </div>
    );
};

export default SelectTag;
