const logo1 = [
  { cardLogo: "../png/javscript.png", cardName: "Javascript" },
  { cardLogo: "../png/icon-typescript.png", cardName: "Typescript" },
  { cardLogo: "../png/icon-react.png", cardName: "react" },
  { cardLogo: "../png/icon-nextjs.png", cardName: "nextjs" },
  { cardLogo: "../png/icon-nodejs.png", cardName: "nodejs" },
  { cardLogo: "../png/express.png", cardName: "express" },
  { cardLogo: "../png/nest.png", cardName: "nest" },
  { cardLogo: "../png/icon-socket.png", cardName: "socket" },
];
const logo2 = [
  { cardLogo: "../png/icon-postgresql.png", cardName: "postresql" },
  { cardLogo: "../png/icon-mongodb.png", cardName: "mongodb" },
  { cardLogo: "../png/icon-sass.png", cardName: "sass" },
  { cardLogo: "../png/icon-tailwindcss.png", cardName: "tailwindcss" },
  { cardLogo: "../png/figma.png", cardName: "figma" },
  { cardLogo: "../png/cypress.png", cardName: "Cypress" },
  { cardLogo: "../png/icon-storybook.png", cardName: "storybook" },
  { cardLogo: "../png/git.png", cardName: "git" },
];
import { SkillLogo } from "../supps/logoo";

export const Skill = () => {
  return (
    <div className=" px-8 my-24 mx-20">
      <div className="flex  items items-center flex-col gap-y-4 mb-12">
        <div>
          <div className="bg-gray-200 rounded-xl w-32 justify-center flex  text-gray-600">
            Skills
          </div>
        </div>
        <div className=" text-gray-600 text-lg">
          The skills, tools and technologies I am really good at:
        </div>
      </div>
      <div className="flex flex-col items-center gap-y-16">
        <div className="flex gap-x-20">
          {/* <div> */}
          {logo1.map((el) => (
            <SkillLogo Logoo={el.cardLogo} Namee={el.cardName}></SkillLogo>
          ))}
          {/* </div> */}
        </div>
        <div className="flex gap-x-20">
          {/* <div> */}
          {logo2.map((el) => (
            <SkillLogo Logoo={el.cardLogo} Namee={el.cardName}></SkillLogo>
          ))}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};
