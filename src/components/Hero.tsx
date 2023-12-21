import { HeroBg, Logo2, StrongText } from "../assets/images";

const Hero = () => {
  return (
    <section
      className="min-w-full h-[584px] flex sm:flex-row flex-col items-center justify-center gap-10"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.60)),
    url(${HeroBg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div>
        <h1 className="text-white font-strong sm:text-[73px] text-[33px] font-bold sm:leading-[70px] leading-8">
          VENHA SER
        </h1>
        <img
          className="sm:w-[440px] w-[200px]"
          src={StrongText}
          alt="strong texto"
        />
      </div>
      <img
        className="sm:w-[230px] sm:h-[230px] w-[120px] h-[120px]"
        src={Logo2}
        alt="Strong Muscle Gym Logo"
      />
    </section>
  );
};

export default Hero;
