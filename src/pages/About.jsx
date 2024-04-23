import { FaGithub, FaLinkedin, FaGofore } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../helper/Variant";
import { Header } from "./Header";

export const About = () => {
  return (
    <section
      className="flex flex-col w-full min-h-[85vh] h-screen md:min-h-[78vh] lg:mr-[200px] "
      id="home"
    >
      <div className="w-full ">
        <Header />
        <div className=" flex flex-col-reverse items-center justify-end h-screen mx-auto mt-[8%] md:h-fit md:justify-center lg:flex-row ">
          <div className=" flex flex-col text-center md:w-[65%] lg:w-[45%] lg:text-left ">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className=" font-primary text-[30px] font-semibold uppercase leading-[1.2] lg:text-[55px] "
            >
              MAXIMILIANO <span>SOTO</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className=" font-secondary font-semibold uppercase leading-10 text-[30px] lg:text-[30px] lg:mt-0 lg:inline lg:leading-[1]"
            >
              <div className=" flex mx-auto text-white ">
                <p className="hidden lg:inline">Hola!</p>
                <span className="hidden animate-wiggle-more animate-infinite animate-ease-linear lg:inline  ">
                  👋
                </span>
                <p className="hidden mr-2 lg:inline">, SOY </p>
                <TypeAnimation
                  sequence={[
                    "Ingeniero Civil Informático",
                    3000,
                    "Desarrollador Front-end",
                    3000,
                    "Software Developer",
                    3000,
                  ]}
                  speed={50}
                  className="text-accent "
                  wrapper="span"
                  repeat={Infinity}
                />
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mt-6"
            >
              <button className="btn px-5 font-primary hover:scale-95 font-normal text-[15px] lg:btn-sm">
                <a target="_blank" href="/files/CV - MX2024- HARVARD.pdf">
                  Ver mi CV
                </a>
              </button>
            </motion.div>

            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex gap-x-5 max-w-max mx-auto md:gap-x-9 md:mt-6 lg:mx-0 "
            >
              <a
                className="hover:text-accent"
                href="https://github.com/MaximilianoSoto"
              >
                <FaGithub className=" text-[30px] md:text-[2.5rem] " />
              </a>
              <a
                className="hover:text-accent"
                href="https://www.linkedin.com/in/maximiliano-soto-0116271b2/"
              >
                <FaLinkedin className="text-[30px] md:text-[2.5rem]" />
              </a>
              <a
                className="hover:text-accent"
                href="mailto:maximiliano.soto.guardia99@gmail.com"
              >
                <FaGofore className="text-[30px] md:text-[2.5rem]" />
              </a>
            </motion.div>
          </div>

          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className=" w-[40%] md:w-[20%] lg:block "
          >
            <motion.div
              animate={{
                y: [0, 15, 0], // anima la imagen en el eje Y
              }}
              transition={{
                duration: 5,
                delay: 1, // duración de cada ciclo de animación en segundos
                repeat: Infinity, // hace que la animación se repita infinitamente
                ease: "easeInOut", // tipo de transición
              }}
            >
              <img src="images/foto_perfil.PNG" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
