import { Link } from "react-scroll";

export const Header = () => {
  return (
    <header>
      <div className=" md:w-[70%] mx-auto">
        <div className="w-full flex justify-between items-center">
          <a href="#">
            <img
              className="w-[150px] lg:w-[200px] "
              src="/images/Maxi_Dev.png"
              alt=""
            />
          </a>
          <Link to="Contact" activeClass="active" smooth={true} spy={true}>
            <button className="mr-4 px-2 lg:mr-16 lg:px-4 lg:py-1 text-[15px] lg:text-[0.8rem] font-primary bg-[#B809C3] rounded-lg bg-gradient-to-r transition ease-in-out  hover:shadow-[#b936ee] hover:shadow-lg hover:scale-105 hover:from-[#FF56F6] hover:to-[#42A6E3]  duration-300">
              Contactarme
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};
