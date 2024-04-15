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
      className=" min-h-[90vh]  md:min-h-[78vh] flex justify-start md:items-center  h-screen pt-3 md:pt-0 "
    >
      <div className="w-[90%]  lg:w-[65%] mx-auto ">
        <div className="flex flex-col  items-center lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center leading-[0.8rem]  md:leading-[1.3rem]"
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
            className=" border border-accent   md:w-[45%]  rounded-2xl  md:py-[20px]"
          >
            <div className="grid grid-rows-3 w-full divide-y divide-gray-700 px-3 md:px-2 ">
              <div className="text-center font-primary pt-7 text-[15px] md:text-[25px]">
                <div>Correo Electrónico</div>
                <button className="mx-auto border-[3px] bg-black/50 border-red-700 h-[36px]  px-[20%] lg:px-[65px] hover:bg-red-500 text-[10px] md:text-[15px] rounded-md mt-10 hover:animate-jump hover:animate-once">
                  <a
                    target="_blank"
                    className="flex items-center gap-3"
                    href="mailto:maximiliano.soto.guardia99@gmail.com"
                  >
                    GMail
                    <SiGmail className="h-[15px] w-[15px] border border-gray-600 rounded-md " />
                  </a>
                </button>
              </div>
              <div className=" text-center font-primary pt-2 pb-[60px] md:text-[30px]">
                <div className="text-center font-primary pt-4 text-[15px] md:text-[25px]">
                  <div>Mensaje</div>
                  <button className="border-[3px] bg-black/50 border-green-700  h-[46px] px-[10%]   md:px-[35px] hover:bg-green-500 text-[10px] md:text-[15px] rounded-md mt-10 hover:animate-jump hover:animate-once">
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
              </div>
              <div className="text-center font-primary pt-9 text-[15px] md:text-[25px]">
                <div>Curriculum</div>
                <button className="border-[3px] bg-black/50 border-accent  h-[46px] px-[35px] hover:bg-accent text-[10px] md:text-[15px] rounded-md mt-10 hover:animate-jump hover:animate-once">
                  <a
                    target="_blank"
                    className="flex items-center gap-3"
                    href="public/files/CV_2024.pdf"
                  >
                    Ver Mi CV
                    <AiOutlineFileDone className="h-[15px] w-[15px]" />
                  </a>
                </button>
              </div>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
