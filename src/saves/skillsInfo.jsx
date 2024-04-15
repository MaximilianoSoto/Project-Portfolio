<section id="Skills" className="mx-auto min-h-[85vh] lg:min-h-[78vh] w-full ">
  <div className="flex justify-center items-center h-screen ">
    <aside className=" w-[90%] lg:w-[40%] ">
      <motion.div
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="flex flex-col gap-y-2 border-accent border-t-4 border-b-4 text-left p-5  "
      >
        <h1 className="font-primary text-[25px]  text-center lg:text-left lg:text-[35px]  font-semibold text-accent">
          <TypeAnimation
            sequence={["SOBRE MI ", 5000, "¿QUIEN SOY? ", 5000]}
            speed={30}
            className="text-accent font-primary "
            wrapper="span"
            repeat={Infinity}
          />
        </h1>

        <div className=" flex items-center gap-x-1 font-secondary leading-5 font-semibold  pt-3 lg:pt-0 lg:text-[20px] lg:leading-[3rem]   ">
          <p>
            Egresado como Ingeniero Civil Informático en la Universidad de
            Tarapacá, Iquique.
          </p>
          <p className="text-[30px] mt-2 text-accent animate-wiggle animate-infinite animate-duration-[2000ms] animate-ease-linear">
            📍
          </p>
        </div>
        <ul className="pt-5 font-secondary leading-7 text-left text-gray-300 text-[25px] lg:text-[25px] lg:leading-8">
          <li>
            Actualmente ando en busca de mi primer empleo con interés en el
            <span className="text-accent font-semibold">
              {" "}
              Desarrollo Front-end
            </span>
            , me considero un entusiasta desarrollador web con habilidades
            básicas y una gran pasión por el mundo del desarrollo.
          </li>

          <li className="lg:pt-5">
            Aunque cuento con conocimientos fundamentales en el área, estoy
            <span className="text-accent font-semibold">
              {" "}
              siempre dispuesto a aprender y superar nuevos desafíos.{" "}
            </span>
            Mi enfoque es crecer constantemente y mejorar mis habilidades para
            convertirme en un profesional sólido en el campo.
          </li>
        </ul>
      </motion.div>
    </aside>
    <aside className="hidden lg:inline w-[25%]">
      <motion.div
        variants={fadeIn("left", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="hidden  lg:inline  w-[25%]  p-10  mx-auto"
      >
        <img
          src="images/MAXI_FORMAL.PNG"
          className=" rounded-xl  shadow-lg hover:scale-95 duration-1000"
        />
      </motion.div>
    </aside>
  </div>
</section>;
