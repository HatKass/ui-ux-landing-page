import blueButton from "../assets/blue-button.svg";
import image from "../assets/Image.svg";
import gradient from "../assets/Gradient.svg";
import Google from "../assets/Google.svg";
import Trustpilot from "../assets/Trustpilot.svg";
import Slack from "../assets/Slack.svg";
import CNN from "../assets/CNN.svg";
import Clutch from "../assets/Clutch.svg";

const Hero = () => {
  return (
    <main>
      <div className="space-y-6">
        <div className="lg:max-w-[846px] md:max-w-[846px] max-w-[350px] m-auto space-y-6">
          <h4 className="text-center md:leading-[72px] md:text-[64px] lg:leading-[72px] lg:text-[64px] leading-10 text-[32px]  font-medium lg:font-semibold">
            Start monitoring your website like a pro
          </h4>
          <p className="text-center  lg:text-[18px] lg:leading-7 text-[#36485C]">
            Get a bird's eye view with our customizable dashboard. Stay on top
            of things! Revamp your work process with our game-changing feature.
            Boost productivity and efficiency!
          </p>
          <div className="p-3 flex items-center justify-center space-x-4  font-medium">
            <button className="text-white px-8 py-4 rounded-md bg-[#4328EB]">
              Try for free
            </button>
            <button className=" flex items-center  gap-x-[7px]  text-[#4328EB]">
              <span>View Pricing</span>
              <img src={blueButton} alt="blue button" />
            </button>
          </div>
        </div>
        <div className="relative -m-5">
          <img
            className="absolute h-full object-cover"
            src={gradient}
            alt="gradient"
          />
          <img
            className="relative top-0 left-0  lg:translate-x-0 -translate-x-[12px]"
            src={image}
            alt="image"
          />
          <div className="lg:flex items-center  justify-center gap-x-10">
            <p className="relative text-white text-center">
              Trusted by these companies
            </p>
            <div className="flex flex-wrap  gap-[20px] lg:gap-x-10 items-center justify-center relative">
              <img className="w-[102px]" src={Google} alt="google" />
              <img className="w-[102px]" src={Slack} alt="Slack" />
              <img className="w-[102px]" src={Trustpilot} alt="Trustpilot" />
              <img className="w-[102px]" src={CNN} alt="CNN" />
              <img className="w-[102px]" src={Clutch} alt="Clutch" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
