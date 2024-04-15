import { motion } from "framer-motion";
import { fadeIn } from "../helper/Variant";
import { TechCarousel } from "../components/TechCarousel";

export const ShowSkills = () => {
  return (
    <>
      <section id="ShowSkills" className=" min-h-[90vh]  w-full ">
        <div className="mx-auto">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex justify-center items-center h-[90vh] md:h-[78vh]"
          >
            <div className="text-center w-[90%] md:w-[65%] ">
              <h1 className="font-primary text-[45px] pb-[5rem]">
                Habilidades
              </h1>
              <h2 className="font-secondary text-[35px] py-5">Front-end</h2>
              <TechCarousel
                lista={[
                  "html",
                  "css",
                  "javascript",
                  "react",
                  "tailwind",
                  "boostrap",
                  "nodejs",
                ]}
              />
              <h2 className="font-secondary text-[35px] py-5 mt-5">Otros</h2>
              <TechCarousel lista={["angular", "sqlserver", "git"]} />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};
