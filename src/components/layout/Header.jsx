export const Header = () => {
  return (
    <div className="f">
      <div className=" px-8 my-24 mx-20 flex  justify-between ">
        <div className="text-3xl">SS</div>
        <div className="gap-x-12 border-emerald-200 border-2 flex">
          <div className="flex gap-x-6  text-gray-600">
            <p>About</p>
            <p>Work</p>
            <p>Testimonials</p>
            <p>Contact</p>
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
