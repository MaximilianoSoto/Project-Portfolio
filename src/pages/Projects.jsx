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
    <section id="Projects" className=" min-h-[85vh] md:min-h-[90vh]">
      <div className="w-[90%] p-2  pt-[20%]  md:p-0  h-screen md:w-[65%] md:pt-[5%] mx-auto  ">
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
                    <article className="mb-20 border-2 h-[500px]  md:h-[700px] flex flex-col items-center p-2 ">
                      <header className="border-2 w-full text-center h-[200px] md:h-[250px]">
                        imagen
                      </header>
                      <main className="border-2 w-full text-center h-[200px]   md:h-[250px]">
                        titulo y descripcion
                      </main>
                      <footer className="border-2 w-full text-center h-[100px] md:h-[200px]">
                        habilidades y botones
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
