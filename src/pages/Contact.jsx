import { motion } from "framer-motion";
// variants
import { fadeIn } from "../helper/Variant";

import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { AiOutlineFileDone } from "react-icons/ai";

export const Contact = () => {
  return (
    <section
      id="Contact"
      className=" min-h-[90vh]  md:min-h-[78vh] flex justify-start items-center md:items-center  h-screen pt-3 md:pt-0 "
    >
      <div className="w-[90%]  lg:w-[65%] mx-auto ">
        <div className="flex flex-col  items-center lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center leading-[0.8rem]  md:leading-[1.3rem] "
          >
            <div>
              <h4 className=" font-primary text-[15px] text-center lg:text-left      lg:text-[25px] uppercase text-accent font-medium  tracking-wide">
                trabajemos juntos!
              </h4>
              <div className="flex items-center">
                <h2 className="font-primary text-[30px]    lg:text-[60px]  pt-5 mb-12">
                  Contáctame
                </h2>
                <span className="text-[20px]   md:text-[40px] pl-1 mb-5 animate-wiggle animate-infinite">
                  📲
                </span>
              </div>
            </div>
          </motion.div>
          <motion.form
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className=" border border-accent w-[60%] h-[50vh]  md:w-[45%]  rounded-2xl  md:py-[20px] shadow-xl"
          >
            <article className="flex flex-col items-center justify-evenly  h-full ">
              <aside className="flex flex-col  justify-center items-center h-[33%] border-b-2 border-gray-600 w-full text-center ">
                <div className="md:text-[25px] font-primary">
                  Correo Electrónico
                </div>
                <button className="mt-1 md:my-5 mx-auto border-[3px] bg-black/50 border-red-700 h-[40px]  px-[40px] lg:px-[55px] hover:bg-red-500 text-[10px] md:text-[20px] rounded-md  hover:animate-jump hover:animate-once">
                  <a
                    target="_blank"
                    className="font-primary flex items-center gap-3"
                    href="mailto:maximiliano.soto.guardia99@gmail.com"
                  >
                    Gmail
                    <SiGmail className=" h-[15px] w-[15px] border border-gray-600 rounded-md " />
                  </a>
                </button>
              </aside>
              <aside className="flex justify-center items-center h-[33%] border-b-2 text-center w-full border-gray-600">
                <div className="text-center font-primary pt-4 text-[15px] md:text-[25px]">
                  <div>Mensaje</div>
                  <button className="mt-1 md:my-5 border-[3px] bg-black/50 border-green-700  h-[46px] mx-auto px-[20px] md:px-[45px] hover:bg-green-500 text-[10px] md:text-[15px] rounded-md hover:animate-jump hover:animate-once">
                    <a
                      target="_blank"
                      className="flex items-center gap-3"
                      href="https://wa.me/56964895935"
                    >
                      WhatsApp
                      <FaWhatsapp className="h-[15px] w-[15px]" />
                    </a>
                  </button>
                </div>
              </aside>
              <aside className="flex flex-col  justify-center items-center h-[33%] ">
                <div className="md:text-[25px] font-primary">Curriculum</div>
                <button className="mt-1 md:my-5 border-[3px] bg-black/50 border-accent h-[46px] px-[20px]  md:px-[45px] hover:bg-accent text-[10px] md:text-[15px] rounded-md  hover:animate-jump hover:animate-once">
                  <a
                    target="_blank"
                    className="flex items-center gap-3 font-primary "
                    href="/files/CV - MX2024- HARVARD.pdf"
                  >
                    Ver Mi CV
                    <AiOutlineFileDone className="h-[15px] w-[15px]" />
                  </a>
                </button>
              </aside>
            </article>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
