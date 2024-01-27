import React from "react";
import useDownloader from "react-use-downloader";
import { useState } from "react";

export const Header = (props) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const { download } = useDownloader();
  const fileUrl =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDu4a_yDWu5Y8zsg-Oh9eRzvbun6Upgpx9dg&usqp=CAU";
  const filename = "Gojo-satoru sbren sbeve.jpg";
  return (
    <div>
      <div className="px-8 my-24 mx-20 flex  justify-between max-[768px]:mx-0">
        <div className="text-3xl font-bold"> &lt;SS/&gt;</div>

        <div className="md:hidden max-[875px]:inline-block pt-2">
          <img onClick={toggleMenu} src="/header.png" alt="" />

          {showMenu && (
            <div className="">
              <div
                onClick={toggleMenu}
                className=" bg-gray-200 w-screen h-screen fixed left-0 top-0 flex justify-end"
              ></div>

              <div className=" fixed top-0 right-0 bg-white h-screen w-10/12 ">
                <div className="flex flex-row justify-between px-4 border-b-2 border-b-gray-200 py-5">
                  <div className="text-3xl font-bold"> &lt;SS/&gt;</div>
                  <img
                    src="/quit.png"
                    className=" size-7 mt-2 "
                    onClick={toggleMenu}
                  />
                </div>
                <div className="flex flex-col items-start px-4 border-b-2 border-b-gray-200 py-5 gap-y-3">
                  <button>About</button>
                  <button>Work</button>
                  <button>Testimonials</button>
                  <button>Contact</button>
                </div>
                <div className="px-4 border-b-2 border-b-gray-200 py-5  flex flex-col gap-y-3">
                  <div>Switch theme</div>
                  <button
              onClick={() => download(fileUrl, filename)}
              className="rounded-lg bg-gray-900 text-white w-[136px] flex items-center justify-center"
            >
              Download CV
            </button>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="gap-x-12 flex max-[875px]:hidden">
          <div className="xl: flex gap-x-6  text-gray-600  ">
            <button onClick={props.a}>About</button>
            <button onClick={props.b}>Work</button>
            <button onClick={props.c}>Testimonials</button>
            <button onClick={props.d}>Contact</button>
          </div>
          <div className="flex gap-x-4 ">
            <img src="/icon.png" className=" size-7 mt-1" />

            <button
              onClick={() => download(fileUrl, filename)}
              className="rounded-xl bg-gray-900 text-white w-[136px] flex items-center justify-center"
            >
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
