import Logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-[20vw] py-5">
      <img src={Logo} alt="logo" className="cursor-pointer " />
      <p className="text-white text-base font-karla">About Me</p>
      <p className="text-white text-base font-karla ml-[-70px]">Experience</p>
      <p className="text-white text-base font-karla ml-[-70px]">Projects</p>
      <p className="text-white text-base font-karla ml-[-70px]">Resume</p>
      <button
        className="cursor-pointer text-red hover:before:bg-redborder-[#648e71] relative overflow-hidden  bg-[#4E6E58] px-3 text-white 
            shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 
            before:bg-[#648e71] before:transition-all before:duration-500 hover:text-white hover:shadow-[#648e71] hover:before:left-0
            hover:before:w-full h-[44px] w-[205px]  "
      >
        <span className="relative z-10 font-karla ">HIRE ME</span>
      </button>
    </div>
  );
};

export default Header;
