import { motion } from "framer-motion";

import { fadeIn } from "../helper/Variant";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";
import { ProjectsList } from "../assets/ProjectsList";
import { TecnologiesComponent } from "../components/TecnologiesComponent";
import { SVG } from "../assets/SVG";
import { FaGithub } from "react-icons/fa";

export const Projects = () => {
  return (
    <section id="Projects" className=" min-h-[85vh] md:min-h-[90vh]">
      <div className="w-[90%] pt-[8%] md:p-0 h-screen md:w-[65%] md:pt-[3%] mx-auto  ">
        <motion.div
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h1 className="text-[20px]  md:text-[30px] font-semibold leading-[0.8]  font-primary  text-white text-center">
            MIS PROYECTOS
          </h1>
          <div className="pt-5">
            <Swiper
              breakpoints={{
                340: {
                  slidesPerView: 1,
                  spaceBetween: 15,
                },
                700: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
              }}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
              className="max-w-[100%] "
            >
              {ProjectsList &&
                ProjectsList.map((item) => (
                  <SwiperSlide key={item.titulo}>
                    <article className="mb-[40px] md:mb-[60px] h-[450px] md:h-[630px] flex flex-col items-center p-2 md:px-4 bg-purple-900/70 border-4 rounded-lg border-accent/60">
                      <header className="w-full text-center h-[250px] md:h-[250px]">
                        <img
                          src={item.preview}
                          alt="Preview-Img"
                          className="w-full h-[250px] md:h-[250px] p-1 rounded-lg"
                        />
                      </header>
                      <main className="w-full  md:h-[250px]">
                        <h1 className="text-[20px] md:text-[20px] py-3 md:pt-2 font-primary font-semibold  text-accent ">
                          {item.titulo}
                        </h1>
                        <p className="hidden text-[15px] leading-5 font-secondary text-white  md:inline md:h-[120px] md:text-[20px]">
                          {item.descripcion}
                        </p>
                      </main>
                      <footer className="w-full h-[150px] md:h-[200px] flex flex-col justify-around">
                        <div className="flex gap-2 flex-wrap mx-auto md:mx-0">
                          {item.tecnologias.map((item) => (
                            <TecnologiesComponent key={item} item={item} />
                          ))}
                        </div>
                        <div className="flex gap-5 mx-auto md:mx-0 ">
                          <button className="btn flex items-center p-2 rounded-lg hover:scale-95">
                            <a
                              href={item.demo}
                              target="_blank"
                              className="font-secondary font-semibold   md:text-xl "
                            >
                              Ver Proyecto
                            </a>
                            <SVG />
                          </button>
                          <button className="btn flex items-center gap-1 p-2 rounded-lg hover:scale-95">
                            <FaGithub className="w-6 h-4" />
                            <a
                              href={item.github}
                              target="_blank"
                              className="font-secondary font-semibold mt-1 md:text-xl "
                            >
                              GitHub
                            </a>
                          </button>
                        </div>
                      </footer>
                    </article>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
