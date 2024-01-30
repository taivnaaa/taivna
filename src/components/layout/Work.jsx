const workText = [
  {
    Head: "Fiskil",
    Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis  in faucibus orci luctus et ultrices posuere cubilia curae.",
  },
  {
    Head: "Fiskol",
    Text: "Loram ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis  in faucibus orci luctus et ultrices posuere cubilia curae.",
  },
  {
    Head: "Fiskiul",
    Text: "Lorum ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis  in faucibus orci luctus et ultrices posuere cubilia curae.",
  },
];
import { Project } from "../supps/WorkSlide";

export const Work = ({b}) => {
  return (
    <div ref={b} className=" px-8 my-24 mx-20 max-[768px]:mx-0">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center gap-y-4">
          <div className="bg-gray-200 rounded-xl w-32 justify-center flex text-gray-600  dark:text-[#D1D5DB] dark:bg-[#374151] ">
            Work
          </div>
          <div className=" text-lg text-gray-600 dark:text-[#D1D5DB]">
            Here is a quick summary of my most recent experiences:
          </div>
        </div>
        <div className="flex flex-col gap-y-14  mt-16" >
          {workText.map((el) => {
            return (
              <Project workHeader={el.Head} workText={el.Text}></Project>
            );
          })}
        </div>
      </div>
    </div>
  );
};
