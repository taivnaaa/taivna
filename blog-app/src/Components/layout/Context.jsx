import { createContext, useEffect, useState } from "react";
export const Context = createContext([]);
const pageStatus = "9";

export const ArticleProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const [trending, setTrending] = useState([]);
  const [filteredArray, setFilteredArray]= useState(articles)
  const fetchData = async () => {
    try {
      const articles = await fetch("https://dev.to/api/articles?per_page=9");
      const trending = await fetch(
        `https://dev.to/api/articles?state=rising&per_page=4`
      );

      const articlesData = await articles.json();
      const trendingData = await trending.json();

      setArticles(articlesData);
      setTrending(trendingData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (event) => {
    const filteredArticles = articles.filter((article) => {
      article.title.toLowerCase().includes(event.target.value.toLowerCase());
    });
    setFilteredArray(filteredArticles);
  };

  return (
    <Context.Provider
      value={{ articles, handleSearch, trending, filteredArray}}
    >
      {children}
    </Context.Provider>
  );
};
