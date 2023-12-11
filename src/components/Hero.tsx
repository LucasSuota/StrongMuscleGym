import { Logo } from "../assets/images";

const Hero = () => {
  return (
    <div className="min-w-screen-lg min-h-screen mx-auto flex flex-col items-center justify-center">
      <img
        className="w-[250px] active:w-[300px] animate-pulse transition-all"
        src={Logo}
        alt="logo"
      />
    </div>
  );
};

export default Hero;
