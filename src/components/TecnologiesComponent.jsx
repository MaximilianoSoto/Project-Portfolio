/* eslint-disable react/prop-types */
import { ImHtmlFive } from "react-icons/im";
import { DiCss3, DiJsBadge } from "react-icons/di";
import { SiTailwindcss, SiMicrosoftsqlserver } from "react-icons/si";
import { BiLogoReact, BiLogoAngular } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { BsGit } from "react-icons/bs";
import { BiLogoBootstrap } from "react-icons/bi";

import { Tooltip } from "@material-tailwind/react";

export const TecnologiesComponent = ({ item }) => {
  if (item == "html") {
    return (
      <Tooltip
        content="HTML5"
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0, y: 25 },
        }}
        className="md:text-[15px] "
      >
        <div className=" h-fit rounded-full bg-gray-900 hover:scale-105 hover:bg-white/80 ">
          <ImHtmlFive className="text-orange-600 p-4 text-[55px]  " />
        </div>
      </Tooltip>
    );
  } else if (item == "css") {
    return (
      <Tooltip
        content="CSS"
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0, y: 25 },
        }}
        className="md:text-[15px]"
      >
        <div className="h-fit rounded-full bg-gray-900 hover:scale-105 hover:bg-white/80 ">
          <DiCss3 className="text-cyan-500  p-4 text-[55px] " />
        </div>
      </Tooltip>
    );
  } else if (item == "javascript") {
    return (
      <Tooltip
        content="JavaScript"
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0, y: 25 },
        }}
        className="md:text-[15px]"
      >
        <div className="h-fit rounded-full bg-gray-900 hover:scale-105 hover:bg-white/80 ">
          <DiJsBadge className="text-amber-600 p-4 text-[55px] " />
        </div>
      </Tooltip>
    );
  } else if (item == "tailwind") {
    return (
      <Tooltip
        content="Tailwind CSS"
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0, y: 25 },
        }}
        className="md:text-[15px]"
      >
        <div className="h-fit rounded-full bg-gray-900 hover:scale-105 hover:bg-white/80">
          <SiTailwindcss className="text-cyan-500 p-4 text-[55px] " />
        </div>
      </Tooltip>
    );
  } else if (item == "react") {
    return (
      <Tooltip
        content="React"
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0, y: 25 },
        }}
        className="md:text-[15px]"
      >
        <div className="h-fit rounded-full bg-gray-900 hover:scale-105 hover:bg-white/80">
          <BiLogoReact className="text-cyan-500 p-4 text-[55px]" />
        </div>
      </Tooltip>
    );
  } else if (item == "angular") {
    return (
      <Tooltip
        content="Angular"
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0, y: 25 },
        }}
        className="md:text-[15px]"
      >
        <div className="h-fit rounded-full bg-gray-900 hover:scale-105 hover:bg-white/80">
          <BiLogoAngular className=" text-red-600 p-4 text-[55px]" />
        </div>
      </Tooltip>
    );
  } else if (item == "nodejs") {
    return (
      <Tooltip
        content="NodeJS"
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0, y: 25 },
        }}
        className="md:text-[15px]"
      >
        <div className="h-fit rounded-full bg-gray-900 hover:scale-105 hover:bg-white/80">
          <FaNodeJs className="text-green-600 p-4 text-[55px] " />
        </div>
      </Tooltip>
    );
  } else if (item == "git") {
    return (
      <Tooltip
        content="Git"
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0, y: 25 },
        }}
        className="md:text-[15px]"
      >
        <div className="h-fit rounded-full bg-gray-900 hover:scale-105 hover:bg-white/80">
          <BsGit className="text-orange-900 p-4 text-[55px] " />
        </div>
      </Tooltip>
    );
  } else if (item == "sqlserver") {
    return (
      <Tooltip
        content="SQL Server"
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0, y: 25 },
        }}
        className="md:text-[15px]"
      >
        <div className="h-fit rounded-full bg-gray-900 hover:scale-105 hover:bg-white/80">
          <SiMicrosoftsqlserver className="text-red-600 p-4 text-[55px] " />
        </div>
      </Tooltip>
    );
  } else if (item == "boostrap") {
    return (
      <Tooltip
        content="Boostrap 5"
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0, y: 25 },
        }}
        className="md:text-[15px]"
      >
        <div className="h-fit rounded-full bg-gray-900 hover:scale-105 hover:bg-white/80">
          <BiLogoBootstrap className="text-[55px] p-4 text-purple-600" />
        </div>
      </Tooltip>
    );
  }
};
