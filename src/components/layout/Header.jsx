export const Header = (props) => {
  return (
    <div >
      <div className=" xl: px-8 my-24 mx-20 flex  justify-between ">
        <div className="text-3xl"> &lt;SS/&gt;</div>
        <div className="gap-x-12 flex">
          <div className="xl: flex gap-x-6  text-gray-600 sm: hidden ">
            <button onClick={props.a}>About</button>
            <button onClick={props.b}>Work</button>
            <button onClick={props.c}>Testimonials</button>
            <button onClick={props.d}>Contact</button>
          </div>
          <div className="flex gap-x-4">
            <img src="/icon.png" width={34} height={24} />
            <div className="rounded-xl bg-gray-900 text-white w-[136px] flex items-center justify-center">
              Download CV
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
