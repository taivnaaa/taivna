const bttn = [
  {React},
  {NextJs},
  {PostgreSQ},
  {Tailwindcss},
  {Figma},
  {Cypress},
  {Storybook},
];
import { Buttoon } from "../supps/buttn";

export const Work = () => {
  return (
    <div className="px-8 my-24 mx-20">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center gap-y-4">
          <div className="bg-gray-200 rounded-xl w-32 justify-center flex text-gray-600 ">
            Experience
          </div>
          <div className=" text-lg text-gray-600">
            Here is a quick summary of my most recent experiences:
          </div>
        </div>
        <div className="w-[1500px] shadow-xl  flex flex-row">
          <img
            className=" w-1/2 py-12 px-12 bg-slate-100 rounded-lg"
            src="/Picture.png"
            alt=""
          />
          <div className="w-1/2 py-12 px-12 rounded-lg flex flex-col ">
            <p className="  font-semibold text-xl text-gray-900 mb-3">
              Full Stack Developer
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia curae.
            </p>
            <div className="flex flex-wrap">
              {bttn.map((el) => {
                for (let i = 0; i < el.length; i++) {
                  return <Buttoon tovch={el[i]}></Buttoon>;
                }
              })}
            </div>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
