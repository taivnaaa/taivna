import { useContext } from "react";
import { Context } from "./Context";

export const Trending = () => {
  const {trending} = useContext(Context)

  return (
    <div>
      <div className=" mx-24 my-20 px-8"> 
        <div>Trending</div>
        <div>
          {trending.map((trending)=>{
            return (
              <img src={trending.cover_image} alt="" />
            )
          })}
        </div>
      </div>
    </div>
  );
};
