/* eslint-disable react/prop-types */
import { FaGithub } from "react-icons/fa";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { TecnologiesComponent } from "./TecnologiesComponent";
import { SVG } from "../assets/SVG";

export const CardComponent = ({
  preview,
  titulo,
  descripcion,
  tecnologias,
  demo,
  github,
}) => {
  return (
    <>
      <article className="flex flex-col gap-5 max-w-[600px] h-[50vh]  shadow-lg m-3 bg-purple-900/70 border-4 border-accent/60 p-3">
        <CardHeader className="h-[50%] " floated={false} color="blue-gray">
          <img className="w-full h-full" src={preview} />
        </CardHeader>

        <main className="h-[35%] ">
          <h1 className="text-[35px] p-2  font-primary  font-semibold text-accent  ">
            {titulo}
          </h1>
          <p className="h-[90%] p-2  text-[30px] font-secondary text-white">
            {descripcion}
          </p>
        </main>
        <footer className="h-[35%] ">
          <div className=" h-[40%] p-2 flex gap-4 flex-wrap">
            {tecnologias &&
              tecnologias.map((item, index) => (
                <TecnologiesComponent key={index} item={item} />
              ))}
          </div>
          <div className="h-[60%] p-2 ">
            <div className="flex gap-2 items-end h-full">
              <Button className="flex items-center btn ">
                <a href={demo} target="_blank" className="font-secondary ">
                  Ver Proyecto
                </a>
                <SVG />
              </Button>
              <Button className="flex items-center gap-x-2 btn">
                <FaGithub className="w-6 h-4" />
                <a
                  href={github}
                  target="_blank"
                  className="font-secondary mt-1 "
                >
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </footer>
      </article>
    </>
  );
};
