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
      <div className="w-[90%] p-2 pt-2 md:p-0  h-screen md:w-[65%] md:pt-[10%] mx-auto  ">
        <motion.div
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h1 className=" md:text-[35px] font-semibold leading-[0.8]  font-primary  text-white text-center">
            MIS PROYECTOS
          </h1>
          <div className="py-10">
            <Swiper
              breakpoints={{
                340: {
                  slidesPerView: 2,
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
              className="max-w-[90%] lg:max-w-[100%]  "
            >
              {ProjectsList &&
                ProjectsList.map((item) => (
                  <SwiperSlide key={item.titulo}>
                    <article className="mb-20 flex gap-2 flex-col mx-auto h-[55vh]  bg-purple-900/70 border-4 rounded-lg border-accent/60 p-3">
                      <header className="h-[20vh]">
                        <img
                          className="w-full h-[20vh] rounded-lg"
                          alt="preview-image"
                          src={item.preview}
                        />
                      </header>
                      <main className="h-[400px]">
                        <h1 className="text-[35px] h-[70px] p-2 mt-3 font-primary leading-8 font-semibold text-accent  ">
                          {item.titulo}
                        </h1>
                        <p className=" leading-[2rem]  p-2 h-[200px] text-[30px] mt-2 font-secondary text-white">
                          {item.descripcion}
                        </p>
                      </main>
                      <footer className="h-[35%]">
                        <div className=" h-[40%]  flex gap-2 flex-wrap">
                          {item.tecnologias.map((item) => (
                            <TecnologiesComponent key={item} item={item} />
                          ))}
                        </div>
                        <div className="mt-10 mx-auto">
                          <div className="flex gap-5 ">
                            <Button className="flex items-center btn ">
                              <a
                                target="_blank"
                                className="font-secondary text-2xl "
                              >
                                Ver Proyecto
                              </a>
                              <SVG />
                            </Button>
                            <Button className="flex items-center  gap-x-1 btn">
                              <FaGithub className="w-6 h-4" />
                              <a
                                target="_blank"
                                className="font-secondary mt-1 text-2xl "
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
