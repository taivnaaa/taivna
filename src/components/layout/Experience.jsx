const wordsArr = [
  {
    First: "Sr. Frontend Developer",
    Second: {
      One: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      Two: "Ut pretium arcu et massa semper, id fringilla leo semper.",
      Three: "Sed quis justo ac magna.",
      Four: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    Last: "Nov 2021 - Present",
  },
  {
    First: "Team Lead",
    Second: {
      One: "Sed quis justo ac magna.",
      Two: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      Three: "Sed quis justo ac magna.",
      Four: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    Last: "Jul 2017 - Oct 2021",
  },
];
import { Repeater } from "../supps/Exp";

export const Experience = () => {
  return (
    <div className="bg-gray-100  py-24 px-20 max-[768px]:px-0">
      <div className=" px-8 ">
        <div className="flex flex-col items-center gap-y-5 mb-24">
          <div className="bg-gray-200 rounded-xl w-32 justify-center flex text-gray-600 ">
            Experience
          </div>
          <div className=" text-lg text-gray-600">
            Here is a quick summary of my most recent experiences:
          </div>
        </div>
        <div className="flex flex-col items-center gap-y-24">
          {wordsArr.map((el) => (
            <Repeater
              Neg={el.First}
              Hoyr={el.Second.One}
              Gurav={el.Second.Two}
              Duruv={el.Second.Three}
              Tav={el.Second.Four}
              Zurgaa={el.Last}
            ></Repeater>
          ))}

          <div className="   rounded-xl  shadow-xl bg-gray-50 px-8 py-12">
            <div className=" flex gap-x-12 max-[728px]:flex-col max-[728px]:gap-y-4">
              <div className=" max-w-50">
                <img src="/logo-upwork.png" alt="" className=" h-7" />
              </div>
              <div className="max-[728px]:flex max-[728px]:flex-col-reverse max-[728px]:gap-y-4">
              <div className="flex flex-col  leading-7 text-gray-700 max-w-[420px] gap-y-1  ">
                <p className="  font-semibold text-xl text-gray-900 mb-3">
                  Full Stack Developer
                </p>
                <p>
                  {" "}
                  &#x2022; Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <div className=" text-gray-700">Dec 2015 - May 2017</div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
