import { useState, useEffect } from "react";
import ArticleService from "./service/ArticleService";
import Article from "./components/Article";

import styles from "./styles/article.module.css";

function App() {
  console.log(styles)
  const [articles, setArticles] = useState();

  useEffect(() => {
    const fetchArticles = () => {
      const response = ArticleService.getArticles();
      setArticles(response);
    }

    fetchArticles();
  }, [])

  return (
    <div className="App">
      <div className={styles['article-container']}>
      {articles && articles.map((article) => {
        return (
          <Article
            className="container"
            key={article.title}
            title={article.title}
            excerpt={article.excerpt}
            category={article.category}
            image={article.image}
          />
        )
      })}
      </div>
    </div>
  );
}

export default App;
