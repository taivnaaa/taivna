import Image from "next/image";
import {
  Header,
  Profile,
  Skill,
  GetInTouch,
  Work,
  Experience,
  Footer,
  About,
} from "@/components/layout";

export default function Home() {
  return (
    <div className=" flex flex-col ">
      <Header />
      <Profile />
      <About />
      <Skill />
      {/* <GetInTouch />
      <Work />
      <Experience />
      <Footer /> */}
    </div>
  );
}
