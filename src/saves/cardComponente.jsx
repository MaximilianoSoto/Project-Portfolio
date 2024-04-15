<Card className="max-w-[500px] h-[70vh] bg-orange-300 shadow-lg m-3 bg-purple-900/70 border-2 border-accent/60   ">
  <CardHeader className="" floated={false} color="blue-gray">
    <img className="" src={preview} />
  </CardHeader>
  <CardBody>
    <div className=" ">
      <Typography
        variant="h5"
        className="font-primary  font-semibold text-accent  "
      >
        {titulo}
      </Typography>
    </div>
    <Typography className="font-secondary text-white    ">
      {descripcion}
    </Typography>
    <div className="inline-flex flex-wrap items-center gap-3 ">
      {tecnologias &&
        tecnologias.map((item, index) => (
          <TecnologiesComponent key={index} item={item} />
        ))}
    </div>
  </CardBody>
  <CardFooter className="pt-3 flex gap-x-3">
    <Button className="flex items-center btn ">
      <a href={demo} target="_blank" className="font-secondary ">
        Ver Proyecto
      </a>
      <svg
        aria-hidden="true"
        className="ml-2 mb-1 w-4 h-4"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 
                      01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
          clipRule="evenodd"
        ></path>
      </svg>
    </Button>

    <Button className="flex items-center gap-x-2 btn">
      <FaGithub className="w-6 h-4" />
      <a href={github} target="_blank" className="font-secondary mt-1 ">
        GitHub
      </a>
    </Button>
  </CardFooter>
</Card>;
