import { useRef } from "react";

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
  const refAbout = useRef(null);
  const handleClickAbout = () => {
    refAbout.current?.scrollIntoView({ behavior: "smooth" }) ;
  };
  const refWork = useRef(null);
  const handleClickWork = () => {
    refWork.current?.scrollIntoView({ behavior: "smooth" }) ;
  };
  const refTestimonials = useRef(null);
  const handleClickTestimonials = () => {
    refTestimonials.current?.scrollIntoView({ behavior: "smooth" }) ;
  };
  const refContact = useRef(null);
  const handleClickContact = () => {
    refContact.current?.scrollIntoView({ behavior: "smooth" }) ;
  };
  

  return (
    <div className=" ">
      <Header 
      a={handleClickAbout} 
      b={handleClickWork} 
      c={handleClickTestimonials} 
      d={handleClickContact} 
       />
      <Profile />
      <About a={refAbout} />
      <Skill c={refTestimonials}/>
      <Experience />
      <Work b={refWork}/>
      <GetInTouch  d={refContact}/>
      <Footer />
    </div>
  );
}
