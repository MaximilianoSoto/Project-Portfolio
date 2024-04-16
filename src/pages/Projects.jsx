import { motion } from "framer-motion";
// variants
import { fadeIn } from "../helper/Variant";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";
import { ProjectsList } from "../assets/ProjectsList";
import { TecnologiesComponent } from "../components/TecnologiesComponent";
import { SVG } from "../assets/SVG";
import { Button } from "@material-tailwind/react";
import { FaGithub } from "react-icons/fa";

export const Projects = () => {
  return (
    <section id="Projects" className=" min-h-[85vh] md:min-h-[90vh]">
      <div className="w-[90%] p-2 md:p-0  h-screen md:w-[65%] pt-[3%] mx-auto  ">
        <motion.div
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h1 className=" md:text-[30px] font-semibold leading-[0.8]  font-primary  text-white text-center">
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
                    <article className="mb-20 h-[500px]  md:h-[650px] flex flex-col items-center p-2 bg-purple-900/70 border-4 rounded-lg border-accent/60">
                      <header className="w-full text-center h-[150px] md:h-[250px]">
                        <img
                          src={item.preview}
                          alt="Preview-Img"
                          className="w-full h-full p-1 rounded-lg"
                        />
                      </header>
                      <main className="w-full h-[200px] md:h-[250px]">
                        <h1 className="text-[20px] md:h-[80px] bg-orange-300  md:text-[25px] font-primary text-accent">
                          {item.titulo}
                        </h1>
                        <p className="text-[15px] md:text-[23px] leading-6 mt-2 font-secondary text-white">
                          {item.descripcion}
                        </p>
                      </main>
                      <footer className=" w-full h-[150px] md:h-[200px] flex flex-col justify-around">
                        <div className=" flex gap-2 flex-wrap">
                          {item.tecnologias.map((item) => (
                            <TecnologiesComponent key={item} item={item} />
                          ))}
                        </div>
                        <div className="flex gap-5 ">
                          <button className="btn flex items-center p-2 rounded-lg">
                            <a
                              target="_blank"
                              className="font-secondary   md:text-xl "
                            >
                              Ver Proyecto
                            </a>
                            <SVG />
                          </button>
                          <button className="btn flex items-center gap-2 p-2 rounded-lg">
                            <FaGithub className="w-6 h-4" />
                            <a
                              target="_blank"
                              className="font-secondary mt-1 md:text-xl "
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
