import logo from "../assets/Logo.svg";
import fb from "../assets/Facebook.svg";
import feed from "../assets/Feed.svg";
import X from "../assets/X.svg";

const Footer = () => {
  return (
    <footer className="pt-20 pb-10 lg:px-12 md:px-12">
      <div>
        <div className="flex md:justify-center md:mb-4 lg:justify-center lg:mb-4 items-center gap-x-2">
          <img src={logo} alt="logo" />
          <span className="font-bold">YOUR SITE</span>
        </div>
        <div className="mt-14 lg:mt-0 flex lg:flex-row md:flex-row justify-center gap-x-5 flex-col gap-y-8">
          <span className="flex justify-center">Features</span>
          <span className="flex justify-center">Pricing</span>
          <span className="flex justify-center">Entreprise</span>
          <span className="flex justify-center">Careers</span>
        </div>
        <div className="pt-20 lg:pt-4 flex flex-col gap-y-10">
          <p className="text-[#5F7896] text-sm text-center font-medium leading-[22px]">
            © Copyright 2024. Your Site. All rights reserved.
          </p>
          <div className="flex gap-x-14 justify-center">
            <img src={X} alt="x" />
            <img src={fb} alt="fb" />
            <img src={feed} alt="feed" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
