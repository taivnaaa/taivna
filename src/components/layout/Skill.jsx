const logo1 = [
  { cardLogo: "../png/javscript.png", cardName: "Js" },
  { cardLogo: "../png/icon-typescript.png", cardName: "Ts" },
  { cardLogo: "../png/icon-react.png", cardName: "react" },
  { cardLogo: "../png/icon-nextjs.png", cardName: "nextjs" },
  { cardLogo: "../png/icon-nodejs.png", cardName: "nodejs" },
  { cardLogo: "../png/express.png", cardName: "EX" },
  { cardLogo: "../png/nest.png", cardName: "nest" },
  { cardLogo: "../png/icon-socket.png", cardName: "socket" },
];
const logo2 = [
  { cardLogo: "../png/icon-postgresql.png", cardName: "postql" },
  { cardLogo: "../png/icon-mongodb.png", cardName: "mondb" },
  { cardLogo: "../png/icon-sass.png", cardName: "sass" },
  { cardLogo: "../png/icon-tailwindcss.png", cardName: "tailwindc" },
  { cardLogo: "../png/figma.png", cardName: "figma" },
  { cardLogo: "../png/cypress.png", cardName: "Cypress" },
  { cardLogo: "../png/icon-storybook.png", cardName: "S" },
  { cardLogo: "../png/git.png", cardName: "git" },
];
import { SkillLogo } from "../supps/SkillsLogoo";

export const Skill = ({ c }) => {
  return (
    <div ref={c} className=" mx-20 my-24 max-[768px]:mx-0 max-[768px]:px-4">
      <div className="flex  items items-center flex-col gap-y-4 mb-12">
        <div>
          <div className="bg-gray-200 rounded-xl w-32 justify-center flex  text-gray-600  dark:text-[#D1D5DB] dark:bg-[#374151]">
            Skills
          </div>
        </div>
        <div className=" text-gray-600 text-lg dark:text-[#D1D5DB]">
          The skills, tools and technologies I am really good at:
        </div>
      </div>
      <div className=" flex flex-col items-center gap-y-4">
        <div className="flex gap-x-16  flex-wrap gap-y-4  max-[768px]:gap-x-6 ">
          {logo1.map((el) => (
            <SkillLogo Logoo={el.cardLogo} Namee={el.cardName}></SkillLogo>
          ))}
        </div>
        <div className="flex gap-x-16 flex-wrap  max-[768px]:gap-x-6  ">
          {logo2.map((el) => (
            <SkillLogo Logoo={el.cardLogo} Namee={el.cardName}></SkillLogo>
          ))}
        </div>
      </div>
    </div>
  );
};
