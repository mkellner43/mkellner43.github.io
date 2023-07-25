import Pic from "../../Images/profilePic2.png";
import { motion } from "framer-motion";
import Footer from "../../components/Footer";
import Projects from "../../components/Projects";
import Arrow from "./Arrow";
import Logo from "../../components/Logo";
import Background from "../../components/Background";

const Home = ({ navIsOpen, setTheme, theme }) => {
  return (
    <div className="snap-mandatory snap-y w-screen dark:bg-stone-500 dark:text-white overflow-scroll mt-[70px] h-[calc(100vh-70px)]">
      <motion.section
        layout
        className="snap-center flex flex-col justify-start sm:justify-start items-center w-screen h-[calc(100vh-70px)] relative"
      >
        {/* <Background /> */}
        <Logo />

        <motion.div className="flex flex-col justify-center items-center grow">
          <motion.img
            layout
            className="rounded-full shadow-2xl w-10/12 sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 mb-4"
            src={Pic}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 2 },
            }}
          />
          <motion.h1
            layout
            initial={{ x: "30vw", y: "10vh" }}
            animate={{
              x: 0,
              y: 0,
              opacity: [0, 0.1, 1],
              transition: { delay: 0.5, duration: 1 },
            }}
            className="text-5xl text-center font-nunito"
          >
            Matthew Kellner
          </motion.h1>
          <motion.h2
            layout
            initial={{ x: "30vw", y: "10vh" }}
            animate={{
              x: 0,
              y: 0,
              opacity: [0, 0.1, 1],
              transition: { delay: 1, duration: 1 },
            }}
            className="text-center font-nunito"
          >
            Full Stack Web Developer
          </motion.h2>
        </motion.div>
        <div className="min-h-[150px]">
          <Arrow theme={theme} setTheme={setTheme} />
        </div>
      </motion.section>
      <section className="snap-center h-[calc(100vh-70px)] w-screen flex flex-col items-center justify-start relative pt-10">
        <Projects />
        <div className="absolute bottom-0">
          <Footer />
        </div>
      </section>
    </div>
  );
};

export default Home;

//! removed all styles restyle with tailwind css
