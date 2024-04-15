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
import { Button } from "@material-tailwind/react";

import { FaGithub } from "react-icons/fa";
import { SVG } from "../assets/SVG";

export const Projects = () => {
  return (
    <section id="Projects" className=" min-h-[85vh] md:min-h-[78vh]   ">
      <div className="w-[90%] p-2  pt-[20%]  md:p-0  h-screen md:w-[65%] md:pt-[10%] mx-auto  ">
        <motion.div
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h1 className=" md:text-[35px] font-semibold leading-[0.8]  font-primary  text-white text-center">
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
                    <article className="mb-12   md:mb-16 flex  flex-col mx-auto  lg:h-[50vh]  bg-purple-900/70 border-4 rounded-lg border-accent/60 p-3">
                      <header className="h-[20vh]">
                        <img
                          className="w-full h-[20vh] rounded-lg"
                          alt="preview-image"
                          src={item.preview}
                        />
                      </header>
                      <main className=" h-[200px] md:h-[250px]  ">
                        <h1 className="text-[20px]   lg:text-[30px]  p-2 mt-3 font-primary leading-8 font-semibold text-accent  ">
                          {item.titulo}
                        </h1>
                        <p className=" leading-[1.2rem] lg:leading-[2rem]  p-2 h-[200px] text-[17px]  lg:text-[25px] mt-2 font-secondary text-white">
                          {item.descripcion}
                        </p>
                      </main>
                      <footer className="mt-2 h-[35%]">
                        <div className=" h-[40%]  flex gap-2 flex-wrap">
                          {item.tecnologias.map((item) => (
                            <TecnologiesComponent key={item} item={item} />
                          ))}
                        </div>
                        <div className="mt-10  md:mt-4 mx-auto">
                          <div className="flex gap-1  md:gap-5 ">
                            <Button className="flex items-center btn  ">
                              <a
                                target="_blank"
                                className="font-secondary   md:text-2xl "
                              >
                                Ver Proyecto
                              </a>
                              <SVG />
                            </Button>
                            <Button className="flex items-center  gap-x-1 btn">
                              <FaGithub className="w-6 h-4" />
                              <a
                                target="_blank"
                                className="font-secondary mt-1  md:text-2xl "
                              >
                                GitHub
                              </a>
                            </Button>
                          </div>
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
