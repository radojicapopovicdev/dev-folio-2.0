import UpWork from "../../assets/icons/upwork.svg";
import LinkedIn from "../../assets/icons/linkedin.svg";
import Instagram from "../../assets/icons/instagram.svg";
import Pinterest from "../../assets/icons/pinterest.svg";
import GitHub from "../../assets/icons/github.svg";

import Code1 from "../../assets/code/code1.svg";
import Code2 from "../../assets/code/code2.svg";

// import Vector1 from ""
// import Vector2 from ""
// import Vector3 from ""

const Hero = () => {
  return (
    <div id="hero-wrapper" className="px-[18.021vw] py-10">
      {/* TEXT */}
      <span className="text-[#FBFBFB] text-[19.63vh] font-bigs absolute mt-[5vh] ">
        ENGINEERING
      </span>
      <p className="text-[#DDDDDD] text-base w-[11.465vw] absolute mt-[23vh] ml-[47.5vw]  ">
        WEBSITES, APPLICATIONS AND SAAS DEVELOPMENT
      </p>
      <span className="text-[#FBFBFB] text-[19.63vh] font-bigs absolute mt-[25vh] ml-[23vw] ">
        YOUR VISION
      </span>
      <p className="text-[#DDDDDD] text-base w-[15.499vw] absolute mt-[43vh] ml-[7.5vw] ">
        TAILORED SOFTWARE SOLUTIONS FOR DYNAMIC BUSINESSES
      </p>
      {/* NAV */}
      <div
        id="socials-navigation"
        className="absolute flex-col h-[200px] mt-[53vh] "
      >
        <a href="https://www.upwork.com/freelancers/~0185c1e5717ee4a769">
          <img
            src={UpWork}
            alt="UpWork"
            className="pb-[20px] cursor-pointer "
          />
        </a>
        <a href="https://www.linkedin.com/in/radojica-popovic/">
          <img
            src={LinkedIn}
            alt="LinkedIn"
            className="pb-[20px] cursor-pointer "
          />
        </a>
        <a href="https://www.instagram.com/rpopoviic/">
          <img
            src={Instagram}
            alt="Instagram"
            className="pb-[20px] cursor-pointer "
          />
        </a>
        <a href="https://www.pinterest.com/rpopovicdev/">
          <img
            src={Pinterest}
            alt="Pinterest"
            className="pb-[20px] cursor-pointer "
          />
        </a>
        <a href="https://github.com/radojicapopovicdev">
          <img
            src={GitHub}
            alt="GitHub"
            className="pb-[20px] cursor-pointer "
          />
        </a>
      </div>
      {/* CODE */}
      <div id="code-svg" className="">
        <img
          src={Code1}
          alt="code1"
          className=" absolute mt-[62vh] ml-[10vw] "
        />
        <img
          src={Code2}
          alt="code2"
          className="absolute mt-[75vh] ml-[43vw] "
        />
      </div>
      {/* VECTORS */}
      <div id="vector-svg" className="">
        <img src="" alt="vector1" className="absolute" />
        <img src="" alt="vector2" className="absolute" />
        <img src="" alt="vector3" className="absolute" />
      </div>
    </div>
  );
};

export default Hero;
