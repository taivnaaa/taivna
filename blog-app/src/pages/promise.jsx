import { useEffect, useState } from "react";

export default function Dining() {
const [articles, setArticles]= useState([]);

//   useEffect(() => {
//     fetch("https://dev.to/api/articles")
//       .then((response) => response.json())
//       .then((articles) => setArticles(articles));
//   }, []);
//   return (
//     <div>
//       {articles.map((article)=>{
//         return <div className=" border-2 rounded bg-green-900">{article.description}</div>
//       })}
//     </div>
//   );
useEffect(()=>{
    fetch("https://dev.to/api/articles").then((test)=>console.log(test))
},[])
return 
}
