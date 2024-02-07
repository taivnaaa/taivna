import { useContext } from "react";
import { Context } from "./Context";
export const Header = () => {
  const {handleSearch}= useContext(Context)
  return (
    <div>
      <div className=" mx-24 px-8 flex justify-between mt-9 mb-24">
        <div>BMetaBLog</div>
        <div className="flex gap-x-6">
          <p>Home</p>
          <p>Blog</p>
          <p>Contact</p>
        </div>
        <input
          onChange={handleSearch}
          type="text"
          className=" bg-slate-200 rounded-md h-9"
        />
      </div>
    </div>
  );
};