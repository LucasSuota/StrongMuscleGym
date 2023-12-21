import { ImageCardType } from "../../types";

const ImageCard = ({ title, image }: ImageCardType) => {
  return (
    <div className="mb-8 flex flex-col items-center w-full">
      <img
        className="sm:w-[440px] w-[290px] sm:h-[440px] h-[290px]"
        style={{
          boxShadow: "10px -10px 0px 1px rgba(203,1,27,1)",
        }}
        src={image}
        alt={title}
      />
      <p className="font-strong font-bold sm:text-[24px] text-[15px] text-right relative w-[290px] sm:w-[440px]">
        {title}
      </p>
    </div>
  );
};

export default ImageCard;
