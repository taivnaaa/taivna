import { useState, useEffect } from "react";
export const Test = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("hello");
    document.title = `Count= ${count}`;
  });

  return (
    <div>
      <butto onClick={()=> setCount(count+1)} ></butto> 
      <h1>helo</h1>
    </div>
  );
};
export default Test;
