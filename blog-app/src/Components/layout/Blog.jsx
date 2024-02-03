import { useEffect, useState } from "react";

export const Blog = () => {
  const [articles, setArticles] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch("https://dev.to/api/articles?per_page=9");
      const data = await res.json();
      setArticles(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className=" mx-24 px-8 my-20 ">
      <div className=" font-bold text-2xl">All BLog Post </div>
      <div className="flex gap-x-7 my-8">
        <p>All</p>
        <p>Design</p>
        <p>Travel</p>
        <p>Fashion</p>
        <p>Technology</p>
        <p>Branding</p>
      </div>
      <div className="grid grid-cols-3 grid-rows-3 gap-x-7 gap-y-7">
        {articles.map((article) => {
          return (
            <div className=" border-2 rounded-md ">
              <div className="flex flex-col m-3 gap-y-3 ">
                <img src={article.cover_image} alt="" className="" />
                <div>Technology</div>
                <div>{article.title}</div>
                <div>{article.readable_publish_date}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
