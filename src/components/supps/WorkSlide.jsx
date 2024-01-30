const bttn = [
  "React",
  "NextJs",
  "PostgreSQ",
  "Tailwindcss",
  "Figma",
  "Cypress",
  "Storybook",
];
import { GrayButton } from "./WorkButton";
export const Project = (props) => {
  return (
    <div className="max-w-[1500px] shadow-xl  flex flex-row max-[1024px]:flex-col max-[1024px]:flex rounded-md">
      <img
        className=" lg:w-1/2  max-[1024px]:w-[700] max-[768px]:py-6 max-[768px]:px-6 py-12 px-12 bg-slate-100 rounded-lg"
        src="/Picture.png"
        alt=""
      />
      <div className="lg:w-1/2 py-12 px-12 rounded-lg flex flex-col gap-y-7 ">
        <p className=" dark:text-[#D1D5DB] font-semibold text-xl text-gray-900 ">
          {props.workHeader}
        </p>
        <p className=" text-gray-600 dark:text-[#D1D5DB]">{props.workText}</p>
        <div className="flex flex-wrap gap-x-2 gap-2">
          {bttn.map((el) => {
            return <GrayButton tovch={el}></GrayButton>;
          })}
        </div>
        <div><img src="/Iiicon.png" alt="" className=" w-6 h-5" /></div>
      </div>
    </div>
  );
};
