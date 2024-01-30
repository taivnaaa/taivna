export const Profile = () => {
  return (
    <div className="max-w-1800 px-8 my-24 mx-20 max-[768px]:mx-0">
      <div className="flex  max-[1044px]:flex max-[1044px]:flex-col-reverse max-[1044px]:gap-y-5">
        <div className="min-[1044px]:w-1/2 flex flex-col gap-y-12 pr-8">
          <div className="flex flex-col gap-y-3 ">
            <p className="text-6xl font-bold">Hi, I'm Baldan 👋</p>
            <div className="text-gray-600 dark:text-[#D1D5DB]">
              I'm a full stack developer (React.js & Node.js) with a focus on
              creating (and occasionally designing) exceptional digital
              experiences that are fast, accessible, visually appealing, and
              responsive. Even though I have been creating web applications for
              over 7 years, I still love it as if it was something new. I'm a
              full stack developer (React.js & Node.js) with a focus on creating
              (and occasionally designing) exceptional digital experiences that
              are fast, accessible, visually appealing, and responsive. Even
              though I have been creating web applications for over 7 years, I
              still love it as if it was something new.
            </div>
          </div>
          <div className="flex flex-col gap-y-2">
            <div className="flex flex-row">
              <img src="/iicon.png" alt="" />
              <div>Ahmedabad, India</div>
            </div>
            <div>
              <div></div>
              <div>Available for new projects</div>
            </div>
          </div>
          <div className="flex gap-x-2">
            <img src="/icoon.png" alt="" />
            <img src="/iconn.png" alt="" />
            <img src="iccon.png" alt="" />
          </div>
        </div>
        <div className="min-[1044px]:w-1/2  flex justify-center ">
          <img src="/Pinguin.jpeg" className=" rounded" width={400} height={200} />
          <div className="size-{400px} bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
};
