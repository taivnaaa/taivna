export const Profile = () => {
  return (
    <div className="max-w-1800 border-emerald-200 border-2 px-8 my-24 mx-20">
      <div className="flex flex-row">
        <div className="w-1/2 flex flex-col gap-y-12">
          <div className="flex flex-col gap-y-2">
            <p className="text-6xl font-bold">Hi, I'm Saarlaa 👋</p>
            <div className="text-gray-600 ">
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
          <div className="flex">
            <img src="/icoon.png" alt="" />
            <img src="/iconn.png" alt="" />
            <img src="iccon.png" alt="" />
          </div>
        </div>
        <div className="w-1/2 flex justify-center">
          <img src="/Pick.png" width={400} height={200} />
          <div className="size-{400px} bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
};
