import { Logo2 } from "../assets/images";
import SubscribeButton from "./buttons/SubscribeButton";

const Header = () => {
  return (
    <header className="bg-white mx-auto min-w-screen-xl px-8 py-2 flex items-center justify-between">
      <img
        className="w-[70px] h-[70px]"
        src={Logo2}
        alt="strong muscle gym logo"
      />
      <SubscribeButton />
    </header>
  );
};

export default Header;
