
import styles from "../styles/article.module.css";

const Article = ({ title, excerpt, category, image }) => {
    return (
        <div className={styles["article"]}>
            <img className={styles["article-image"]} src={`${image}`} alt={title} />
            <h3 className={styles["article-title"]}>{title}</h3>
            <p className={styles["article-excerpt"]}>{excerpt}</p>
            <p className={styles["article-category"]}>
                <span className={styles["article-pipline"]}></span>
                {category}
            </p>
        </div>
    )
}

export default Article;