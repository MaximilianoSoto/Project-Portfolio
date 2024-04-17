import { motion } from "framer-motion";
import { fadeIn } from "../helper/Variant";
import { experiencia } from "../helper/experience";
import { Link } from "react-scroll";

export const Competence = () => {
  return (
    <section
      className="w-full min-h-[85vh] md:min-h-[78vh] flex items-center "
      id="Habilidades"
    >
      <div className=" flex w-full justify-center gap-10 items-center mx-auto lg:h-[100vh]  ">
        <aside className="hidden p-10 lg:inline lg:w-[25%] ">
          {" "}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className=" flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent font-primary text-[40px] mb-10">
              Experiencia
            </h2>
            <h3 className="h3  mb-10 font-secondary text-[25px] leading-7  w-[90%]">
              Recientemente egresado como
              <span className=" text-accent ">
                {" "}
                Ingeniero civil Informático{" "}
              </span>
              en la universidad de Tarapacá, Iquique.
            </h3>
            <Link to="Projects" activeClass="active" smooth={true} spy={true}>
              <button className="btn px-4 py-1 font-primary text-[15px] hover:scale-105 ">
                Ver Proyectos
              </button>
            </Link>
          </motion.div>
        </aside>
        <aside className=" lg:p-10 w-[90%] lg:w-[40%]">
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 px-2 md:px-0 "
          >
            <div>
              <h2 className="h2 text-center text-accent font-primary text-[30px] leading-[0.1rem] lg:hidden">
                Experiencia
              </h2>
              {experiencia.map((service, index) => {
                const { name, description, empresa } = service;
                return (
                  <div
                    className="border-b  border-white/20 w-full py-2   md:py-5 text-center lg:text-left lg:justify-between lg:mb-[48px] lg:pb-10 flex flex-col lg:flex-row md:items-center md:gap-y-5 "
                    key={index}
                  >
                    <div>
                      <h4 className="text-[15px] lg:text-[25px] tracking-wider font-primary font-semibold  lg:mb-5">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight text-[20px] lg:max-w-[500px] ">
                        {description}
                      </p>
                    </div>
                    <div className=" flex  justify-center items-center lg:items-start ">
                      <p
                        href="#"
                        className="text-gradient mt-2 lg:mt-5 lg:text-right text-[20px] lg:w-[150px]"
                      >
                        {empresa}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </aside>
      </div>
    </section>
  );
};
