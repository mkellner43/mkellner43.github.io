import Scroll from "./Scroll";
import { frontend, backend, other } from "./data";
import { Typewriter } from "../Typewriter";

const Skills = ({ aboutContainer }) => {
  return (
    <section className="flex flex-col gap-5 w-full relative pb-20">
      <div className="min-h-[60px]">
        <Typewriter text="Skills." variant="h2" component="h2" delay={5000} />
      </div>
      <div className="min-h-[35px]">
        <Typewriter text="Frontend." variant="h6" component="h3" delay={6000} />
      </div>
      <Scroll
        data={frontend}
        baseVelocity={-2}
        aboutContainer={aboutContainer}
      />
      <div className="min-h-[35px]">
        <Typewriter text="Backend." variant="h6" component="h3" delay={7000} />
      </div>
      <Scroll data={backend} baseVelocity={2} aboutContainer={aboutContainer} />
      <div className="min-h-[35px]">
        <Typewriter
          text="Miscellaneous."
          variant="h6"
          component="h3"
          delay={8000}
        />
      </div>
      <Scroll data={other} baseVelocity={-2} aboutContainer={aboutContainer} />
    </section>
  );
};

export default Skills;
