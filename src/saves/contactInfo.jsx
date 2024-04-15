<div className="grid grid-rows-3 w-full divide-y divide-gray-700 h-[60vh]  md:px-2 ">
  <div className="text-center font-primary md:pt-7 text-[15px] md:text-[25px]">
    <div>Correo Electrónico</div>
    <button className="mx-auto border-[3px] bg-black/50 border-red-700 h-[36px]  px-[20%] lg:px-[65px] hover:bg-red-500 text-[10px] md:text-[15px] rounded-md mt-10 hover:animate-jump hover:animate-once">
      <a
        target="_blank"
        className="flex items-center gap-3"
        href="mailto:maximiliano.soto.guardia99@gmail.com"
      >
        GMail
        <SiGmail className=" h-[15px] w-[15px] border border-gray-600 rounded-md " />
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
</div>;
