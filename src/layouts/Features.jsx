import feature1 from "../assets/feature-1.svg";
import feature2 from "../assets/feature-2.svg";
import feature3 from "../assets/feature-3.svg";
import check from "../assets/check.svg";
import blueButton from "../assets/blue-button.svg";
import greenButton from "../assets/green-button.svg";
import pinkButton from "../assets/pink-button.svg";

const Features = () => {
  return (
    <main className="py-14">
      <div className="space-y-6 md:grid lg:grid grid-cols-2 gap-x-6 place-items-center">
        <div className="space-y-6 md:space-y-8  lg:space-y-8 lg:max-w-[628px] lg:h-[628px] md:flex lg:flex flex-col justify-center">
          <h3 className="text-[#0085FF] font-medium">Sales Monitoring</h3>
          <p className="text-[#172026] lg:max-w-[572px] font-medium text-2xl lg:text-[42px] leading-9 lg:leading-[58px]  ">
            Simplify your sales monitoring
          </p>
          <img
            src={feature1}
            className="w-full md:hidden lg:hidden"
            alt="image"
          />
          <p className="text-[#36485C] lg:max-w-[572px] lg:text-lg lg:leading-7 ">
            Stay on top of things and revamp your work process with our
            game-changing feature. Get a bird's eye view with our customizable
            dashboard.
          </p>
          <div className="flex flex-col gap-y-3">
            <div className="flex items-center gap-x-4">
              <img src={check} alt="check" />
              <span className="text-[#36485C]">Lorem ipsum dolor sit amet</span>
            </div>
            <div className="flex items-center gap-x-4">
              <img src={check} alt="check" />
              <span className="text-[#36485C]">
                Consectetur adipiscing elit
              </span>
            </div>
            <div className="flex items-center gap-x-4">
              <img src={check} alt="check" />
              <span className="text-[#36485C]">
                Sed do eiusmod tempor incididunt ut labore
              </span>
            </div>
          </div>
          <button className="flex gap-x-3 items-center text-[#0085FF]">
            <span>Learn More</span>
            <img src={blueButton} alt="blue button" />
          </button>
        </div>
        <div>
          <img
            src={feature1}
            className="lg:w-[628px]  lg:h-[620px] lg:block md:block hidden"
            alt="image"
          />
        </div>
      </div>
      <div className="space-y-6 md:grid lg:grid grid-cols-2   gap-x-6 place-items-center">
        <div className="">
          <img
            src={feature2}
            className="lg:w-[628px]  lg:h-[620px] lg:block md:block hidden"
            alt="image"
          />
        </div>
        <div className="space-y-6 md:space-y-8    lg:space-y-8 lg:max-w-[628px] lg:h-[628px] md:flex lg:flex flex-col justify-center">
          <h3 className="font-medium text-[#00A424]">Customer Support</h3>
          <p className="text-[#172026] lg:max-w-[572px] font-medium text-2xl lg:text-[42px] leading-9 lg:leading-[58px]">
            Get in touch with your customers
          </p>
          <img
            src={feature2}
            className="w-full md:hidden lg:hidden"
            alt="image"
          />
          <p className="text-[#36485C] lg:max-w-[572px] lg:text-lg lg:leading-7">
            Stay on top of things and revamp your work process with our
            game-changing feature. Get a bird's eye view with our customizable
            dashboard.
          </p>
          <div className="flex flex-col gap-y-3">
            <div className="flex items-center gap-x-4">
              <img src={check} alt="check" />
              <span className="text-[#36485C]">Lorem ipsum dolor sit amet</span>
            </div>
            <div className="flex items-center gap-x-4">
              <img src={check} alt="check" />
              <span className="text-[#36485C]">
                Consectetur adipiscing elit
              </span>
            </div>
            <div className="flex items-center gap-x-4">
              <img src={check} alt="check" />
              <span className="text-[#36485C]">
                Sed do eiusmod tempor incididunt ut labore
              </span>
            </div>
          </div>
          <button className="flex gap-x-3 items-center text-[#00A424]">
            <span>Learn More</span>
            <img src={greenButton} alt="green button" />
          </button>
        </div>
      </div>
      <div className="space-y-6 md:grid lg:grid grid-cols-2 gap-x-6 place-items-center">
        <div className="space-y-6 md:space-y-8  lg:space-y-8 lg:max-w-[628px] lg:h-[628px] md:flex lg:flex flex-col justify-center">
          <h3 className="font-medium text-[#EB2891]">Growth Monitoring</h3>
          <p className="text-[#172026] lg:max-w-[572px] font-medium text-2xl lg:text-[42px] leading-9 lg:leading-[58px] ">
            Monitor your site’s new subscribers
          </p>
          <img
            src={feature3}
            className="w-full md:hidden lg:hidden"
            alt="image"
          />
          <p className="text-[#36485C] lg:max-w-[572px] lg:text-lg lg:leading-7">
            Stay on top of things and revamp your work process with our
            game-changing feature. Get a bird's eye view with our customizable
            dashboard.
          </p>
          <div className="flex gap-x-6">
            <div className="flex flex-col gap-y-3">
              <span className="text-[#172026] font-medium text-[20px]">
                100+
              </span>
              <span className="text-[#36485C] ">Lorem ipsum dolor sit</span>
            </div>
            <div className="flex flex-col gap-y-3">
              <span className="text-[#172026] font-medium text-[20px]">
                800+
              </span>
              <span className="text-[#36485C] ">Conse adipiscing elit</span>
            </div>
          </div>
          <button className="flex gap-x-3 items-center text-[#EB2891]">
            <span>Learn More</span>
            <img src={pinkButton} alt="green button" />
          </button>
        </div>
        <div>
          <img
            src={feature3}
            className="lg:w-[628px]  lg:h-[620px] lg:block md:block hidden"
            alt="image"
          />
        </div>
      </div>
    </main>
  );
};

export default Features;
