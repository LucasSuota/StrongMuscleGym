import { whoAreWeImages } from "../constants";
import { ImageCard } from "./images";

const About = () => {
  return (
    <section className="min-w-full">
      <div className="min-w-full min-h-[160px] flex flex-col items-center justify-center">
        <p className="font-strongSpaced font-bold sm:text-[26px] text-[16px]">
          QUEM SOMOS?
        </p>
        <p className="font-strongSpaced font-bold text-strong_red sm:text-[16px] text-[10px] leading-3">
          BE F*CKING STRONG
        </p>
      </div>
      <div className="flex sm:flex-row flex-col items-center justify-center w-full">
        {whoAreWeImages.map((card, index) => (
          <ImageCard
            key={index}
            title={card.title}
            image={card.image}
            backgroundColor={card.backgroundColor}
          />
        ))}
      </div>
    </section>
  );
};

export default About;
