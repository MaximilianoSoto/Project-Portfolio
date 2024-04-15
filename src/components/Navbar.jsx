import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";
import { BsFillKeyboardFill } from "react-icons/bs";

import { Link } from "react-scroll";

export const Navbar = () => {
  return (
    <nav className="fixed bottom-8 lg:bottom-[60px] w-full overflow-hidden z-50 lg:m-0  ">
      <div className="container mx-auto">
        <div className="w-full bg-black/20 h-[80px] backdrop-blur-2xl rounded-full max-w-[350px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50">
          <Link
            to="home"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}
            className=" rounded-xl cursor-pointer w-[50px] h-[50px]  flex items-center justify-center"
          >
            <BiHomeAlt className="nav-log" />
          </Link>
          <Link
            to="Habilidades"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[50px] h-[50px] flex items-center justify-center"
          >
            <GiSkills className="nav-log" />
          </Link>
          <Link
            to="Skills"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[50px] h-[50px] flex items-center justify-center "
          >
            <BiUser className="nav-log" />
          </Link>
          <Link
            to="ShowSkills"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[50px] h-[50px] flex items-center justify-center "
          >
            <BsClipboardData className="nav-log" />
          </Link>
          <Link
            to="Projects"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[50px] h-[50px] flex items-center justify-center "
          >
            <BsFillKeyboardFill className="nav-log" />
          </Link>
          <Link
            to="Contact"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[50px] h-[50px] flex items-center justify-center"
          >
            <BsBriefcase className="nav-log" />
          </Link>
        </div>
      </div>
    </nav>
  );
};
